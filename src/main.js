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
  return `${eventBanner()}
    <div class="co-grid">
      <div class="co-card span2">${hqVisual(co)}
        <div class="co-quick">
          <button class="co-btn primary" data-act="settle">📊 실적 정산</button>
          <button class="co-btn" data-tab="employees">👥 직원</button>
          <button class="co-btn" data-tab="facilities">🏗️ 시설</button>
          ${ns ? `<button class="co-btn gold" data-act="promote">⬆️ ${STAGE_LABEL[ns]} 승급</button>` : ""}
        </div>
      </div>
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
  app.querySelectorAll("[data-emp-hire]").forEach((b) => b.addEventListener("click", () => act(() => Co.hireEmployee(state.uid, b.dataset.empHire, state, payMethod === "card" ? "card" : "company"))));
  app.querySelectorAll("[data-emp-fire]").forEach((b) => b.addEventListener("click", () => act(() => Co.fireEmployee(state.uid, b.dataset.empFire, state))));
  app.querySelectorAll("[data-emp-level]").forEach((b) => b.addEventListener("click", () => act(() => Co.levelUpEmployee(state.uid, b.dataset.empLevel, state, payMethod === "card" ? "card" : "company"))));
  app.querySelectorAll("[data-fac-up]").forEach((b) => b.addEventListener("click", () => act(() => Co.upgradeFacility(state.uid, b.dataset.facUp, state, payMethod === "card" ? "card" : "company"))));
  app.querySelectorAll("[data-act]").forEach((b) => b.addEventListener("click", () => onAct(b.dataset.act)));
}
function syncFoundInputs() { const n = document.getElementById("foName"), s = document.getElementById("foSlogan"); if (n) foundForm.name = n.value; if (s) foundForm.slogan = s.value; }

function onAct(a) {
  if (a === "found") {
    syncFoundInputs();
    const amt = foundCost(state.bank);
    return highValueAct(amt, "설립 심사 중...", () => Co.foundCompany(state.uid, { ...foundForm, payMethod }, state));
  }
  if (a === "settle") return act(() => Co.settleNow(state.uid, state));
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
