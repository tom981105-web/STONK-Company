// src/main.js — STONK Company 진입점 (세션 게이트 · 타이쿤 경영 UI)
import "./style.css";
import { isConfigured, getCurrentUserOnce } from "./firebase.js";
import { showHomeGate } from "./homeGate.js";
import * as Co from "./services/company.js";

const {
  won, int, num, SECTORS, SECTOR_IDS, STRATEGIES, EMPLOYEES, EMPLOYEE_IDS, FACILITIES, FACILITY_IDS,
  STAGE_LABEL, stageRank, empCount, facilityTotal, facilityCost, employeeCost, employeeLevelCost,
  foundCost, foundDiscount, gradeFromScore, vipRank, bizLoanLimit, computeIpo, nextStage, ipoChecklist, resolveEvent,
} = Co;

const ADMIN_UID = "yaV8N60yIiUggaWNpNF2VhkCwxb2";
const app = document.getElementById("app");
let state = null;
let tab = "dashboard";
let isAdmin = false;
let busy = false;
let payMethod = "cash"; // 설립 결제수단
let foundForm = { name: "", sector: "fintech", strategy: "stable", slogan: "" };
let photoMode = false; // 라이브 오피스 포토(스냅샷) 모드
let hireAnim = null;   // 직원 입장 연출 transient(저장 없음)
let facAnim = null;    // 시설 공사중 연출 transient(저장 없음)

boot();
async function boot() {
  if (!isConfigured) { fatal("Firebase 설정이 비어 있습니다."); return; }
  renderLoading();
  let user = null;
  try { user = await getCurrentUserOnce(); } catch (e) {}
  if (!user) { showHomeGate({ message: "STONK Home에서 로그인 후 이용해 주세요. 같은 계정의 자산이 그대로 연결됩니다." }); renderGate(); return; }
  try {
    isAdmin = user.uid === ADMIN_UID || String(user.email || "").toLowerCase() === "tomem@naver.com";
    state = await Co.loadState(user.uid);
    render();
    maybeSettleFeed();
  } catch (e) { console.error("[company] 로드 실패:", e); fatal("회사 데이터를 불러오지 못했습니다: " + (e && e.message)); }
}
async function reload() { if (!state) return; try { state = await Co.loadState(state.uid); } catch (e) { console.warn(e); } render(); }

// ── 공용 ──
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function toast(msg, kind = "ok") { const t = document.createElement("div"); t.className = "co-toast " + kind; t.textContent = msg; document.body.appendChild(t); setTimeout(() => { t.classList.add("hide"); setTimeout(() => t.remove(), 280); }, 2400); }
async function act(fn) { if (busy) return; busy = true; try { const m = await fn(); if (m) toast(m, "ok"); await reload(); } catch (e) { toast((e && e.message) || "오류가 발생했습니다.", "err"); } finally { busy = false; } }
function fieldVal(id) { const el = document.getElementById(id); return el ? Math.floor(Number(el.value) || 0) : 0; }
function prefersReduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (_) { return false; } }
function maybeSettleFeed() { if (state && state.settleFeed && state.settleFeed.applied) { const p = state.settleFeed.profit; toast(`실적 정산: ${p >= 0 ? "+" : ""}${won(p)}`, p >= 0 ? "ok" : "warn"); } }

function renderLoading() { app.innerHTML = `<div class="co-center"><div class="co-spin"></div><p>STONK Company 연결 중…</p></div>`; }
function fatal(m) { app.innerHTML = `<div class="co-center"><h2>⚠️ 오류</h2><p>${esc(m)}</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로</a></div>`; }
function renderGate() { app.innerHTML = `<div class="co-center"><div class="co-logo"><span class="co-mark">🏢</span><b>STONK</b> Company</div><h2>로그인이 필요합니다</h2><p class="muted">STONK Home에서 로그인 후 이용해 주세요.</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로 이동</a></div>`; }

// ── 메인 렌더 ──
function render() {
  if (!state) return;
  const co = state.company;
  const bank = state.bank || {};
  app.className = bank.vipTier === "BLACK" ? "is-black" : "";
  const tabs = [["dashboard", "대시보드"], ["company", "회사정보"], ["employees", "직원"], ["facilities", "시설"], ["funds", "자금/Bank"], ["ipo", "IPO"], ["logs", "뉴스/로그"]];
  app.innerHTML = `
    <header class="co-header">
      <a class="co-brand" href="#" data-home title="STONK Company 메인"><span class="co-mark">🏢</span><b>STONK</b> Company</a>
      <div class="co-nav">
        <a href="../STONK-Home/index.html">홈</a>
        <a href="../STONK-Battle/index.html">주식시장</a>
        <a href="../STONK-Bank/index.html">은행</a>
        <a href="../STONK-Board/index.html">주식소식</a>
        ${isAdmin ? `<a href="../STONK-Admin/market-admin.html">관리자</a>` : ""}
      </div>
      <div class="co-user"><span class="co-nick">${esc(state.nickname)}</span>${bank.vipTier && bank.vipTier !== "NORMAL" ? `<span class="co-vip v-${bank.vipTier}">${vipLabel(bank.vipTier)}</span>` : ""}</div>
    </header>
    <nav class="co-tabs">${tabs.map(([k, l]) => `<button class="co-tab ${tab === k ? "active" : ""}" data-tab="${k}">${l}</button>`).join("")}</nav>
    <main class="co-main">${tabBody()}</main>
    <footer class="co-footer">STONK Company는 게임머니 기반 경영 시스템입니다. 실제 회사 설립·투자·주식과 무관합니다.</footer>`;
  bind();
}
const VIPL = { NORMAL: "일반", SILVER: "실버", GOLD: "골드", PLATINUM: "플래티넘", BLACK: "블랙" };
function vipLabel(t) { return VIPL[t] || "일반"; }

function tabBody() {
  if (!state.company && tab !== "dashboard" && tab !== "company") tab = "dashboard";
  if (tab === "company") return companyTab();
  if (tab === "employees") return employeesTab();
  if (tab === "facilities") return facilitiesTab();
  if (tab === "funds") return fundsTab();
  if (tab === "ipo") return ipoTab();
  if (tab === "logs") return logsTab();
  return dashboardTab();
}

// ── 이벤트 배너 ──
function eventBanner() {
  const ev = state.event; if (!ev) return "";
  return `<div class="co-event"><span>📰</span><div><b>오늘의 금융 이벤트 · ${esc(ev.title)}</b><small>Bank 이벤트가 회사 가치·사업대출에 소폭 반영됩니다. (게임머니)</small></div></div>`;
}

// ── 본사 시각 카드 ──
function hqVisual(co) {
  const tier = Math.min(5, 1 + Math.floor(facilityTotal(co) / 2) + stageRank(co.stage));
  const black = (state.bank || {}).vipTier === "BLACK";
  return `<div class="co-hq tier-${tier} ${black ? "black" : ""}">
    <div class="hq-sky"></div>
    <div class="hq-building">${"🏢".repeat(Math.min(3, 1 + Math.floor(facilityTotal(co) / 4)))}</div>
    <div class="hq-meta"><b>${esc(co.name)}</b><span>${SECTORS[co.sector].icon} ${SECTORS[co.sector].label} · ${STAGE_LABEL[co.stage]}</span>
      <small>직원 ${empCount(co)}명 · 시설 Lv.${facilityTotal(co)} · 브랜드 ${int(co.brandScore)}</small></div>
  </div>`;
}
function gauge(label, val, tone) { return `<div class="co-gauge"><div class="cg-head"><span>${label}</span><b>${int(val)}%</b></div><div class="cg-bar ${tone || ""}"><span style="width:${Math.max(0, Math.min(100, int(val)))}%"></span></div></div>`; }
function row(k, v, cls) { return `<div class="co-row"><span>${k}</span><b class="${cls || ""}">${v}</b></div>`; }

// ── 대시보드 ──
function dashboardTab() {
  const co = state.company, bank = state.bank || {};
  if (!co) {
    const cost = foundCost(bank), disc = foundDiscount(bank);
    return `${eventBanner()}
      <div class="co-card hero">
        <h2>아직 설립한 회사가 없습니다.</h2>
        <p class="muted">내 회사를 세우고, 키우고, 상장시키는 <b>STONK 타이쿤</b>을 시작하세요. 모든 금액은 게임머니입니다.</p>
        <div class="co-row"><span>설립 비용</span><b>${disc > 0 ? `<s class="muted">${won(Co.FOUND_COST)}</s> ${won(cost)} <small class="ok">${Math.round(disc * 100)}% 할인</small>` : won(cost)}</b></div>
        <div class="co-row"><span>보유 현금</span><b>${won(state.cash)}</b></div>
        <button class="co-btn primary big" data-tab="company">회사 설립하러 가기</button>
        <p class="co-note">현금이 부족하면 자금/Bank 탭에서 <b>사업대출</b>을 받거나 <b>STONK Card</b>로 결제할 수 있습니다.</p>
      </div>
      <div class="co-grid">${SECTOR_IDS.slice(0, 6).map((s) => sectorMini(s)).join("")}</div>`;
  }
  const ipo = co.ipoReadiness, ns = nextStage(co, bank);
  const bl = bank.businessLoan || {};
  const owed = int(bl.principal) + int(bl.interest);
  if (photoMode) return photoView(co, bank);
  return `${eventBanner()}
    <div class="co-grid">
      <div class="co-card span2 office-card">
        <h3>라이브 오피스 <span class="co-tag">${SECTORS[co.sector].icon} ${SECTORS[co.sector].label} · ${STAGE_LABEL[co.stage]}</span>
          <button class="co-btn ghost small" data-act="photo" style="float:right">📷 스냅샷</button></h3>
        ${liveOffice(co, bank)}
        <div class="co-quick">
          <button class="co-btn primary" data-act="settle">📊 실적 정산</button>
          <button class="co-btn" data-tab="employees">👥 직원</button>
          <button class="co-btn" data-tab="facilities">🏗️ 시설</button>
          ${ns ? `<button class="co-btn gold" data-act="promote">⬆️ ${STAGE_LABEL[ns]} 승급</button>` : ""}
        </div>
      </div>
      <div class="co-card office-status">${officeStatusPanel(co, bank)}</div>
      <div class="co-card">
        <h3>경영 지표</h3>
        ${row("회사 가치", won(co.companyValue))}
        ${row("회사 자금", won(co.companyCash), co.companyCash <= 0 ? "warn" : "")}
        ${row("최근 순이익", (co.lastProfit >= 0 ? "+" : "") + won(co.lastProfit), co.lastProfit < 0 ? "warn" : "ok")}
        ${row("누적 매출 / 비용", won(co.totalRevenue) + " / " + won(co.totalCost))}
        ${row("성장률", (num(co.growthRate) * 100).toFixed(2) + "%")}
      </div>
      <div class="co-card">
        <h3>회사 상태</h3>
        ${gauge("IPO 준비도", ipo, ipo >= 70 ? "ok" : "")}
        ${gauge("브랜드 점수", co.brandScore, "blue")}
        ${gauge("리스크 점수", co.riskScore, co.riskScore > 60 ? "danger" : "warn")}
      </div>
      <div class="co-card">
        <h3>Bank 연동</h3>
        ${row("신용등급", gradeFromScore(bank.creditScore != null ? bank.creditScore : 60))}
        ${row("VIP 등급", vipLabel(bank.vipTier))}
        ${row("카드", cardStateText(bank.card))}
        ${row("사업대출", owed > 0 ? won(owed) : "없음", owed > 0 ? "warn" : "")}
        <button class="co-btn ghost small" data-tab="funds">자금/Bank 관리</button>
      </div>
      <div class="co-card span2">
        <h3>최근 경영 로그</h3>
        ${(state.logs || []).length ? `<ul class="co-loglist">${state.logs.slice(0, 6).map(logRow).join("")}</ul>` : `<p class="co-empty">아직 활동이 없습니다.</p>`}
      </div>
    </div>`;
}
function cardStateText(c) { c = c || {}; if (!c.enabled) return "미발급"; if (c.lost) return "분실"; if (c.suspended) return "정지"; if (c.overdue) return "미납"; return "정상"; }
function sectorMini(s) { const p = SECTORS[s]; return `<div class="co-card sector-mini"><div class="sm-ico">${p.icon}</div><b>${p.label}</b><small>${esc(p.note)}</small></div>`; }

// ════════════ v3.1 라이브 오피스 (CSS/SVG/emoji 자체 구현 · Firebase 쓰기 없음) ════════════
// 직원 타입별 시각/행동/말풍선. 좌표/움직임은 로컬에서만, 저장하지 않음.
const EMP_VIS = {
  dev:        { e: "💻", cls: "dev",        act: "typing",      bub: "코드 작성 중" },
  marketer:   { e: "📣", cls: "marketer",   act: "presenting",  bub: "신규 캠페인 준비 중" },
  sales:      { e: "🤝", cls: "sales",      act: "walking",     bub: "고객 미팅 준비 중" },
  account:    { e: "🧮", cls: "account",    act: "typing",      bub: "비용 정산 중" },
  risk:       { e: "🧯", cls: "risk",       act: "checking",    bub: "리스크 점검 중" },
  researcher: { e: "🔭", cls: "researcher", act: "researching", bub: "IPO 자료 검토 중" },
  ops:        { e: "🛠️", cls: "ops",        act: "walking",     bub: "사무실 순찰 중" },
  brand:      { e: "✨", cls: "brand",       act: "presenting",  bub: "브랜드 지표 상승 중" },
};
const FAC_OBJ = { office: "🏢", server: "🖥️", lab: "🧪", marketing: "📈", accounting: "📒", security: "🔒" };
const MAX_AVATARS = 16;

function flattenEmployees(co) {
  const list = [];
  for (const t of EMPLOYEE_IDS) {
    const e = (co.employees || {})[t] || {};
    const n = Math.max(0, int(e.count)), lv = Math.max(1, int(e.level));
    for (let i = 0; i < n; i++) list.push({ type: t, level: lv });
  }
  return list;
}
// v3.2: 구역(% 좌표, .office-stage 기준) + 직원 자유 배치(seed로 결정적)
const ZONES = {
  entrance:   { x: 3,  y: 5,  w: 24, h: 26, label: "입구" },
  desk:       { x: 30, y: 5,  w: 40, h: 30, label: "책상" },
  server:     { x: 73, y: 5,  w: 24, h: 26, label: "서버실" },
  meeting:    { x: 3,  y: 37, w: 24, h: 26, label: "회의실" },
  corridor:   { x: 29, y: 40, w: 42, h: 18, label: "복도" },
  lab:        { x: 73, y: 37, w: 24, h: 26, label: "연구소" },
  accounting: { x: 3,  y: 68, w: 24, h: 27, label: "회계실" },
  lounge:     { x: 29, y: 62, w: 42, h: 33, label: "휴게" },
  security:   { x: 73, y: 68, w: 24, h: 27, label: "보안실" },
};
const EMP_ZONE = { dev: "desk", marketer: "meeting", sales: "corridor", account: "accounting", risk: "security", researcher: "lab", ops: "corridor", brand: "meeting" };
const FAC_ZONE = { office: "desk", server: "server", lab: "lab", marketing: "meeting", accounting: "accounting", security: "security" };
function seedUnit(s) { let h = 2166136261 >>> 0; s = String(s); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } h ^= h << 13; h >>>= 0; h ^= h >> 17; h ^= h << 5; h >>>= 0; return (h % 1000) / 1000; }
// 상황별 말풍선(2~3명만)
function officeCtx(co, bank) {
  const owed = bank.businessLoan ? int(bank.businessLoan.principal) + int(bank.businessLoan.interest) : 0;
  if (busy) return "settle";
  if (co.riskScore > 60) return "risk";
  if (co.ipoReadiness >= 70 && co.stage !== "LISTED") return "ipo";
  if (owed > 50000000) return "loan";
  if (empCount(co) < 3) return "understaff";
  if (facilityTotal(co) < 4) return "underfac";
  return "normal";
}
const CTX_BUBBLE = {
  settle: ["이번 실적 정리 중", "매출 데이터 확인 중"], risk: ["보안 점검이 필요합니다", "리스크 보고서 작성 중"],
  ipo: ["상장 자료 검토 중", "IR 자료 준비 중"], loan: ["이자 부담을 확인 중", "상환 계획 검토 중"],
  understaff: ["인력이 부족합니다", "채용이 필요합니다"], underfac: ["시설 업그레이드가 필요", "서버 공간이 부족합니다"], normal: null,
};
function bubbleText(emp, ctx) { const pool = CTX_BUBBLE[ctx]; if (pool) return pool[(emp._i || 0) % pool.length]; return (EMP_VIS[emp.type] || EMP_VIS.dev).bub; }

function avatar(emp, opts) {
  opts = opts || {};
  const v = EMP_VIS[emp.type] || EMP_VIS.dev;
  const pos = opts.pos ? `left:${opts.pos.x}%;top:${opts.pos.y}%;` : "";
  return `<div class="av av-${v.cls} act-${v.act}${opts.arrive ? " av-arrive" : ""}" style="${pos}--d:${(opts.i % 8) * 0.35}s" data-emp-detail="${emp.type}" role="button" tabindex="0" aria-label="${esc(v.cls)} 직원 상세">
    <div class="av-person"><span class="av-head"></span><span class="av-torso"></span></div>
    <span class="av-badge">${v.e}</span>${emp.level > 1 ? `<i class="av-lv">Lv${emp.level}</i>` : ""}
    ${opts.bubble ? `<span class="av-bubble">${esc(opts.bubble)}</span>` : ""}
  </div>`;
}
function liveOffice(co, bank) {
  const black = (bank || {}).vipTier === "BLACK";
  const all = flattenEmployees(co), total = all.length;
  const cap = (typeof window !== "undefined" && window.innerWidth <= 760) ? 10 : MAX_AVATARS;
  const shown = all.slice(0, cap), extra = total - shown.length;
  shown.forEach((e, i) => { e._i = i; });
  const ctx = officeCtx(co, bank);
  const collab = ctx === "settle" || (co.ipoReadiness >= 70 && co.stage !== "LISTED");
  // 직원 배치(구역 + seed jitter) — 같은 회사 데이터면 비슷하게 재현
  let arrivedFor = null;
  const avatars = shown.map((emp, i) => {
    const z = ZONES[EMP_ZONE[emp.type] || "desk"];
    const x = z.x + 3 + seedUnit(co.companyId + ":" + emp.type + ":x:" + i) * Math.max(2, z.w - 12);
    const y = z.y + 4 + seedUnit(co.companyId + ":" + emp.type + ":y:" + i) * Math.max(2, z.h - 16);
    let arrive = false;
    if (hireAnim && hireAnim.type === emp.type && arrivedFor !== emp.type) { arrive = true; arrivedFor = emp.type; }
    return avatar(emp, { pos: { x: Math.round(x), y: Math.round(y) }, i, bubble: i < 3 ? bubbleText(emp, ctx) : null, arrive });
  }).join("");
  // 구역 배경
  const zoneBg = Object.entries(ZONES).map(([k, z]) => `<div class="zone zone-${k}" data-zone="${k}" style="left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%"><i>${z.label}</i></div>`).join("");
  // 시설 오브젝트(구역 내부, 클릭 가능)
  const facObjs = FACILITY_IDS.map((t) => {
    const lv = int(((co.facilities || {})[t] || {}).level);
    const z = ZONES[FAC_ZONE[t]] || ZONES.desk;
    const hot = (t === "server" && ["fintech", "game", "security"].includes(co.sector)) || (t === "lab" && ["bio", "robot", "semicon"].includes(co.sector));
    const building = facAnim && facAnim.type === t;
    return `<div class="fac-o fac-${t} ${lv > 0 ? "lv" + Math.min(4, lv) : "locked"} ${hot ? "hot" : ""} ${building ? "building" : ""}" style="left:${z.x + z.w - 17}%;top:${z.y + 2}%" data-fac-detail="${t}" role="button" tabindex="0" aria-label="${esc(FACILITIES[t].label)} 상세">
      <span class="fo-ico">${FAC_OBJ[t]}</span>${lv > 0 ? `<b>${lv}</b>` : ""}${building ? `<span class="fo-build">공사중</span>` : ""}</div>`;
  }).join("");
  return `<div class="office stage-${co.stage} sector-${co.sector} ${black ? "black" : ""} ${collab ? "collab" : ""} ${busy ? "settling" : ""}" aria-label="라이브 오피스">
    <div class="office-stage">
      ${zoneBg}
      ${facObjs}
      ${avatars}
      ${collab ? `<div class="collab-ring" style="left:${ZONES.meeting.x + 6}%;top:${ZONES.meeting.y + 6}%"></div>` : ""}
      ${total === 0 ? `<div class="office-empty">🪑 텅 빈 사무실 — <b>직원을 고용해 회사를 움직여 보세요</b></div>` : ""}
    </div>
    ${extra > 0 ? `<div class="office-more">+${extra}명 근무 중</div>` : ""}
    <div class="office-tag">게임머니 기반 타이쿤 오피스 · 클릭해서 직원/시설 상세 보기</div>
  </div>`;
}

// ── v3.2: 직원/시설 상세 패널(추가 조회 없이 기존 데이터 사용) ──
function closeOfficePanel() { document.getElementById("officeDetail")?.remove(); }
function openPanel(html, title) {
  closeOfficePanel();
  const el = document.createElement("div");
  el.id = "officeDetail"; el.className = "office-detail-dim";
  el.innerHTML = `<div class="office-detail"><div class="od-top"><b>${esc(title)}</b><button class="co-btn ghost small" data-od-x>닫기</button></div>${html}</div>`;
  document.body.appendChild(el);
  el.addEventListener("click", (e) => { if (e.target === el) closeOfficePanel(); });
  el.querySelector("[data-od-x]").onclick = closeOfficePanel;
  el.querySelectorAll("[data-od-hire]").forEach((b) => b.addEventListener("click", () => { closeOfficePanel(); hireWithAnim(b.dataset.odHire); }));
  el.querySelectorAll("[data-od-level]").forEach((b) => b.addEventListener("click", () => { closeOfficePanel(); act(() => Co.levelUpEmployee(state.uid, b.dataset.odLevel, state, payMethod === "card" ? "card" : "company")); }));
  el.querySelectorAll("[data-od-fac]").forEach((b) => b.addEventListener("click", () => { closeOfficePanel(); upgradeWithAnim(b.dataset.odFac); }));
  el.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("click", () => { closeOfficePanel(); tab = b.dataset.tab; render(); }));
}
const EMP_REC = { dev: "서버실을 업그레이드하면 개발 효율이 더 좋아집니다.", marketer: "마케팅룸을 함께 강화하면 브랜드가 빠르게 오릅니다.", sales: "영업 인원이 많을수록 매출이 늘어납니다.", account: "회계실과 함께 강화하면 비용이 더 절감됩니다.", risk: "보안실을 함께 강화하면 리스크가 더 낮아집니다.", researcher: "연구소 레벨이 높으면 IPO 준비도가 더 빨리 오릅니다.", ops: "운영 매니저는 시설 효율을 높여 줍니다.", brand: "엔터테인먼트 업종에서 특히 효과가 큽니다." };
function showEmpDetail(type) {
  const co = state.company; if (!co) return;
  const e = (co.employees || {})[type] || { count: 0, level: 1 }, p = EMPLOYEES[type], v = EMP_VIS[type];
  const total = int(e.count), lv = Math.max(1, int(e.level));
  openPanel(`<div class="od-head"><span class="od-ico">${v.e}</span><div><b>${p.label} Lv.${lv}</b><small>현재 업무: ${v.bub}</small></div></div>
    ${row("효과", p.effect)}
    ${row("회사 내 인원 / 평균 레벨", total + "명 · Lv." + lv)}
    ${row("고용비 / 레벨업비", won(employeeCost(co, type)) + " / " + won(employeeLevelCost(co, type)))}
    <p class="co-note">추천: ${esc(EMP_REC[type] || "레벨업하면 효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-hire="${type}">고용</button><button class="co-btn small" data-od-level="${type}" ${total > 0 ? "" : "disabled"}>레벨업</button><button class="co-btn ghost small" data-tab="employees">직원 탭</button></div>`, "직원 상세");
}
const FAC_NEXT = { office: "직원 수용량과 책상이 늘어납니다.", server: "서버 랙이 추가되고 매출 보정이 커집니다.", lab: "연구 장비가 추가되고 성장/IPO 보너스가 커집니다.", marketing: "광고판이 추가되고 브랜드 상승이 커집니다.", accounting: "비용 절감 효과가 커집니다.", security: "리스크 감소 효과가 커집니다." };
function showFacDetail(type) {
  const co = state.company; if (!co) return;
  const p = FACILITIES[type], lv = int(((co.facilities || {})[type] || {}).level);
  openPanel(`<div class="od-head"><span class="od-ico">${FAC_OBJ[type]}</span><div><b>${p.label} Lv.${lv}</b><small>${p.effect}</small></div></div>
    ${lv === 0 ? `<p class="co-note">아직 미설치(잠김) 시설입니다. 업그레이드로 설치하세요.</p>` : row("가동률", Math.min(100, 40 + lv * 15) + "%")}
    ${row("다음 레벨 / 비용", "Lv." + (lv + 1) + " · " + won(facilityCost(co, type)))}
    <p class="co-note">다음 레벨: ${esc(FAC_NEXT[type] || "효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-fac="${type}">업그레이드</button><button class="co-btn ghost small" data-tab="facilities">시설 탭</button></div>`, "시설 상세");
}
// 고용/시설 연출(로컬 transient flag, Firebase 저장 없음)
function hireWithAnim(type) {
  hireAnim = { type };
  act(() => Co.hireEmployee(state.uid, type, state, payMethod === "card" ? "card" : "company")).finally(() => { setTimeout(() => { hireAnim = null; }, 1300); });
}
function upgradeWithAnim(type) {
  facAnim = { type };
  act(() => Co.upgradeFacility(state.uid, type, state, payMethod === "card" ? "card" : "company")).finally(() => { setTimeout(() => { facAnim = null; }, 1100); });
}
// 라이브 오피스 상태/추천 패널
function officeStatusPanel(co, bank) {
  const ev = state.event || {};
  const emp = empCount(co), fac = facilityTotal(co);
  const activity = co.companyCash > 0 && emp > 0 ? "활발" : emp > 0 ? "유지" : "정지";
  const facRate = Math.min(100, Math.round((fac / (FACILITY_IDS.length * 3)) * 100));
  const owed = bank.businessLoan ? int(bank.businessLoan.principal) + int(bank.businessLoan.interest) : 0;
  const recs = [];
  if (emp === 0) recs.push({ t: "직원을 고용해 회사를 가동하세요.", tab: "employees" });
  else if (emp < 3) recs.push({ t: "직원을 1명 더 고용하면 정산 효율이 좋아집니다.", tab: "employees" });
  if (co.companyCash <= 0) recs.push({ t: "회사 자금이 부족합니다. 출자/사업대출을 검토하세요.", tab: "funds" });
  if (co.riskScore > 60) recs.push({ t: "리스크가 높습니다. 보안실 또는 리스크 매니저를 강화하세요.", tab: "facilities" });
  if (co.brandScore < 30) recs.push({ t: "브랜드가 낮습니다. 마케팅룸/브랜드 매니저를 강화하세요.", tab: "facilities" });
  if (fac < 4) recs.push({ t: "사무실을 업그레이드하면 더 많은 직원을 수용할 수 있습니다.", tab: "facilities" });
  if (co.ipoReadiness >= 70 && co.stage !== "LISTED") recs.push({ t: "IPO 준비도 70%↑ — 상장 심사 준비를 시작하세요.", tab: "ipo" });
  if (owed > 0) recs.push({ t: "사업대출 상환 계획을 확인하세요.", tab: "funds" });
  if (ev.type === "lowrate") recs.push({ t: "저금리 이벤트 중 — 사업대출 조건이 유리합니다.", tab: "funds" });
  if (ev.type === "highrate" || ev.type === "caution") recs.push({ t: "금융 경계 분위기 — 고액 대출/카드 사용에 주의하세요.", tab: "funds" });
  if (!recs.length) recs.push({ t: "직원들이 안정적으로 업무 중입니다.", tab: "" });
  const moods = { 활발: "활기찬 사무실 🌟", 유지: "차분한 사무실 🙂", 정지: "조용한 사무실 😴" };
  return `<h3>오늘의 사무실</h3>
    <div class="co-row"><span>분위기</span><b>${moods[activity]}</b></div>
    <div class="co-row"><span>직원 활동도</span><b>${emp}명 · ${activity}</b></div>
    ${gauge("시설 가동률", facRate, facRate >= 60 ? "ok" : "")}
    <div class="co-row"><span>리스크 경보</span><b class="${co.riskScore > 60 ? "warn" : "ok"}">${co.riskScore > 60 ? "주의" : "안정"}</b></div>
    <div class="co-row"><span>Bank 이벤트</span><b>${esc(ev.title || "—")}</b></div>
    <div class="co-row"><span>사업대출 부담</span><b class="${owed > 0 ? "warn" : ""}">${owed > 0 ? won(owed) : "없음"}</b></div>
    <div class="office-recs"><b>다음 추천 행동</b><ul>${recs.slice(0, 3).map((r) => `<li ${r.tab ? `data-tab="${r.tab}" role="button" tabindex="0"` : ""}>${esc(r.t)}${r.tab ? ` <i class="rec-go">→</i>` : ""}</li>`).join("")}</ul></div>`;
}
// 포토(스냅샷) 모드 — 패널 숨기고 오피스만 깔끔히
function photoView(co, bank) {
  return `<div class="photo-wrap">
    <div class="co-card office-card photo">
      <div class="photo-head"><div><b>${esc(co.name)}</b><small>${SECTORS[co.sector].icon} ${SECTORS[co.sector].label} · ${STAGE_LABEL[co.stage]}</small></div>
        <button class="co-btn ghost small" data-act="photo">닫기</button></div>
      ${liveOffice(co, bank)}
      <div class="photo-stats">
        <div><span>회사 가치</span><b>${won(co.companyValue)}</b></div>
        <div><span>IPO 준비도</span><b>${int(co.ipoReadiness)}%</b></div>
        <div><span>직원</span><b>${empCount(co)}명</b></div>
        <div><span>단계</span><b>${STAGE_LABEL[co.stage]}</b></div>
      </div>
      <p class="co-note">내 회사 스냅샷 · 게임머니 기반 타이쿤입니다.</p>
    </div>
  </div>`;
}
// 정산 결과 카운트업 오버레이
function showSettleResult(st) {
  try {
    const dim = document.createElement("div");
    dim.className = "co-settle-dim";
    const good = st.profit >= 0;
    dim.innerHTML = `<div class="co-settle ${good ? "good" : "bad"}">
      <h3>${good ? "📈 실적 정산 완료" : "📉 실적 정산 · 손실 주의"}</h3>
      <div class="cs-rows">
        <div><span>매출</span><b class="ok">+${won(st.revenue)}</b></div>
        <div><span>비용</span><b class="warn">−${won(st.cost)}</b></div>
        <div class="cs-profit"><span>순이익</span><b class="cs-count ${good ? "ok" : "warn"}" data-to="${st.profit}">${good ? "+" : "−"}${won(0)}</b></div>
        <div><span>회사가치</span><b class="ok">+${won(st.valueGain)}</b></div>
      </div>
      <button class="co-btn primary" data-settle-close>확인</button>
    </div>`;
    document.body.appendChild(dim);
    const close = () => dim.remove();
    dim.querySelector("[data-settle-close]").onclick = close;
    dim.addEventListener("click", (e) => { if (e.target === dim) close(); });
    const el = dim.querySelector(".cs-count");
    const target = Math.abs(int(st.profit)), sign = st.profit >= 0 ? "+" : "−";
    if (prefersReduced() || target === 0) { el.textContent = sign + won(target); }
    else {
      const start = performance.now(), dur = 700;
      const step = (now) => { const p = Math.min(1, (now - start) / dur); el.textContent = sign + won(Math.round(target * p)); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }
    setTimeout(() => { if (document.body.contains(dim)) close(); }, 6000);
  } catch (_) { /* 연출 실패는 기능에 영향 없음 */ }
}

// ── 회사정보/설립 ──
function companyTab() {
  const co = state.company, bank = state.bank || {};
  if (co) {
    return `<div class="co-card">
      <h3>회사 정보</h3>
      ${hqVisual(co)}
      ${row("회사명", esc(co.name))}
      ${row("슬로건", esc(co.slogan) || "—")}
      ${row("업종", SECTORS[co.sector].icon + " " + SECTORS[co.sector].label)}
      ${row("전략", STRATEGIES[co.strategy].label)}
      ${row("단계 / 레벨", STAGE_LABEL[co.stage] + " · Lv." + co.level)}
      ${row("설립일", new Date(int(co.createdAt)).toLocaleDateString("ko-KR"))}
      <p class="co-note">유저당 회사 1개를 운영합니다(v1.0). 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>
    </div>`;
  }
  const cost = foundCost(bank), disc = foundDiscount(bank);
  return `${eventBanner()}
    <div class="co-card">
      <h3>회사 설립 <span class="co-tag">게임머니 타이쿤</span></h3>
      <label class="co-field"><span>회사명</span><input id="foName" maxlength="24" placeholder="예: STONK테크" value="${esc(foundForm.name)}" /></label>
      <label class="co-field"><span>슬로건(선택)</span><input id="foSlogan" maxlength="40" placeholder="예: 세상을 바꾸는 기술" value="${esc(foundForm.slogan)}" /></label>
      <div class="co-sub">업종 선택</div>
      <div class="co-pick">${SECTOR_IDS.map((s) => `<button class="co-opt ${foundForm.sector === s ? "on" : ""}" data-found-sector="${s}">${SECTORS[s].icon} ${SECTORS[s].label}</button>`).join("")}</div>
      <p class="co-note">${SECTORS[foundForm.sector].icon} <b>${SECTORS[foundForm.sector].label}</b> · ${esc(SECTORS[foundForm.sector].note)}</p>
      <div class="co-sub">시작 전략</div>
      <div class="co-pick">${Object.keys(STRATEGIES).map((s) => `<button class="co-opt ${foundForm.strategy === s ? "on" : ""}" data-found-strategy="${s}">${STRATEGIES[s].label}</button>`).join("")}</div>
      <p class="co-note">${esc(STRATEGIES[foundForm.strategy].note)}</p>
      <div class="co-sub">결제수단</div>
      <div class="co-pick">
        <button class="co-opt ${payMethod === "cash" ? "on" : ""}" data-pm="cash">현금</button>
        <button class="co-opt ${payMethod === "card" ? "on" : ""}" data-pm="card">STONK Card</button>
        <button class="co-opt ${payMethod === "loan" ? "on" : ""}" data-pm="loan">사업대출</button>
      </div>
      <div class="co-row"><span>설립 비용</span><b>${disc > 0 ? `<s class="muted">${won(Co.FOUND_COST)}</s> ${won(cost)} <small class="ok">${Math.round(disc * 100)}% 할인</small>` : won(cost)}</b></div>
      <div class="co-row"><span>보유 현금</span><b>${won(state.cash)}</b></div>
      <button class="co-btn primary big" data-act="found">${SECTORS[foundForm.sector].label} 회사 설립</button>
      <p class="co-note">결제 성공 후에만 회사가 생성됩니다. 카드/사업대출 결제 실패 시 회사는 생성되지 않습니다. 모든 금액은 게임머니입니다.</p>
    </div>`;
}

// ── 직원 ──
function employeesTab() {
  const co = state.company; if (!co) return needCompany();
  return `<div class="co-card"><h3>직원 결제수단 <span class="co-tag">${empCount(co)}명</span></h3>
    <div class="co-pick"><button class="co-opt ${payMethod === "company" ? "on" : payMethod !== "card" ? "on" : ""}" data-pm="company">회사 자금</button><button class="co-opt ${payMethod === "card" ? "on" : ""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${won(co.companyCash)} · 카드는 Bank 청구 예정으로 누적됩니다.</p></div>
    <div class="co-grid">${EMPLOYEE_IDS.map((t) => {
      const p = EMPLOYEES[t], e = (co.employees || {})[t] || { count: 0, level: 1 };
      return `<div class="co-card emp">
        <div class="emp-head"><span class="emp-ico">${p.icon}</span><div><b>${p.label}</b><small>${p.effect}</small></div></div>
        ${row("보유 / 레벨", int(e.count) + "명 · Lv." + Math.max(1, int(e.level)))}
        ${row("고용비", won(employeeCost(co, t)))}
        <div class="co-btnrow">
          <button class="co-btn primary small" data-emp-hire="${t}">고용</button>
          <button class="co-btn small" data-emp-level="${t}" ${int(e.count) > 0 ? "" : "disabled"}>레벨업 ${won(employeeLevelCost(co, t))}</button>
          <button class="co-btn ghost small" data-emp-fire="${t}" ${int(e.count) > 0 ? "" : "disabled"}>해고</button>
        </div>
      </div>`;
    }).join("")}</div>`;
}
// ── 시설 ──
function facilitiesTab() {
  const co = state.company; if (!co) return needCompany();
  return `<div class="co-card"><h3>시설 결제수단</h3>
    <div class="co-pick"><button class="co-opt ${payMethod !== "card" ? "on" : ""}" data-pm="company">회사 자금</button><button class="co-opt ${payMethod === "card" ? "on" : ""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${won(co.companyCash)}. 시설 레벨이 오르면 본사가 커집니다.</p></div>
    <div class="co-grid">${FACILITY_IDS.map((t) => {
      const p = FACILITIES[t], lv = int(((co.facilities || {})[t] || {}).level);
      return `<div class="co-card fac">
        <div class="emp-head"><span class="emp-ico">${p.icon}</span><div><b>${p.label} <small class="co-tag">Lv.${lv}</small></b><small>${p.effect}</small></div></div>
        ${row("업그레이드 비용", won(facilityCost(co, t)))}
        <button class="co-btn primary small" data-fac-up="${t}">Lv.${lv + 1} 업그레이드</button>
      </div>`;
    }).join("")}</div>`;
}
// ── 자금/Bank ──
function fundsTab() {
  const co = state.company, bank = state.bank || {};
  const bl = bank.businessLoan || {}, owed = int(bl.principal) + int(bl.interest), limit = bizLoanLimit(bank);
  if (!co) return needCompany();
  return `<div class="co-grid">
    <div class="co-card">
      <h3>자금 이동</h3>
      ${row("개인 현금", won(state.cash))}
      ${row("회사 자금", won(co.companyCash), co.companyCash <= 0 ? "warn" : "")}
      <div class="co-amount"><input id="moveAmt" type="number" inputmode="numeric" placeholder="금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn primary" data-act="invest">출자(개인→회사)</button>
        <button class="co-btn" data-act="withdraw">인출(회사→개인)</button>
      </div>
      <p class="co-note">인출 시 브랜드 점수가 소폭 감소하고 리스크가 소폭 증가합니다.</p>
    </div>
    <div class="co-card">
      <h3>Bank 사업대출 <span class="co-tag">개인 대출과 별개</span></h3>
      ${row("신용등급 / 한도", gradeFromScore(bank.creditScore != null ? bank.creditScore : 60) + " · " + won(limit))}
      ${row("사업대출 잔액", won(owed), owed > 0 ? "warn" : "")}
      ${row("원금 / 이자", won(bl.principal) + " / " + won(bl.interest))}
      <div class="co-amount"><input id="bizAmt" type="number" inputmode="numeric" placeholder="대출/상환 금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn danger" data-act="bizLoan" ${limit <= 0 ? "disabled" : ""}>사업대출 받기</button>
        <button class="co-btn" data-act="bizRepayCompany" ${owed > 0 ? "" : "disabled"}>회사자금 상환</button>
        <button class="co-btn ghost" data-act="bizRepayCash" ${owed > 0 ? "" : "disabled"}>개인현금 상환</button>
      </div>
      <p class="co-note">사업대출금은 <b>회사 자금</b>으로 입금됩니다. 이자 하루 ${(Co.BIZ_LOAN_RATE_DAY * 100).toFixed(1)}%. 연체 시 리스크가 오릅니다.</p>
    </div>
  </div>`;
}
// ── IPO ──
function ipoTab() {
  const co = state.company, bank = state.bank || {}; if (!co) return needCompany();
  const list = ipoChecklist(co, bank), all = list.every((x) => x.ok), ready = co.ipoReadiness;
  return `<div class="co-card ipo-card ${(bank.vipTier === "BLACK") ? "black" : ""}">
      <h3>IPO 준비 ${co.stage === "LISTED" ? `<span class="co-tag ok">상장 후보</span>` : ""}</h3>
      ${gauge("IPO 준비도", ready, ready >= 100 ? "ok" : "")}
      <ul class="co-check">${list.map((x) => `<li class="${x.ok ? "on" : ""}">${x.ok ? "✅" : "⬜"} ${esc(x.label)}</li>`).join("")}</ul>
      ${co.stage === "LISTED"
        ? `<p class="co-note ok">상장 후보 등록 완료. Battle 종목 편입 준비 완료 · Board/Wiki 연동 데이터 생성 완료. 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>`
        : `<button class="co-btn gold big" data-act="ipo" ${ready >= 100 && all ? "" : "disabled"}>${ready >= 100 ? "상장 심사 신청" : `준비도 ${ready}% (100% 필요)`}</button>
           <p class="co-note">IPO 준비도는 회사 가치·브랜드·순이익·시설·직원에서 오르고 리스크·사업대출 연체로 내려갑니다.</p>`}
    </div>`;
}
// ── 로그 ──
const LOG_ICON = { found: "🏗️", settle: "📊", invest: "💰", withdraw: "🏧", hire: "👤", fire: "👋", levelup: "⬆️", facility: "🏢", loan: "📝", stage: "🎉", ipo: "🏆" };
function logRow(l) { return `<li><span class="lg-ico">${LOG_ICON[l.type] || "•"}</span><div class="lg-mid"><b>${esc(l.title)}</b><small>${esc(l.memo || "")}</small></div>${l.amount ? `<b class="lg-amt ${l.amount >= 0 ? "plus" : "minus"}">${l.amount >= 0 ? "+" : "−"}${won(Math.abs(l.amount))}</b>` : ""}</li>`; }
function logsTab() {
  return `<div class="co-card"><h3>경영 로그 / 뉴스</h3>
    ${(state.logs || []).length ? `<ul class="co-loglist">${state.logs.map(logRow).join("")}</ul>` : `<p class="co-empty">아직 활동이 없습니다.</p>`}
    <p class="co-note">회사 뉴스는 Board 연동용(rooms/MAIN/companyNews)으로도 기록됩니다.</p></div>`;
}
function needCompany() { return `<div class="co-card"><p class="co-empty">먼저 회사를 설립하세요.</p><button class="co-btn primary" data-tab="company">회사 설립</button></div>`; }

// ── 바인딩 ──
function bind() {
  app.querySelector("[data-home]")?.addEventListener("click", (e) => { e.preventDefault(); tab = "dashboard"; window.scrollTo(0, 0); render(); });
  app.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("click", () => { tab = b.dataset.tab; render(); }));
  app.querySelectorAll("[data-found-sector]").forEach((b) => b.addEventListener("click", () => { foundForm.sector = b.dataset.foundSector; syncFoundInputs(); render(); }));
  app.querySelectorAll("[data-found-strategy]").forEach((b) => b.addEventListener("click", () => { foundForm.strategy = b.dataset.foundStrategy; syncFoundInputs(); render(); }));
  app.querySelectorAll("[data-pm]").forEach((b) => b.addEventListener("click", () => { payMethod = b.dataset.pm; render(); }));
  app.querySelectorAll("[data-emp-hire]").forEach((b) => b.addEventListener("click", () => hireWithAnim(b.dataset.empHire)));
  app.querySelectorAll("[data-emp-fire]").forEach((b) => b.addEventListener("click", () => act(() => Co.fireEmployee(state.uid, b.dataset.empFire, state))));
  app.querySelectorAll("[data-emp-level]").forEach((b) => b.addEventListener("click", () => act(() => Co.levelUpEmployee(state.uid, b.dataset.empLevel, state, payMethod === "card" ? "card" : "company"))));
  app.querySelectorAll("[data-fac-up]").forEach((b) => b.addEventListener("click", () => upgradeWithAnim(b.dataset.facUp)));
  // v3.2: 라이브 오피스 직원/시설 클릭 상세 + 구역 포커스
  app.querySelectorAll("[data-emp-detail]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); showEmpDetail(b.dataset.empDetail); }));
  app.querySelectorAll("[data-fac-detail]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); showFacDetail(b.dataset.facDetail); }));
  app.querySelectorAll("[data-zone]").forEach((z) => z.addEventListener("click", () => { const on = z.classList.contains("focus"); app.querySelectorAll(".zone.focus").forEach((q) => q.classList.remove("focus")); if (!on) z.classList.add("focus"); }));
  app.querySelectorAll("[data-act]").forEach((b) => b.addEventListener("click", () => onAct(b.dataset.act)));
}
function syncFoundInputs() { const n = document.getElementById("foName"), s = document.getElementById("foSlogan"); if (n) foundForm.name = n.value; if (s) foundForm.slogan = s.value; }

// 실적 정산 — 오피스 셔머 + 결과 카운트업(연출 실패해도 정산 자체는 기존 로직 유지)
async function doSettle() {
  if (busy) return; busy = true;
  const off = document.querySelector(".office"); if (off) off.classList.add("settling");
  let preview = null;
  try { preview = Co.computeSettle(state.company, Date.now(), state.event); } catch (_) {}
  try {
    await Co.settleNow(state.uid, state);
    await reload();
    if (preview && preview.applied) showSettleResult(preview); else toast("정산 완료", "ok");
  } catch (e) { toast((e && e.message) || "정산할 내용이 없습니다.", "err"); }
  finally { busy = false; }
}

function onAct(a) {
  if (a === "found") {
    syncFoundInputs();
    const amt = foundCost(state.bank);
    return highValueAct(amt, "설립 심사 중...", () => Co.foundCompany(state.uid, { ...foundForm, payMethod }, state));
  }
  if (a === "photo") { photoMode = !photoMode; window.scrollTo(0, 0); render(); return; }
  if (a === "settle") return doSettle();
  if (a === "promote") return act(() => Co.promoteStage(state.uid, state));
  if (a === "invest") { const v = fieldVal("moveAmt"); return highValueAct(v, "금고 이체 처리 중...", () => Co.investToCompany(state.uid, v, state)); }
  if (a === "withdraw") { const v = fieldVal("moveAmt"); return highValueAct(v, "인출 처리 중...", () => Co.withdrawFromCompany(state.uid, v, state)); }
  if (a === "bizLoan") { const v = fieldVal("bizAmt"); return highValueAct(v, "대출 심사 중...", () => Co.takeBusinessLoan(state.uid, v, state)); }
  if (a === "bizRepayCompany") return act(() => Co.repayBusinessLoan(state.uid, fieldVal("bizAmt"), "company", state));
  if (a === "bizRepayCash") return act(() => Co.repayBusinessLoan(state.uid, fieldVal("bizAmt"), "cash", state));
  if (a === "ipo") return act(() => Co.applyIpo(state.uid, state));
}

// 고액 거래 확인 모달(1,000만 이상 또는 현금 30%)
function isHigh(amount) { amount = int(amount); return amount >= 10000000 || (state && state.cash > 0 && amount >= state.cash * 0.3); }
function highValueAct(amount, label, fn) {
  if (!isHigh(amount)) return act(fn);
  const dim = document.createElement("div"); dim.className = "co-modal-dim";
  dim.innerHTML = `<div class="co-modal"><h3>거래 확인</h3><p class="co-modal-amt">${won(amount)}</p><p class="co-note">STONK 가상 게임머니 거래입니다.</p>
    <div class="co-modal-stage" hidden><span class="co-spin sm"></span> <span>${esc(label)}</span></div>
    <div class="co-modal-btns"><button class="co-btn" data-mc="cancel">취소</button><button class="co-btn primary" data-mc="ok">확인</button></div></div>`;
  document.body.appendChild(dim);
  const close = () => dim.remove();
  dim.querySelector('[data-mc="cancel"]').onclick = close;
  dim.addEventListener("click", (e) => { if (e.target === dim) close(); });
  dim.querySelector('[data-mc="ok"]').onclick = () => { dim.querySelector(".co-modal-btns").hidden = true; dim.querySelector(".co-modal-stage").hidden = false; setTimeout(() => { close(); act(fn); }, prefersReduced() ? 0 : 600); };
}
