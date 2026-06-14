const STORAGE_KEY = 'inventory_mvp_v1';

const seedItems = [
  { id: 'u-vest-95', category: '유니폼 상의', name: '조끼', size: '95', initialStock: 5, unitPrice: 0 },
  { id: 'u-vest-105', category: '유니폼 상의', name: '조끼', size: '105', initialStock: 38, unitPrice: 0 },
  { id: 'u-vest-110', category: '유니폼 상의', name: '조끼', size: '110', initialStock: 50, unitPrice: 0 },
  { id: 'u-vest-115', category: '유니폼 상의', name: '조끼', size: '115', initialStock: 60, unitPrice: 0 },
  { id: 'u-vest-120', category: '유니폼 상의', name: '조끼', size: '120', initialStock: 1, unitPrice: 0 },
  { id: 'u-summer-shirt-90', category: '유니폼 상의', name: '하계 셔츠', size: '90', initialStock: 14, unitPrice: 0 },
  { id: 'u-summer-shirt-95', category: '유니폼 상의', name: '하계 셔츠', size: '95', initialStock: 38, unitPrice: 0 },
  { id: 'u-summer-shirt-105', category: '유니폼 상의', name: '하계 셔츠', size: '105', initialStock: 44, unitPrice: 0 },
  { id: 'u-summer-shirt-110', category: '유니폼 상의', name: '하계 셔츠', size: '110', initialStock: 44, unitPrice: 0 },
  { id: 'u-summer-shirt-115', category: '유니폼 상의', name: '하계 셔츠', size: '115', initialStock: 13, unitPrice: 0 },
  { id: 'u-summer-shirt-120', category: '유니폼 상의', name: '하계 셔츠', size: '120', initialStock: 2, unitPrice: 0 },
  { id: 'u-winter-shirt-90', category: '유니폼 상의', name: '동계 셔츠', size: '90', initialStock: 21, unitPrice: 0 },
  { id: 'u-winter-shirt-95', category: '유니폼 상의', name: '동계 셔츠', size: '95', initialStock: 108, unitPrice: 0 },
  { id: 'u-winter-shirt-100', category: '유니폼 상의', name: '동계 셔츠', size: '100', initialStock: 68, unitPrice: 0 },
  { id: 'u-winter-shirt-105', category: '유니폼 상의', name: '동계 셔츠', size: '105', initialStock: 57, unitPrice: 0 },
  { id: 'u-winter-shirt-110', category: '유니폼 상의', name: '동계 셔츠', size: '110', initialStock: 100, unitPrice: 0 },
  { id: 'u-winter-shirt-115', category: '유니폼 상의', name: '동계 셔츠', size: '115', initialStock: 28, unitPrice: 0 },
  { id: 'u-winter-shirt-120', category: '유니폼 상의', name: '동계 셔츠', size: '120', initialStock: 54, unitPrice: 0 },
  { id: 'u-winter-outer-90', category: '유니폼 상의', name: '동계 외피', size: '90', initialStock: 44, unitPrice: 0 },
  { id: 'u-winter-outer-95', category: '유니폼 상의', name: '동계 외피', size: '95', initialStock: 83, unitPrice: 0 },
  { id: 'u-winter-outer-100', category: '유니폼 상의', name: '동계 외피', size: '100', initialStock: 97, unitPrice: 0 },
  { id: 'u-winter-outer-105', category: '유니폼 상의', name: '동계 외피', size: '105', initialStock: 147, unitPrice: 0 },
  { id: 'u-winter-outer-110', category: '유니폼 상의', name: '동계 외피', size: '110', initialStock: 79, unitPrice: 0 },
  { id: 'u-winter-outer-115', category: '유니폼 상의', name: '동계 외피', size: '115', initialStock: 54, unitPrice: 0 },
  { id: 'u-winter-outer-120', category: '유니폼 상의', name: '동계 외피', size: '120', initialStock: 51, unitPrice: 0 },
  { id: 'u-winter-inner-90', category: '유니폼 상의', name: '동계 내피', size: '90', initialStock: 48, unitPrice: 0 },
  { id: 'u-winter-inner-95', category: '유니폼 상의', name: '동계 내피', size: '95', initialStock: 93, unitPrice: 0 },
  { id: 'u-winter-inner-100', category: '유니폼 상의', name: '동계 내피', size: '100', initialStock: 111, unitPrice: 0 },
  { id: 'u-winter-inner-105', category: '유니폼 상의', name: '동계 내피', size: '105', initialStock: 91, unitPrice: 0 },
  { id: 'u-winter-inner-110', category: '유니폼 상의', name: '동계 내피', size: '110', initialStock: 88, unitPrice: 0 },
  { id: 'u-winter-inner-115', category: '유니폼 상의', name: '동계 내피', size: '115', initialStock: 53, unitPrice: 0 },
  { id: 'u-winter-inner-120', category: '유니폼 상의', name: '동계 내피', size: '120', initialStock: 39, unitPrice: 0 },
  { id: 'u-summer-pants-28', category: '유니폼 하의', name: '하계 바지', size: '28', initialStock: 24, unitPrice: 0 },
  { id: 'u-summer-pants-30', category: '유니폼 하의', name: '하계 바지', size: '30', initialStock: 43, unitPrice: 0 },
  { id: 'u-winter-pants-28', category: '유니폼 하의', name: '동계 바지', size: '28', initialStock: 8, unitPrice: 0 },
  { id: 'u-winter-pants-30', category: '유니폼 하의', name: '동계 바지', size: '30', initialStock: 45, unitPrice: 0 },
  { id: 'u-winter-pants-32', category: '유니폼 하의', name: '동계 바지', size: '32', initialStock: 89, unitPrice: 0 },
  { id: 'u-winter-pants-34', category: '유니폼 하의', name: '동계 바지', size: '34', initialStock: 142, unitPrice: 0 },
  { id: 'u-winter-pants-36', category: '유니폼 하의', name: '동계 바지', size: '36', initialStock: 88, unitPrice: 0 },
  { id: 'u-winter-pants-38', category: '유니폼 하의', name: '동계 바지', size: '38', initialStock: 69, unitPrice: 0 },
  { id: 'u-winter-pants-40', category: '유니폼 하의', name: '동계 바지', size: '40', initialStock: 36, unitPrice: 0 },
  { id: 'u-winter-pants-42', category: '유니폼 하의', name: '동계 바지', size: '42', initialStock: 12, unitPrice: 0 },
  { id: 'glove-m', category: '장갑', name: '장갑', size: 'M', initialStock: 2150, unitPrice: 0 },
  { id: 'glove-l', category: '장갑', name: '장갑', size: 'L', initialStock: 300, unitPrice: 0 },
  { id: 'mat-standard', category: '시공매트', name: '시공매트', size: '기본', initialStock: 102, unitPrice: 0 }
];

const pageMap = {
  dashboard: ['재고 현황', '품목/사이즈별 현재 재고와 단가를 확인합니다.'],
  transactions: ['수불 등록', '입고·분출·반납·조정 내역을 등록합니다.'],
  history: ['수불 이력', '누가 언제 무엇을 처리했는지 확인합니다.'],
  audit: ['실사 등록', '전산수량과 실사수량 차이를 기록하고 조정합니다.'],
  'audit-history': ['실사 이력', '실사 기록과 점검 이미지를 확인합니다.'],
  pricing: ['단가 관리', '분출 청구용 단가를 설정합니다.'],
  billing: ['청구 조회', '분출 기준 청구금액을 담당자별로 조회합니다.']
};

let state = loadState();

const els = {
  navTabs: document.getElementById('navTabs'),
  pageTitle: document.getElementById('pageTitle'),
  pageDesc: document.getElementById('pageDesc'),
  headerStats: document.getElementById('headerStats'),
  summaryCards: document.getElementById('summaryCards'),
  inventorySearch: document.getElementById('inventorySearch'),
  inventoryTableBody: document.getElementById('inventoryTableBody'),
  transactionForm: document.getElementById('transactionForm'),
  transactionItemSelect: document.getElementById('transactionItemSelect'),
  transactionSize: document.getElementById('transactionSize'),
  transactionUnitPrice: document.getElementById('transactionUnitPrice'),
  transactionAmount: document.getElementById('transactionAmount'),
  historyTypeFilter: document.getElementById('historyTypeFilter'),
  historySearch: document.getElementById('historySearch'),
  historyTableBody: document.getElementById('historyTableBody'),
  auditForm: document.getElementById('auditForm'),
  auditItemSelect: document.getElementById('auditItemSelect'),
  auditSize: document.getElementById('auditSize'),
  auditSystemQty: document.getElementById('auditSystemQty'),
  auditCountedQty: document.getElementById('auditCountedQty'),
  auditDiffQty: document.getElementById('auditDiffQty'),
  auditImage: document.getElementById('auditImage'),
  auditPreview: document.getElementById('auditPreview'),
  auditHistoryGrid: document.getElementById('auditHistoryGrid'),
  pricingTableBody: document.getElementById('pricingTableBody'),
  billingSearch: document.getElementById('billingSearch'),
  billingSummaryCards: document.getElementById('billingSummaryCards'),
  billingTableBody: document.getElementById('billingTableBody'),
  seedBtn: document.getElementById('seedBtn'),
  backupBtn: document.getElementById('backupBtn'),
  restoreInput: document.getElementById('restoreInput')
};

init();

function init() {
  bindEvents();
  populateItemSelects();
  setDefaultDates();
  renderAll();
}

function bindEvents() {
  els.navTabs.addEventListener('click', onTabClick);
  els.inventorySearch.addEventListener('input', renderInventory);
  els.transactionItemSelect.addEventListener('change', syncTransactionItem);
  els.transactionForm.quantity.addEventListener('input', syncTransactionAmount);
  els.transactionForm.type.addEventListener('change', syncTransactionAmount);
  els.transactionForm.addEventListener('submit', submitTransaction);
  els.historyTypeFilter.addEventListener('change', renderHistory);
  els.historySearch.addEventListener('input', renderHistory);
  els.auditItemSelect.addEventListener('change', syncAuditItem);
  els.auditCountedQty.addEventListener('input', syncAuditDiff);
  els.auditImage.addEventListener('change', previewAuditImage);
  els.auditForm.addEventListener('submit', submitAudit);
  els.billingSearch.addEventListener('input', renderBilling);
  els.seedBtn.addEventListener('click', resetSeedData);
  els.backupBtn.addEventListener('click', downloadBackup);
  els.restoreInput.addEventListener('change', restoreBackup);
  els.pricingTableBody.addEventListener('click', savePriceInline);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { console.error(e); }
  }
  return makeSeedState();
}

function makeSeedState() {
  return { items: structuredClone(seedItems), transactions: [], audits: [] };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  els.transactionForm.date.value = today;
  els.auditForm.date.value = today;
}

function onTabClick(event) {
  const btn = event.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  const tab = btn.dataset.tab;
  document.querySelector(`[data-panel="${tab}"]`).classList.add('active');
  const [title, desc] = pageMap[tab];
  els.pageTitle.textContent = title;
  els.pageDesc.textContent = desc;
}

function populateItemSelects() {
  const options = state.items.map(item => `<option value="${item.id}">${item.category} / ${item.name} / ${item.size}</option>`).join('');
  els.transactionItemSelect.innerHTML = options;
  els.auditItemSelect.innerHTML = options;
  syncTransactionItem();
  syncAuditItem();
}

function getItemById(id) {
  return state.items.find(item => item.id === id);
}

function getSignedQuantity(tx) {
  if (tx.type === '입고' || tx.type === '반납') return tx.quantity;
  if (tx.type === '분출') return -tx.quantity;
  return tx.quantity;
}

function getCurrentStock(itemId) {
  const item = getItemById(itemId);
  const sum = state.transactions.filter(tx => tx.itemId === itemId).reduce((acc, tx) => acc + getSignedQuantity(tx), 0);
  return item.initialStock + sum;
}

function getInventoryRows() {
  return state.items.map(item => ({ ...item, currentStock: getCurrentStock(item.id), stockValue: getCurrentStock(item.id) * (Number(item.unitPrice) || 0) }));
}

function renderAll() {
  saveState();
  renderHeaderStats();
  renderSummaryCards();
  renderInventory();
  renderHistory();
  renderPricing();
  renderAuditHistory();
  renderBilling();
}

function renderHeaderStats() {
  const inventory = getInventoryRows();
  const issueCount = state.transactions.filter(tx => tx.type === '분출').length;
  const totalAmount = state.transactions.filter(tx => tx.type === '분출').reduce((acc, tx) => acc + (tx.amount || 0), 0);
  const diffCount = state.audits.filter(a => a.diffQty !== 0).length;
  els.headerStats.innerHTML = `
    <div class="mini-stat"><span>총 품목 수</span><strong>${inventory.length}</strong></div>
    <div class="mini-stat"><span>분출 건수</span><strong>${issueCount}</strong></div>
    <div class="mini-stat"><span>청구 누계</span><strong>${formatCurrency(totalAmount)}</strong></div>
    <div class="mini-stat"><span>차이 발생 실사</span><strong>${diffCount}</strong></div>
  `;
}

function renderSummaryCards() {
  const inventory = getInventoryRows();
  const totalStock = inventory.reduce((acc, row) => acc + row.currentStock, 0);
  const totalValue = inventory.reduce((acc, row) => acc + row.stockValue, 0);
  const lowItems = inventory.filter(row => row.currentStock <= 0).length;
  const today = new Date().toISOString().slice(0, 10);
  const todayMoves = state.transactions.filter(tx => tx.date === today).length;
  els.summaryCards.innerHTML = [
    ['총 재고 수량', formatNumber(totalStock)],
    ['총 재고 금액', formatCurrency(totalValue)],
    ['재고 0 이하 품목', formatNumber(lowItems)],
    ['오늘 수불 건수', formatNumber(todayMoves)]
  ].map(([label, value]) => `<div class="summary-card"><span>${label}</span><strong>${value}</strong></div>`).join('');
}

function renderInventory() {
  const keyword = els.inventorySearch.value.trim();
  const rows = getInventoryRows().filter(row => !keyword || `${row.category} ${row.name} ${row.size}`.includes(keyword));
  els.inventoryTableBody.innerHTML = rows.map(row => `
    <tr>
      <td>${row.category}</td>
      <td>${row.name}</td>
      <td>${row.size}</td>
      <td>${formatNumber(row.currentStock)}</td>
      <td>${formatCurrency(row.unitPrice || 0)}</td>
      <td>${formatCurrency(row.stockValue)}</td>
    </tr>
  `).join('') || `<tr><td colspan="6" class="empty-state">표시할 재고가 없습니다.</td></tr>`;
}

function syncTransactionItem() {
  const item = getItemById(els.transactionItemSelect.value);
  if (!item) return;
  els.transactionSize.value = item.size;
  els.transactionUnitPrice.value = item.unitPrice || 0;
  syncTransactionAmount();
}

function syncTransactionAmount() {
  const qty = Number(els.transactionForm.quantity.value || 0);
  const type = els.transactionForm.type.value;
  const unitPrice = Number(els.transactionUnitPrice.value || 0);
  els.transactionAmount.value = type === '분출' ? qty * unitPrice : 0;
}

function submitTransaction(event) {
  event.preventDefault();
  const form = new FormData(els.transactionForm);
  const item = getItemById(form.get('itemId'));
  const tx = {
    id: crypto.randomUUID(),
    date: form.get('date'),
    type: form.get('type'),
    itemId: item.id,
    quantity: Number(form.get('quantity')),
    issuer: form.get('issuer') || '',
    receiver: form.get('receiver') || '',
    note: form.get('note') || '',
    unitPrice: Number(item.unitPrice || 0),
    amount: form.get('type') === '분출' ? Number(form.get('quantity')) * Number(item.unitPrice || 0) : 0,
    createdAt: new Date().toISOString()
  };
  state.transactions.unshift(tx);
  els.transactionForm.reset();
  setDefaultDates();
  syncTransactionItem();
  renderAll();
  alert('수불 내역이 등록되었습니다.');
}

function renderHistory() {
  const typeFilter = els.historyTypeFilter.value;
  const keyword = els.historySearch.value.trim();
  const rows = state.transactions.filter(tx => {
    const item = getItemById(tx.itemId);
    const text = `${item?.name || ''} ${item?.size || ''} ${tx.issuer} ${tx.receiver} ${tx.note}`;
    return (typeFilter === '전체' || tx.type === typeFilter) && (!keyword || text.includes(keyword));
  });

  els.historyTableBody.innerHTML = rows.map(tx => {
    const item = getItemById(tx.itemId);
    return `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.type}</td>
        <td>${item?.name || '-'}</td>
        <td>${item?.size || '-'}</td>
        <td>${formatNumber(tx.quantity)}</td>
        <td>${tx.issuer || '-'}</td>
        <td>${tx.receiver || '-'}</td>
        <td>${formatCurrency(tx.unitPrice || 0)}</td>
        <td>${formatCurrency(tx.amount || 0)}</td>
        <td>${tx.note || '-'}</td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="10" class="empty-state">수불 이력이 없습니다.</td></tr>`;
}

function syncAuditItem() {
  const item = getItemById(els.auditItemSelect.value);
  if (!item) return;
  els.auditSize.value = item.size;
  els.auditSystemQty.value = getCurrentStock(item.id);
  syncAuditDiff();
}

function syncAuditDiff() {
  const systemQty = Number(els.auditSystemQty.value || 0);
  const countedQty = Number(els.auditCountedQty.value || 0);
  els.auditDiffQty.value = countedQty - systemQty;
}

async function previewAuditImage() {
  const file = els.auditImage.files[0];
  if (!file) {
    els.auditPreview.innerHTML = '첨부 이미지 미리보기';
    return;
  }
  const dataUrl = await compressImage(file);
  els.auditPreview.innerHTML = `<img src="${dataUrl}" alt="실사 이미지 미리보기" />`;
  els.auditPreview.dataset.image = dataUrl;
}

async function submitAudit(event) {
  event.preventDefault();
  const form = new FormData(els.auditForm);
  const item = getItemById(form.get('itemId'));
  const systemQty = getCurrentStock(item.id);
  const countedQty = Number(form.get('countedQty'));
  const diffQty = countedQty - systemQty;
  const imageData = els.auditPreview.dataset.image || '';

  const audit = {
    id: crypto.randomUUID(),
    date: form.get('date'),
    inspector: form.get('inspector'),
    itemId: item.id,
    systemQty,
    countedQty,
    diffQty,
    note: form.get('note') || '',
    imageData,
    createdAt: new Date().toISOString()
  };
  state.audits.unshift(audit);

  if (diffQty !== 0) {
    state.transactions.unshift({
      id: crypto.randomUUID(),
      date: audit.date,
      type: '실사조정',
      itemId: item.id,
      quantity: diffQty,
      issuer: '',
      receiver: '',
      note: `실사조정 / 조사자: ${audit.inspector}`,
      unitPrice: Number(item.unitPrice || 0),
      amount: 0,
      createdAt: new Date().toISOString()
    });
  }

  els.auditForm.reset();
  els.auditPreview.innerHTML = '첨부 이미지 미리보기';
  delete els.auditPreview.dataset.image;
  setDefaultDates();
  syncAuditItem();
  renderAll();
  alert(diffQty === 0 ? '실사 내역이 등록되었습니다.' : '실사 내역과 재고조정이 등록되었습니다.');
}

function renderAuditHistory() {
  const template = document.getElementById('auditCardTemplate');
  els.auditHistoryGrid.innerHTML = '';
  if (!state.audits.length) {
    els.auditHistoryGrid.innerHTML = `<div class="empty-state">실사 이력이 없습니다.</div>`;
    return;
  }
  state.audits.forEach(audit => {
    const item = getItemById(audit.itemId);
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.audit-meta').innerHTML = `
      <strong>${audit.date}</strong><br />
      <span class="muted">조사자: ${audit.inspector}</span>
    `;
    const badgeClass = audit.diffQty > 0 ? 'plus' : audit.diffQty < 0 ? 'minus' : 'neutral';
    node.querySelector('.audit-body').innerHTML = `
      <div>${item?.category || ''} / ${item?.name || ''} / ${item?.size || ''}</div>
      <div>전산수량: <strong>${formatNumber(audit.systemQty)}</strong></div>
      <div>실사수량: <strong>${formatNumber(audit.countedQty)}</strong></div>
      <div>차이: <span class="badge ${badgeClass}">${signed(audit.diffQty)}</span></div>
      <div>${audit.note || '-'}</div>
    `;
    node.querySelector('.audit-image-wrap').innerHTML = audit.imageData ? `<img src="${audit.imageData}" alt="실사 증빙 이미지" />` : `<span class="muted">첨부 이미지 없음</span>`;
    els.auditHistoryGrid.appendChild(node);
  });
}

function renderPricing() {
  els.pricingTableBody.innerHTML = state.items.map(item => `
    <tr>
      <td>${item.category}</td>
      <td>${item.name}</td>
      <td>${item.size}</td>
      <td>${formatCurrency(item.unitPrice || 0)}</td>
      <td>
        <input class="price-input" type="number" min="0" value="${item.unitPrice || 0}" data-price-id="${item.id}" />
        <button class="primary-btn" data-save-price="${item.id}">저장</button>
      </td>
    </tr>
  `).join('');
}

function savePriceInline(event) {
  const button = event.target.closest('[data-save-price]');
  if (!button) return;
  const itemId = button.dataset.savePrice;
  const input = els.pricingTableBody.querySelector(`[data-price-id="${itemId}"]`);
  const item = getItemById(itemId);
  item.unitPrice = Number(input.value || 0);
  renderAll();
  syncTransactionItem();
  alert('단가가 저장되었습니다.');
}

function renderBilling() {
  const keyword = els.billingSearch.value.trim();
  const rows = state.transactions.filter(tx => tx.type === '분출' && (!keyword || (tx.receiver || '').includes(keyword)));
  const grouped = groupBy(rows, tx => tx.receiver || '미지정');
  els.billingSummaryCards.innerHTML = Object.entries(grouped).map(([receiver, list]) => `
    <div class="summary-card"><span>${receiver}</span><strong>${formatCurrency(list.reduce((acc, tx) => acc + (tx.amount || 0), 0))}</strong></div>
  `).join('') || `<div class="summary-card"><span>청구 데이터 없음</span><strong>₩0</strong></div>`;

  els.billingTableBody.innerHTML = rows.map(tx => {
    const item = getItemById(tx.itemId);
    return `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.receiver || '-'}</td>
        <td>${item?.name || '-'}</td>
        <td>${item?.size || '-'}</td>
        <td>${formatNumber(tx.quantity)}</td>
        <td>${formatCurrency(tx.unitPrice || 0)}</td>
        <td>${formatCurrency(tx.amount || 0)}</td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="7" class="empty-state">청구할 분출 내역이 없습니다.</td></tr>`;
}

function resetSeedData() {
  if (!confirm('현재 입력된 데이터를 지우고 초기 재고 상태로 되돌릴까요?')) return;
  state = makeSeedState();
  populateItemSelects();
  setDefaultDates();
  renderAll();
}

function downloadBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `inventory-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function restoreBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = JSON.parse(reader.result);
      saveState();
      populateItemSelects();
      setDefaultDates();
      renderAll();
      alert('백업을 불러왔습니다.');
    } catch {
      alert('백업 파일을 읽지 못했습니다.');
    }
  };
  reader.readAsText(file);
}

function groupBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString('ko-KR');
}

function formatCurrency(value) {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(Number(value || 0));
}

function signed(value) {
  if (value > 0) return `+${formatNumber(value)}`;
  return formatNumber(value);
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1280;
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.72));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
