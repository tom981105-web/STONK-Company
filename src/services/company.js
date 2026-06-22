// src/services/company.js — STONK Company 타이쿤 경영 엔진 (v1.0, 게임머니)
// ───────────────────────────────────────────────────────────────────
// 데이터 위치(기존 STONK 공통 구조 재사용 — 보안 규칙 추가 불필요, rooms/MAIN 하위):
//   개인 현금:  rooms/MAIN/players/{uid}/cash        ← Battle/Bank/Gacha/Arcade 공유(중복 금지)
//   회사:       rooms/MAIN/companies/{uid}           ← 회사 본체 + companyCash(회사 내부 자금)
//   회사 로그:  rooms/MAIN/companies/{uid}/logs
//   회사 뉴스:  rooms/MAIN/companies/{uid}/news + rooms/MAIN/companyNews(Board 연동용)
//   상장후보:   rooms/MAIN/companyMarket/{uid}       ← Battle 종목 편입은 v3.1
//   사업대출:   rooms/MAIN/bank/{uid}/businessLoan   ← Bank 와 공유(개인 대출과 분리)
//   카드/신용/VIP/이벤트: rooms/MAIN/bank/{uid} · rooms/MAIN/bankEvents/current
// 정산/성장은 setInterval 없이 접속·탭·버튼 클릭 시점에만 처리한다.
import { getFirebase, ref, get, update, set, remove, runTransaction, push, query, orderByKey, limitToLast } from "../firebase.js";

export const ROOM = "MAIN";
export const FOUND_COST = 10000000;          // 설립 기본 비용 1,000만
export const SETTLE_MIN_MS = 60 * 60 * 1000; // 최소 1시간 경과해야 정산
export const BIZ_LOAN_RATE_DAY = 0.012;      // 사업대출 이자 하루 1.2%

// ── 숫자 방어 ──
export function num(v) { const x = Number(v); return Number.isFinite(x) ? x : 0; }
export function int(v) { return Math.trunc(num(v)); }
export function won(v) { return int(v).toLocaleString("ko-KR") + "원"; }
export function clamp(v, lo, hi) { v = num(v); return Math.max(lo, Math.min(hi, v)); }

// ── 업종(10) ──
export const SECTORS = {
  fintech:   { id: "fintech",   label: "핀테크",        icon: "💳", revCoef: 0.040, valCoef: 0.42, vol: 0.18, eventSens: 1.4, note: "Bank 이벤트 영향이 큼" },
  game:      { id: "game",      label: "게임",          icon: "🎮", revCoef: 0.045, valCoef: 0.45, vol: 0.28, eventSens: 1.0, note: "변동성 높음 · Gacha/Arcade 확장" },
  bio:       { id: "bio",       label: "바이오",        icon: "🧬", revCoef: 0.046, valCoef: 0.50, vol: 0.34, eventSens: 1.0, note: "성장 변동성이 큼" },
  semicon:   { id: "semicon",   label: "반도체",        icon: "🔬", revCoef: 0.038, valCoef: 0.55, vol: 0.22, eventSens: 1.0, note: "시설 영향 큼 · 가치 상승 큼" },
  ent:       { id: "ent",       label: "엔터테인먼트",  icon: "🎬", revCoef: 0.042, valCoef: 0.44, vol: 0.24, eventSens: 1.0, note: "브랜드 점수 영향 큼" },
  food:      { id: "food",      label: "식품",          icon: "🍱", revCoef: 0.036, valCoef: 0.38, vol: 0.10, eventSens: 0.8, note: "안정적 매출" },
  robot:     { id: "robot",     label: "로봇",          icon: "🤖", revCoef: 0.044, valCoef: 0.50, vol: 0.30, eventSens: 1.0, note: "연구개발 중심" },
  energy:    { id: "energy",    label: "친환경 에너지", icon: "🌱", revCoef: 0.040, valCoef: 0.46, vol: 0.20, eventSens: 1.2, note: "이벤트 보너스 가능" },
  logistics: { id: "logistics", label: "물류",          icon: "🚚", revCoef: 0.037, valCoef: 0.40, vol: 0.12, eventSens: 0.8, note: "꾸준한 수익" },
  security:  { id: "security",  label: "보안",          icon: "🛡️", revCoef: 0.039, valCoef: 0.42, vol: 0.16, eventSens: 0.9, note: "리스크 감소" },
};
export const SECTOR_IDS = Object.keys(SECTORS);

// ── 시작 전략(4) ──
export const STRATEGIES = {
  stable:     { id: "stable",     label: "안정형",     revMod: 0.95, growth: 0.9, riskBase: 18, brand: 0, ipo: 0,  note: "변동성·리스크 낮음" },
  aggressive: { id: "aggressive", label: "공격형",     revMod: 1.15, growth: 1.2, riskBase: 38, brand: 0, ipo: 0,  note: "성장↑ 비용·리스크↑" },
  brand:      { id: "brand",      label: "브랜드형",   revMod: 0.92, growth: 1.0, riskBase: 24, brand: 12, ipo: 0, note: "브랜드 점수↑ 초기 수익↓" },
  rnd:        { id: "rnd",        label: "연구개발형", revMod: 0.90, growth: 1.05, riskBase: 26, brand: 0, ipo: 12, note: "IPO 준비도 보너스 · 초기 비용↑" },
};

// ── 직원(8) ── cost: 고용비, upkeep: 정산 1일당 인건비
export const EMPLOYEES = {
  dev:        { id: "dev",        label: "개발자",       icon: "👨‍💻", cost: 2000000, upkeep: 120000, effect: "성장률 +" },
  marketer:   { id: "marketer",   label: "마케터",       icon: "📣", cost: 1800000, upkeep: 110000, effect: "브랜드 +" },
  sales:      { id: "sales",      label: "영업 담당",    icon: "🤝", cost: 1800000, upkeep: 110000, effect: "매출 +" },
  account:    { id: "account",    label: "회계 담당",    icon: "🧮", cost: 1600000, upkeep: 100000, effect: "비용 −" },
  risk:       { id: "risk",       label: "리스크 매니저", icon: "🧯", cost: 2200000, upkeep: 130000, effect: "리스크 −" },
  researcher: { id: "researcher", label: "연구원",       icon: "🔭", cost: 2400000, upkeep: 140000, effect: "IPO 준비도 +" },
  ops:        { id: "ops",        label: "운영 매니저",  icon: "🛠️", cost: 2000000, upkeep: 120000, effect: "시설 효율 +" },
  brand:      { id: "brand",      label: "브랜드 매니저", icon: "✨", cost: 2200000, upkeep: 130000, effect: "엔터 보너스" },
};
export const EMPLOYEE_IDS = Object.keys(EMPLOYEES);

// ── 시설(6) ── baseCost: 1레벨 비용(레벨마다 1.6배)
export const FACILITIES = {
  office:     { id: "office",     label: "사무실",   icon: "🏢", baseCost: 3000000, upkeep: 60000,  effect: "직원 한도 +" },
  server:     { id: "server",     label: "서버실",   icon: "🖥️", baseCost: 4000000, upkeep: 80000,  effect: "핀테크/게임/보안 매출 +" },
  lab:        { id: "lab",        label: "연구소",   icon: "🧪", baseCost: 5000000, upkeep: 90000,  effect: "바이오/로봇/반도체 성장 +" },
  marketing:  { id: "marketing",  label: "마케팅룸", icon: "📈", baseCost: 3500000, upkeep: 70000,  effect: "브랜드 +" },
  accounting: { id: "accounting", label: "회계실",   icon: "📒", baseCost: 3000000, upkeep: 60000,  effect: "비용 −" },
  security:   { id: "security",   label: "보안실",   icon: "🔒", baseCost: 3500000, upkeep: 70000,  effect: "리스크 −" },
};
export const FACILITY_IDS = Object.keys(FACILITIES);

// ── 단계 ──
export const STAGES = ["STARTUP", "SMALL_BIZ", "SCALE_UP", "ENTERPRISE", "PRE_IPO", "LISTED"];
export const STAGE_LABEL = { STARTUP: "스타트업", SMALL_BIZ: "소기업", SCALE_UP: "성장기업", ENTERPRISE: "대기업", PRE_IPO: "상장 준비", LISTED: "상장기업" };
export function stageRank(s) { return Math.max(0, STAGES.indexOf(s || "STARTUP")); }

// ── 참조 ──
const cashRef = (uid) => ref(getFirebase().db, `rooms/${ROOM}/players/${uid}/cash`);
const playerRef = (uid) => ref(getFirebase().db, `rooms/${ROOM}/players/${uid}`);
const companyRef = (uid) => ref(getFirebase().db, `rooms/${ROOM}/companies/${uid}`);
const logsRef = (uid) => ref(getFirebase().db, `rooms/${ROOM}/companies/${uid}/logs`);
const bankRef = (uid) => ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}`);
const bizLoanRef = (uid) => ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/businessLoan`);
const eventRef = () => ref(getFirebase().db, `rooms/${ROOM}/bankEvents/current`);

// ── 회사 기본/정규화 ──
export function defaultCompany(uid, nickname, info, now) {
  return {
    companyId: "co" + now.toString(36),
    ownerUid: uid, ownerNickname: nickname || "플레이어",
    name: info.name, slogan: info.slogan || "", sector: info.sector, strategy: info.strategy,
    stage: "STARTUP", level: 1,
    companyValue: 30000000, companyCash: 0,
    totalRevenue: 0, totalCost: 0, lastProfit: 0, growthRate: 0,
    brandScore: clamp((STRATEGIES[info.strategy] || {}).brand || 0, 0, 100),
    riskScore: clamp((STRATEGIES[info.strategy] || {}).riskBase || 20, 0, 100),
    ipoReadiness: 0,
    employees: {}, facilities: {}, upgrades: {},
    createdAt: now, updatedAt: now, lastSettledAt: now,
  };
}
function normCompany(raw) {
  const c = (raw && typeof raw === "object") ? raw : {};
  return {
    companyId: c.companyId || "", ownerUid: c.ownerUid || "", ownerNickname: c.ownerNickname || "플레이어",
    name: c.name || "", slogan: c.slogan || "", sector: c.sector || "fintech", strategy: c.strategy || "stable",
    stage: c.stage || "STARTUP", level: Math.max(1, int(c.level) || 1),
    companyValue: Math.max(0, int(c.companyValue)), companyCash: int(c.companyCash),
    totalRevenue: Math.max(0, int(c.totalRevenue)), totalCost: Math.max(0, int(c.totalCost)),
    lastProfit: int(c.lastProfit), growthRate: num(c.growthRate),
    brandScore: clamp(c.brandScore, 0, 100), riskScore: clamp(c.riskScore, 0, 100), ipoReadiness: clamp(c.ipoReadiness, 0, 100),
    employees: (c.employees && typeof c.employees === "object") ? c.employees : {},
    facilities: (c.facilities && typeof c.facilities === "object") ? c.facilities : {},
    upgrades: (c.upgrades && typeof c.upgrades === "object") ? c.upgrades : {},
    createdAt: int(c.createdAt), updatedAt: int(c.updatedAt), lastSettledAt: int(c.lastSettledAt) || int(c.createdAt),
  };
}

// ── 집계 헬퍼 ──
export function empCount(co) { return Object.values(co.employees || {}).reduce((a, e) => a + Math.max(0, int(e && e.count)), 0); }
export function facilityTotal(co) { return Object.values(co.facilities || {}).reduce((a, f) => a + Math.max(0, int(f && f.level)), 0); }
function empCountOf(co, t) { const e = (co.employees || {})[t]; return Math.max(0, int(e && e.count)); }
function facLevel(co, t) { const f = (co.facilities || {})[t]; return Math.max(0, int(f && f.level)); }
export function facilityCost(co, type) { const lv = facLevel(co, type); return Math.floor((FACILITIES[type] || {}).baseCost * Math.pow(1.6, lv)); }
export function employeeCost(co, type) { const n = empCountOf(co, type); return Math.floor((EMPLOYEES[type] || {}).cost * Math.pow(1.18, n)); }

// ── Bank 이벤트 효과(소폭) ──
export function eventEffects(ev) {
  const e = { valBonus: 1, loanMult: 1, riskBonus: 0, warnBoost: false };
  const t = ev && ev.type;
  if (ev && ev.custom && ev.effects) { e.loanMult = clamp(ev.effects.loanRateMultiplier, 0.5, 1.5); if (e.loanMult !== 1) e.loanMult = e.loanMult; return e; }
  if (t === "lowrate") e.loanMult = 0.7;
  else if (t === "highrate") { e.loanMult = 1.3; e.warnBoost = true; }
  else if (t === "boom") e.valBonus = 1.08;
  else if (t === "bust") { e.valBonus = 0.96; e.riskBonus = 3; e.warnBoost = true; }
  else if (t === "caution") e.warnBoost = true;
  return e;
}
export function resolveEvent(raw, now) {
  now = now || Date.now();
  if (raw && raw.manual && (!raw.expiresAt || num(raw.expiresAt) > now) && (raw.title || raw.type)) return raw;
  // Bank 와 동일 seed (날짜+방)
  const d = new Date(now + 9 * 3600000);
  const key = "bankevt:" + d.getUTCFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + d.getUTCDate();
  let h = 2166136261 >>> 0;
  for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
  const ids = ["lowrate", "highrate", "boom", "bust", "insurance", "cashback", "vipweek", "caution"];
  const titles = { lowrate: "저금리 데이", highrate: "고금리 데이", boom: "투자 호황", bust: "투자 침체", insurance: "보험 우대 기간", cashback: "카드 캐시백 이벤트", vipweek: "VIP 우대 기간", caution: "금융 경계주의보" };
  const id = ids[(h >>> 0) % ids.length];
  return { type: id, title: titles[id], manual: false };
}

// ── 신용등급(Bank 와 동일) ──
export function gradeFromScore(s) { s = clamp(s, 0, 100); return s >= 90 ? "S" : s >= 75 ? "A" : s >= 55 ? "B" : s >= 35 ? "C" : s >= 15 ? "D" : "F"; }
const VIP_RANK = { NORMAL: 0, SILVER: 1, GOLD: 2, PLATINUM: 3, BLACK: 4 };
export function vipRank(t) { return VIP_RANK[t] || 0; }
const GRADE_RANK = { F: 0, D: 1, C: 2, B: 3, A: 4, S: 5 };

// 설립/사업대출 할인·한도
export function foundDiscount(bank) {
  let d = 0;
  const g = gradeFromScore((bank && bank.creditScore) != null ? bank.creditScore : 60);
  if (GRADE_RANK[g] >= GRADE_RANK.A) d += 0.05;
  const vt = (bank && bank.vipTier) || "NORMAL";
  if (vt === "SILVER") d += 0.03; else if (vt === "GOLD") d += 0.05; else if (vt === "PLATINUM") d += 0.08; else if (vt === "BLACK") d += 0.10;
  return Math.min(0.20, d);
}
export const BIZ_LIMIT_BY_GRADE = { S: 200000000, A: 120000000, B: 60000000, C: 30000000, D: 12000000, F: 0 };
export function bizLoanLimit(bank) {
  const g = gradeFromScore((bank && bank.creditScore) != null ? bank.creditScore : 60);
  let lim = BIZ_LIMIT_BY_GRADE[g] || 0;
  const vt = (bank && bank.vipTier) || "NORMAL";
  if (vipRank(vt) >= 3) lim = Math.floor(lim * 1.3);     // PLATINUM+ 한도 +30%
  else if (vipRank(vt) >= 2) lim = Math.floor(lim * 1.1); // GOLD +10%
  return lim;
}

// ── seed 소음(정산 1회당 결정적) ──
function noiseUnit(seed) {
  let h = 2166136261 >>> 0; const s = String(seed);
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  h ^= h << 13; h >>>= 0; h ^= h >> 17; h ^= h << 5; h >>>= 0;
  return (h % 100000) / 100000; // 0~1
}

// ── 매출 정산(순수 계산) ──
export function computeSettle(co, now, ev) {
  const last = int(co.lastSettledAt) || now;
  const elapsed = Math.max(0, now - last);
  const days = elapsed / 86400000;
  if (days <= 0) return { applied: false, elapsed };
  const sec = SECTORS[co.sector] || SECTORS.fintech;
  const strat = STRATEGIES[co.strategy] || STRATEGIES.stable;
  const ef = eventEffects(ev);
  // 매출 계수 보정
  let revMul = strat.revMod;
  revMul *= 1 + Math.min(0.6, empCountOf(co, "sales") * 0.04);     // 영업
  if (co.sector === "ent") revMul *= 1 + Math.min(0.3, co.brandScore / 300);
  if ((co.sector === "fintech" || co.sector === "game" || co.sector === "security")) revMul *= 1 + Math.min(0.3, facLevel(co, "server") * 0.05);
  if ((co.sector === "bio" || co.sector === "robot" || co.sector === "semicon")) revMul *= 1 + Math.min(0.3, facLevel(co, "lab") * 0.05);
  const revenue = Math.floor(co.companyValue * sec.revCoef * days * revMul);
  // 비용
  let empUp = 0; for (const t of EMPLOYEE_IDS) empUp += empCountOf(co, t) * EMPLOYEES[t].upkeep;
  let facUp = 0; for (const t of FACILITY_IDS) facUp += facLevel(co, t) * FACILITIES[t].upkeep;
  let cost = Math.floor((empUp + facUp) * days);
  cost = Math.floor(cost * (1 - Math.min(0.4, empCountOf(co, "account") * 0.05 + facLevel(co, "accounting") * 0.04))); // 회계 비용절감
  const riskEff = Math.max(0, co.riskScore - empCountOf(co, "risk") * 5 - facLevel(co, "security") * 4);
  const riskCost = Math.floor(co.companyValue * (riskEff / 100) * 0.01 * days);
  cost += riskCost;
  // 변동성 소음(±vol, 결정적)
  const u = noiseUnit(co.companyId + ":" + last);
  const noise = (u - 0.5) * 2 * sec.vol; // -vol ~ +vol
  let profit = Math.floor((revenue - cost) * (1 + noise) * ef.valBonus);
  // 회사 가치 상승(이익의 일부, 음수면 0)
  const valueGain = Math.max(0, Math.floor(profit * sec.valCoef * strat.growth));
  return { applied: true, elapsed, days, revenue, cost, profit, valueGain, riskAdd: ef.riskBonus, eventTitle: ev && ev.title };
}

// ── IPO 준비도(파생) ──
export function computeIpo(co, bank) {
  const valueScore = Math.min(40, Math.floor(co.companyValue / 125000000)); // 5B → 40
  const brandScore = Math.min(25, Math.floor(co.brandScore * 0.25));
  const profitScore = co.lastProfit > 0 ? 12 : 0;
  const facScore = Math.min(12, facilityTotal(co) * 1.5);
  const empScore = Math.min(8, empCount(co));
  const riskPen = Math.floor(co.riskScore * 0.25);
  const owed = bank && bank.businessLoan ? int(bank.businessLoan.principal) + int(bank.businessLoan.interest) : 0;
  const loanPen = owed > 0 ? 8 : 0;
  return clamp(valueScore + brandScore + profitScore + facScore + empScore - riskPen - loanPen, 0, 100);
}

// 단계 승급 판정(가능하면 한 단계)
export function nextStage(co, bank) {
  const v = co.companyValue, emp = empCount(co), fac = facilityTotal(co), ipo = co.ipoReadiness;
  const grade = gradeFromScore((bank && bank.creditScore) != null ? bank.creditScore : 60);
  const owedOverdue = bank && bank.businessLoan && int(bank.businessLoan.interest) > int(bank.businessLoan.principal) * 0.3;
  switch (co.stage) {
    case "STARTUP": if (v >= 50000000 && emp >= 3 && fac >= 2) return "SMALL_BIZ"; break;
    case "SMALL_BIZ": if (v >= 200000000 && co.brandScore >= 30 && co.lastProfit >= 10000000) return "SCALE_UP"; break;
    case "SCALE_UP": if (v >= 1000000000 && emp >= 20 && co.brandScore >= 60) return "ENTERPRISE"; break;
    case "ENTERPRISE": if (v >= 5000000000 && ipo >= 70 && co.riskScore <= 40) return "PRE_IPO"; break;
    case "PRE_IPO": if (ipo >= 100 && GRADE_RANK[grade] >= GRADE_RANK.B && !owedOverdue) return "LISTED"; break;
  }
  return null;
}

// ── 거래 로그 ──
export function logItem(type, title, amount, memo) { return { type, title: title || "", amount: int(amount), memo: memo || "", createdAt: Date.now() }; }
async function addLog(uid, item) { await push(logsRef(uid), item); }

// ── 상태 로드(접속 시 1회) ──
export async function loadState(uid) {
  const now = Date.now();
  const [pSnap, cSnap, bSnap, eSnap, lSnap] = await Promise.all([
    get(playerRef(uid)),
    get(companyRef(uid)),
    get(bankRef(uid)),
    get(eventRef()),
    get(query(logsRef(uid), orderByKey(), limitToLast(15))),
  ]);
  const pv = pSnap.val() || {};
  const cash = int(pv.cash);
  const nickname = pv.nickname || (bSnap.val() && bSnap.val().nickname) || "플레이어";
  const bank = bSnap.val() || {};
  const event = resolveEvent(eSnap.val(), now);
  const exists = cSnap.exists();
  let company = exists ? normCompany(cSnap.val()) : null;
  let settleFeed = null;

  if (company) {
    // 사업대출 이자 정산(있으면)
    await settleBusinessLoan(uid, bank, now);
    // 매출 정산: 1시간 이상 경과 시에만 기록
    const st = computeSettle(company, now, event);
    if (st.applied && st.elapsed >= SETTLE_MIN_MS) {
      company = applySettle(company, st, now);
      company.ipoReadiness = computeIpo(company, bank);
      await update(companyRef(uid), pruneCompany(company));
      await addLog(uid, logItem("settle", "실적 정산", st.profit, `매출 ${won(st.revenue)} · 비용 ${won(st.cost)}${st.eventTitle ? " · " + st.eventTitle : ""}`));
      settleFeed = st;
    } else {
      // 표시용 IPO 갱신(쓰기 없음)
      company.ipoReadiness = computeIpo(company, bank);
    }
  }
  const logs = lSnap.exists()
    ? Object.entries(lSnap.val()).map(([id, l]) => ({ id, ...l })).sort((a, b) => num(b.createdAt) - num(a.createdAt))
    : [];
  return { uid, cash, nickname, company, bank, event, logs, settleFeed };
}

function applySettle(co, st, now) {
  const nc = { ...co };
  nc.companyCash = Math.max(0, int(co.companyCash) + st.profit);
  nc.companyValue = Math.max(0, int(co.companyValue) + st.valueGain);
  nc.totalRevenue = int(co.totalRevenue) + Math.max(0, st.revenue);
  nc.totalCost = int(co.totalCost) + Math.max(0, st.cost);
  nc.lastProfit = st.profit;
  nc.growthRate = nc.companyValue > 0 ? st.profit / nc.companyValue : 0;
  nc.riskScore = clamp(co.riskScore + (st.riskAdd || 0) + (st.profit < 0 ? 2 : -1), 0, 100);
  nc.lastSettledAt = now;
  return nc;
}
function pruneCompany(co) {
  return {
    companyId: co.companyId, ownerUid: co.ownerUid, ownerNickname: co.ownerNickname,
    name: co.name, slogan: co.slogan, sector: co.sector, strategy: co.strategy,
    stage: co.stage, level: Math.max(1, int(co.level)),
    companyValue: Math.max(0, int(co.companyValue)), companyCash: int(co.companyCash),
    totalRevenue: Math.max(0, int(co.totalRevenue)), totalCost: Math.max(0, int(co.totalCost)),
    lastProfit: int(co.lastProfit), growthRate: num(co.growthRate),
    brandScore: clamp(co.brandScore, 0, 100), riskScore: clamp(co.riskScore, 0, 100), ipoReadiness: clamp(co.ipoReadiness, 0, 100),
    employees: co.employees || {}, facilities: co.facilities || {}, upgrades: co.upgrades || {},
    createdAt: int(co.createdAt), updatedAt: Date.now(), lastSettledAt: int(co.lastSettledAt),
  };
}

// ════════════ 카드 결제(Bank 카드 재사용, 새 경로 만들지 않음) ════════════
// 반환: 결제액(성공) / -1 미발급·정지·분실 / -2 한도초과 / -3 미납 / 0 무효
async function chargeCard(uid, amount, label) {
  amount = Math.max(0, int(amount));
  if (amount <= 0) return 0;
  const now = Date.now();
  const c = (await get(ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/card`))).val() || {};
  if (!c.enabled || c.suspended || c.lost) return -1;
  if (c.overdue) return -3;
  const limit = int(c.cardLimit), used = int(c.usedAmount);
  if (used + amount > limit) return -2;
  const dueAt = num(c.dueAt) > 0 ? num(c.dueAt) : now + 24 * 3600 * 1000;
  await update(ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/card`), { usedAmount: used + amount, dueAt, updatedAt: now });
  await push(ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/tx`), { type: "card_use", title: label || "Company 결제", amount: -amount, beforeCash: 0, afterCash: 0, memo: "게임머니 카드 결제(청구 예정) · Company", createdAt: now });
  await push(ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/messages`), { type: "card", title: "STONK Card 결제", body: `${label || "Company 결제"} ${won(amount)}이 카드로 결제되었습니다(청구 예정).`, amount: -amount, relatedId: "", read: false, actionLabel: "", actionUrl: "", createdAt: now });
  return amount;
}
function cardFailMsg(code) {
  if (code === -2) return "STONK Card 한도 초과로 결제할 수 없습니다.";
  if (code === -3) return "카드 미납 상태로 결제할 수 없습니다. 먼저 청구액을 납부해 주세요.";
  return "카드가 미발급/정지/분실 상태입니다. 결제수단을 변경해 주세요.";
}

// ════════════ 사업대출(Bank businessLoan 노드) ════════════
async function settleBusinessLoan(uid, bank, now) {
  const bl = bank && bank.businessLoan;
  if (!bl || int(bl.principal) <= 0) return;
  const last = int(bl.lastSettledAt) || now;
  const days = Math.max(0, now - last) / 86400000;
  if (days < SETTLE_MIN_MS / 86400000) return;
  const interest = Math.floor(int(bl.principal) * BIZ_LOAN_RATE_DAY * days);
  if (interest <= 0) return;
  await update(bizLoanRef(uid), { interest: int(bl.interest) + interest, lastSettledAt: now, updatedAt: now });
  bank.businessLoan.interest = int(bl.interest) + interest;
  bank.businessLoan.lastSettledAt = now;
}
export async function takeBusinessLoan(uid, amount, state) {
  amount = int(amount);
  if (amount <= 0) throw new Error("금액을 확인하세요.");
  if (!state.company) throw new Error("먼저 회사를 설립하세요.");
  const bl = (state.bank && state.bank.businessLoan) || {};
  const limit = bizLoanLimit(state.bank);
  const owed = int(bl.principal);
  if (limit <= 0) throw new Error("현재 신용등급으로는 사업대출이 불가합니다.");
  if (owed + amount > limit) throw new Error(`사업대출 한도 초과 (한도 ${won(limit)}, 현재 ${won(owed)})`);
  const now = Date.now();
  await update(bizLoanRef(uid), {
    principal: owed + amount, interest: int(bl.interest), limit, companyId: state.company.companyId,
    lastSettledAt: int(bl.lastSettledAt) || now, createdAt: int(bl.createdAt) || now, updatedAt: now,
  });
  await runTransaction(companyRef(uid), (c) => { if (!c) return c; c.companyCash = int(c.companyCash) + amount; c.updatedAt = now; return c; });
  // Bank 거래내역에도 기록(개인 대출과 구분되는 사업대출)
  await push(ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/tx`), { type: "biz_loan", title: "사업대출 실행", amount, beforeCash: 0, afterCash: 0, memo: `회사자금 입금 · 잔액 ${won(owed + amount)}`, createdAt: now });
  await addLog(uid, logItem("loan", "사업대출 실행", amount, `회사 자금 +${won(amount)}`));
  return `사업대출 완료 (+${won(amount)} → 회사 자금)`;
}
// 상환: from = 'company' | 'cash'
export async function repayBusinessLoan(uid, amount, from, state) {
  amount = int(amount);
  if (amount <= 0) throw new Error("금액을 확인하세요.");
  const bl = (state.bank && state.bank.businessLoan) || {};
  const totalOwed = int(bl.principal) + int(bl.interest);
  if (totalOwed <= 0) throw new Error("상환할 사업대출이 없습니다.");
  const pay = Math.min(amount, totalOwed);
  const now = Date.now();
  if (from === "cash") {
    const res = await runTransaction(cashRef(uid), (c) => { const base = (c == null) ? int(state.cash) : int(c); if (base < pay) return; return base - pay; });
    if (!res.committed) throw new Error("보유 현금이 부족합니다.");
  } else {
    if (!state.company || int(state.company.companyCash) < pay) throw new Error("회사 자금이 부족합니다.");
    await runTransaction(companyRef(uid), (c) => { if (!c) return c; if (int(c.companyCash) < pay) return; c.companyCash = int(c.companyCash) - pay; c.updatedAt = now; return c; });
  }
  let remain = pay;
  const payI = Math.min(remain, int(bl.interest)); remain -= payI;
  const payP = Math.min(remain, int(bl.principal));
  const newP = Math.max(0, int(bl.principal) - payP), newI = Math.max(0, int(bl.interest) - payI);
  await update(bizLoanRef(uid), { principal: newP, interest: newI, updatedAt: now });
  await push(ref(getFirebase().db, `rooms/${ROOM}/bank/${uid}/tx`), { type: "biz_repay", title: "사업대출 상환", amount: -pay, beforeCash: 0, afterCash: 0, memo: `이자 ${won(payI)} · 원금 ${won(payP)} · ${from === "cash" ? "개인현금" : "회사자금"}`, createdAt: now });
  await addLog(uid, logItem("loan", "사업대출 상환", -pay, `이자 ${won(payI)} · 원금 ${won(payP)}`));
  return newP + newI <= 0 ? "사업대출 전액 상환 완료 🎉" : `상환 완료 (잔액 ${won(newP + newI)})`;
}

// ════════════ 회사 설립 ════════════
export function sanitizeName(name) { return String(name || "").replace(/[<>{}\[\]\\/]/g, "").trim().slice(0, 24); }
export function foundCost(bank) { return Math.max(1, Math.floor(FOUND_COST * (1 - foundDiscount(bank)))); }

// payMethod: 'cash' | 'card' | 'loan'
export async function foundCompany(uid, info, state) {
  if (state.company) throw new Error("이미 회사를 보유하고 있습니다. (유저당 1개)");
  const name = sanitizeName(info.name);
  if (!name) throw new Error("회사명을 입력하세요.");
  if (!SECTORS[info.sector]) throw new Error("업종을 선택하세요.");
  if (!STRATEGIES[info.strategy]) throw new Error("시작 전략을 선택하세요.");
  const cost = foundCost(state.bank);
  const now = Date.now();
  const pm = info.payMethod || "cash";

  if (pm === "card") {
    const r = await chargeCard(uid, cost, "회사 설립");
    if (r <= 0) throw new Error(cardFailMsg(r));
  } else if (pm === "loan") {
    const limit = bizLoanLimit(state.bank);
    const bl = (state.bank && state.bank.businessLoan) || {};
    if (limit <= 0 || int(bl.principal) + cost > limit) throw new Error("사업대출 한도가 부족합니다. 현금/카드로 설립하거나 한도를 확인하세요.");
    await update(bizLoanRef(uid), { principal: int(bl.principal) + cost, interest: int(bl.interest), limit, companyId: "pending", lastSettledAt: int(bl.lastSettledAt) || now, createdAt: int(bl.createdAt) || now, updatedAt: now });
  } else {
    const res = await runTransaction(cashRef(uid), (c) => { const base = (c == null) ? int(state.cash) : int(c); if (base < cost) return; return base - cost; });
    if (!res.committed) throw new Error("보유 현금이 부족합니다. (Bank 사업대출/카드 결제를 이용할 수 있습니다)");
  }

  const co = defaultCompany(uid, state.nickname, { name, slogan: info.slogan, sector: info.sector, strategy: info.strategy }, now);
  await set(companyRef(uid), pruneCompany(co));
  if (pm === "loan") await update(bizLoanRef(uid), { companyId: co.companyId });
  await addLog(uid, logItem("found", "회사 설립", -cost, `${SECTORS[info.sector].label} · ${pm === "card" ? "카드 결제" : pm === "loan" ? "사업대출" : "현금"}`));
  await push(ref(getFirebase().db, `rooms/${ROOM}/companyNews`), { uid, companyName: name, type: "found", title: `${name} 설립`, body: `${SECTORS[info.sector].label} 업종의 새 회사가 STONK 타이쿤에 등장했습니다.`, impact: "neutral", createdAt: now });
  return `${name} 설립 완료! (${SECTORS[info.sector].label})`;
}

// ════════════ 자금 이동 ════════════
export async function investToCompany(uid, amount, state) {
  amount = int(amount);
  if (amount <= 0) throw new Error("금액을 확인하세요.");
  if (!state.company) throw new Error("먼저 회사를 설립하세요.");
  const res = await runTransaction(cashRef(uid), (c) => { const base = (c == null) ? int(state.cash) : int(c); if (base < amount) return; return base - amount; });
  if (!res.committed) throw new Error("보유 현금이 부족합니다.");
  const now = Date.now();
  await runTransaction(companyRef(uid), (c) => { if (!c) return c; c.companyCash = int(c.companyCash) + amount; c.companyValue = int(c.companyValue) + Math.floor(amount * 0.3); c.updatedAt = now; return c; });
  await addLog(uid, logItem("invest", "회사에 출자", amount, "개인 현금 → 회사 자금"));
  return `출자 완료 (+${won(amount)} 회사 자금)`;
}
export async function withdrawFromCompany(uid, amount, state) {
  amount = int(amount);
  if (amount <= 0) throw new Error("금액을 확인하세요.");
  if (!state.company || int(state.company.companyCash) < amount) throw new Error("회사 자금이 부족합니다.");
  const now = Date.now();
  await runTransaction(companyRef(uid), (c) => {
    if (!c) return c; if (int(c.companyCash) < amount) return;
    c.companyCash = int(c.companyCash) - amount;
    c.brandScore = clamp(num(c.brandScore) - 1, 0, 100);   // 인출 시 브랜드 소폭 감소
    c.riskScore = clamp(num(c.riskScore) + 1, 0, 100);     // 리스크 소폭 증가
    c.updatedAt = now; return c;
  });
  await runTransaction(cashRef(uid), (c) => int(c) + amount);
  await addLog(uid, logItem("withdraw", "회사 자금 인출", amount, "회사 자금 → 개인 현금"));
  return `인출 완료 (+${won(amount)} 개인 현금)`;
}

// ════════════ 직원/시설 (회사 자금 또는 카드 결제) ════════════
async function payFromCompanyOrCard(uid, cost, state, payMethod, label) {
  if (payMethod === "card") {
    const r = await chargeCard(uid, cost, label);
    if (r <= 0) throw new Error(cardFailMsg(r));
    return "card";
  }
  if (!state.company || int(state.company.companyCash) < cost) throw new Error("회사 자금이 부족합니다. (출자/사업대출/카드 결제를 이용하세요)");
  await runTransaction(companyRef(uid), (c) => { if (!c) return c; if (int(c.companyCash) < cost) return; c.companyCash = int(c.companyCash) - cost; c.updatedAt = Date.now(); return c; });
  return "company";
}
export async function hireEmployee(uid, type, state, payMethod) {
  if (!EMPLOYEES[type]) throw new Error("직원 타입을 확인하세요.");
  if (!state.company) throw new Error("먼저 회사를 설립하세요.");
  const cost = employeeCost(state.company, type);
  await payFromCompanyOrCard(uid, cost, state, payMethod, `${EMPLOYEES[type].label} 고용`);
  const now = Date.now();
  await runTransaction(companyRef(uid), (c) => {
    if (!c) return c; c.employees = c.employees || {}; const e = c.employees[type] || { count: 0, level: 1 };
    e.count = int(e.count) + 1; e.level = Math.max(1, int(e.level));
    c.employees[type] = e;
    applyEmpEffect(c, type, +1); c.updatedAt = now; return c;
  });
  await addLog(uid, logItem("hire", `${EMPLOYEES[type].label} 고용`, -cost, payMethod === "card" ? "카드 결제" : "회사 자금"));
  return `${EMPLOYEES[type].label} 고용 완료`;
}
export async function fireEmployee(uid, type, state) {
  if (!state.company) throw new Error("회사가 없습니다.");
  const e = (state.company.employees || {})[type];
  if (!e || int(e.count) <= 0) throw new Error("해고할 직원이 없습니다.");
  await runTransaction(companyRef(uid), (c) => {
    if (!c) return c; const ee = (c.employees || {})[type]; if (!ee || int(ee.count) <= 0) return;
    ee.count = int(ee.count) - 1; applyEmpEffect(c, type, -1); c.updatedAt = Date.now(); return c;
  });
  await addLog(uid, logItem("fire", `${EMPLOYEES[type].label} 해고`, 0, "인건비 절감"));
  return `${EMPLOYEES[type].label} 1명 해고`;
}
export function employeeLevelCost(co, type) { const e = (co.employees || {})[type] || {}; return Math.floor((EMPLOYEES[type] || {}).cost * 0.6 * Math.max(1, int(e.level))); }
export async function levelUpEmployee(uid, type, state, payMethod) {
  if (!state.company) throw new Error("회사가 없습니다.");
  const e = (state.company.employees || {})[type];
  if (!e || int(e.count) <= 0) throw new Error("먼저 직원을 고용하세요.");
  const cost = employeeLevelCost(state.company, type);
  await payFromCompanyOrCard(uid, cost, state, payMethod, `${EMPLOYEES[type].label} 레벨업`);
  await runTransaction(companyRef(uid), (c) => {
    if (!c) return c; const ee = (c.employees || {})[type]; if (!ee) return; ee.level = Math.max(1, int(ee.level)) + 1;
    applyEmpEffect(c, type, +0.5); c.updatedAt = Date.now(); return c;
  });
  await addLog(uid, logItem("levelup", `${EMPLOYEES[type].label} 레벨업`, -cost, ""));
  return `${EMPLOYEES[type].label} 레벨업 완료`;
}
function applyEmpEffect(c, type, dir) {
  // 즉시 반영되는 점수성 효과(매출/비용은 정산에서 반영)
  if (type === "marketer") c.brandScore = clamp(num(c.brandScore) + 3 * dir, 0, 100);
  else if (type === "risk") c.riskScore = clamp(num(c.riskScore) - 4 * dir, 0, 100);
  else if (type === "researcher") c.ipoReadiness = clamp(num(c.ipoReadiness) + 2 * dir, 0, 100);
  else if (type === "brand") c.brandScore = clamp(num(c.brandScore) + 2 * dir, 0, 100);
  else if (type === "dev") c.growthRate = num(c.growthRate);
}
export async function upgradeFacility(uid, type, state, payMethod) {
  if (!FACILITIES[type]) throw new Error("시설을 확인하세요.");
  if (!state.company) throw new Error("먼저 회사를 설립하세요.");
  const cost = facilityCost(state.company, type);
  await payFromCompanyOrCard(uid, cost, state, payMethod, `${FACILITIES[type].label} 업그레이드`);
  await runTransaction(companyRef(uid), (c) => {
    if (!c) return c; c.facilities = c.facilities || {}; const f = c.facilities[type] || { level: 0 };
    f.level = int(f.level) + 1; c.facilities[type] = f;
    if (type === "marketing") c.brandScore = clamp(num(c.brandScore) + 3, 0, 100);
    if (type === "security") c.riskScore = clamp(num(c.riskScore) - 3, 0, 100);
    c.companyValue = int(c.companyValue) + Math.floor(cost * 0.4);
    c.updatedAt = Date.now(); return c;
  });
  await addLog(uid, logItem("facility", `${FACILITIES[type].label} 업그레이드`, -cost, payMethod === "card" ? "카드 결제" : "회사 자금"));
  return `${FACILITIES[type].label} 업그레이드 완료`;
}

// ════════════ 단계 승급 / IPO ════════════
export async function settleNow(uid, state) {
  if (!state.company) throw new Error("회사가 없습니다.");
  const now = Date.now();
  const st = computeSettle(state.company, now, state.event);
  if (!st.applied) throw new Error("정산할 내용이 없습니다.");
  const co = applySettle(state.company, st, now);
  co.ipoReadiness = computeIpo(co, state.bank);
  await update(companyRef(uid), pruneCompany(co));
  await addLog(uid, logItem("settle", "실적 정산", st.profit, `매출 ${won(st.revenue)} · 비용 ${won(st.cost)}${st.eventTitle ? " · " + st.eventTitle : ""}`));
  return st.profit >= 0 ? `정산 완료: 순이익 +${won(st.profit)}` : `정산 완료: 손실 ${won(st.profit)} (경영 주의)`;
}
export async function promoteStage(uid, state) {
  if (!state.company) throw new Error("회사가 없습니다.");
  const ns = nextStage(state.company, state.bank);
  if (!ns) throw new Error("아직 다음 단계 조건을 충족하지 않았습니다.");
  await update(companyRef(uid), { stage: ns, level: int(state.company.level) + 1, updatedAt: Date.now() });
  await addLog(uid, logItem("stage", "단계 승급", 0, `${STAGE_LABEL[state.company.stage]} → ${STAGE_LABEL[ns]}`));
  await push(ref(getFirebase().db, `rooms/${ROOM}/companyNews`), { uid, companyName: state.company.name, type: "stage", title: `${state.company.name} ${STAGE_LABEL[ns]} 승급`, body: `${state.company.name}이(가) ${STAGE_LABEL[ns]} 단계로 성장했습니다.`, impact: "up", createdAt: Date.now() });
  return `🎉 ${STAGE_LABEL[ns]} 단계로 승급했습니다!`;
}
// IPO 체크리스트
export function ipoChecklist(co, bank) {
  const grade = gradeFromScore((bank && bank.creditScore) != null ? bank.creditScore : 60);
  const owed = bank && bank.businessLoan ? int(bank.businessLoan.principal) + int(bank.businessLoan.interest) : 0;
  const overdue = bank && bank.businessLoan && int(bank.businessLoan.interest) > int(bank.businessLoan.principal) * 0.3;
  return [
    { ok: co.companyValue >= 5000000000, label: "회사 가치 50억원 이상" },
    { ok: co.brandScore >= 70, label: "브랜드 점수 70 이상" },
    { ok: co.riskScore <= 40, label: "리스크 점수 40 이하" },
    { ok: co.lastProfit > 0, label: "최근 순이익 플러스" },
    { ok: GRADE_RANK[grade] >= GRADE_RANK.B, label: "Bank 신용등급 B 이상" },
    { ok: !overdue, label: "사업대출 연체 없음" },
  ];
}
export async function applyIpo(uid, state) {
  if (!state.company) throw new Error("회사가 없습니다.");
  const co = state.company;
  if (co.ipoReadiness < 100) throw new Error("IPO 준비도가 100%가 아닙니다.");
  const list = ipoChecklist(co, state.bank);
  if (!list.every((x) => x.ok)) throw new Error("IPO 체크리스트를 모두 충족해야 합니다.");
  const now = Date.now();
  const ticker = ("STK" + (co.name.replace(/[^A-Za-z0-9가-힣]/g, "").slice(0, 3).toUpperCase() || "CO") + String(now % 100)).slice(0, 8);
  const ipoPrice = Math.max(1000, Math.floor(co.companyValue / 1000000)); // 가치/100만 → 주가(게임머니)
  const marketCap = co.companyValue;
  await set(ref(getFirebase().db, `rooms/${ROOM}/companyMarket/${uid}`), {
    listed: false, status: "candidate", ticker, ipoPrice, marketCap, sector: co.sector, companyName: co.name, listedAt: 0, createdAt: now, updatedAt: now,
  });
  await update(companyRef(uid), { stage: "LISTED", level: int(co.level) + 1, updatedAt: now });
  await addLog(uid, logItem("ipo", "IPO 상장 후보 등록", 0, `티커 ${ticker} · 공모가 ${won(ipoPrice)}`));
  await push(ref(getFirebase().db, `rooms/${ROOM}/companyNews`), { uid, companyName: co.name, type: "ipo", title: `${co.name} 상장 후보 등록`, body: `${co.name}이(가) IPO 심사를 통과해 상장 후보(${ticker})로 등록되었습니다. Battle 종목 편입은 v3.1에서 진행됩니다.`, impact: "up", createdAt: now });
  return `🏆 IPO 상장 후보 등록 완료! (티커 ${ticker})`;
}

// ════════════ 도전과제(업적) — 기존 지표로 판정, 달성 시 회사자금 1회 보상 ════════════
// cur/need 로 진행도 표시, reward 는 회사자금(게임머니)으로 지급. 경제 엔진은 건드리지 않는다.
export const ACHIEVEMENTS = [
  { id: "firstHire",  icon: "👤", label: "첫 직원 고용",       desc: "직원을 1명 이상 고용", reward: 500000,    cur: (c) => empCount(c),        need: 1 },
  { id: "team5",      icon: "👥", label: "팀 빌딩",            desc: "직원 5명 달성",       reward: 2000000,   cur: (c) => empCount(c),        need: 5 },
  { id: "team15",     icon: "🏢", label: "조직 확장",          desc: "직원 15명 달성",      reward: 8000000,   cur: (c) => empCount(c),        need: 15 },
  { id: "fac5",       icon: "🏗️", label: "시설 투자",          desc: "시설 합계 Lv.5",      reward: 2000000,   cur: (c) => facilityTotal(c),   need: 5 },
  { id: "fac12",      icon: "🏭", label: "인프라 강자",        desc: "시설 합계 Lv.12",     reward: 6000000,   cur: (c) => facilityTotal(c),   need: 12 },
  { id: "firstRev",   icon: "📊", label: "첫 매출",            desc: "누적 매출 발생",      reward: 500000,    cur: (c) => (int(c.totalRevenue) > 0 ? 1 : 0), need: 1 },
  { id: "val1e8",     icon: "💎", label: "가치 1억",           desc: "회사 가치 1억원",     reward: 5000000,   cur: (c) => int(c.companyValue), need: 100000000 },
  { id: "val1e9",     icon: "👑", label: "가치 10억",          desc: "회사 가치 10억원",    reward: 30000000,  cur: (c) => int(c.companyValue), need: 1000000000 },
  { id: "brand50",    icon: "✨", label: "인지도 상승",        desc: "브랜드 점수 50",      reward: 3000000,   cur: (c) => int(c.brandScore),  need: 50 },
  { id: "brand80",    icon: "🌟", label: "톱 브랜드",          desc: "브랜드 점수 80",      reward: 10000000,  cur: (c) => int(c.brandScore),  need: 80 },
  { id: "risklow",    icon: "🛡️", label: "안정 경영",          desc: "리스크 20 이하",      reward: 3000000,   cur: (c) => (int(c.riskScore) <= 20 ? 1 : 0), need: 1 },
  { id: "ipo50",      icon: "📈", label: "상장 준비",          desc: "IPO 준비도 50%",      reward: 5000000,   cur: (c) => int(c.ipoReadiness), need: 50 },
  { id: "ipo100",     icon: "🚀", label: "상장 직전",          desc: "IPO 준비도 100%",     reward: 20000000,  cur: (c) => int(c.ipoReadiness), need: 100 },
  { id: "stageSmall", icon: "🎉", label: "소기업 승급",        desc: "소기업 단계 도달",    reward: 3000000,   cur: (c) => (stageRank(c.stage) >= 1 ? 1 : 0), need: 1 },
  { id: "stageEnt",   icon: "🏙️", label: "대기업 승급",        desc: "대기업 단계 도달",    reward: 50000000,  cur: (c) => (stageRank(c.stage) >= 3 ? 1 : 0), need: 1 },
  { id: "listed",     icon: "🏆", label: "상장 달성",          desc: "IPO 상장 후보 등록",  reward: 200000000, cur: (c) => (c.stage === "LISTED" ? 1 : 0), need: 1 },
];
export function achStatus(co) {
  const claimed = (co && co.upgrades && co.upgrades.ach) || {};
  return ACHIEVEMENTS.map((a) => {
    const cur = Math.max(0, int(a.cur(co)));
    const met = cur >= a.need;
    return { id: a.id, icon: a.icon, label: a.label, desc: a.desc, reward: a.reward, cur, need: a.need, met, claimed: !!claimed[a.id], pct: clamp(Math.round((cur / a.need) * 100), 0, 100) };
  });
}
export function achSummary(co) {
  const st = achStatus(co);
  return { total: st.length, claimed: st.filter((x) => x.claimed).length, claimable: st.filter((x) => x.met && !x.claimed).length };
}
export async function claimAchievement(uid, id, state) {
  if (!state.company) throw new Error("회사가 없습니다.");
  const def = ACHIEVEMENTS.find((a) => a.id === id);
  if (!def) throw new Error("알 수 없는 도전과제입니다.");
  const cur = Math.max(0, int(def.cur(state.company)));
  if (cur < def.need) throw new Error("아직 달성하지 못했습니다.");
  if (state.company.upgrades && state.company.upgrades.ach && state.company.upgrades.ach[id]) throw new Error("이미 보상을 받았습니다.");
  let granted = false;
  await runTransaction(companyRef(uid), (c) => {
    if (!c) return c;
    c.upgrades = c.upgrades || {}; c.upgrades.ach = c.upgrades.ach || {};
    if (c.upgrades.ach[id]) return; // 동시성: 이미 수령 → 중단
    c.upgrades.ach[id] = Date.now();
    c.companyCash = int(c.companyCash) + def.reward;
    c.updatedAt = Date.now();
    granted = true;
    return c;
  });
  if (!granted) throw new Error("이미 보상을 받았습니다.");
  await addLog(uid, logItem("invest", `도전과제 보상 · ${def.label}`, def.reward, "도전과제 달성 보상(회사 자금)"));
  return `🏅 도전과제 '${def.label}' 보상 ${won(def.reward)} 지급!`;
}
