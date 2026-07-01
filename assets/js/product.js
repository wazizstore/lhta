import { products } from './data.js';
import { initCartDrawer, renderCart, showToast, updateBadge } from './ui.js';
import { Cart } from './cart.js';
import { initCheckout, openCheckout } from './checkout.js';

let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let buyNowItem = null;

function switchImage(src, thumbEl) {
  const main = document.getElementById('mainImg');
  main.style.opacity = '0';
  setTimeout(() => {
    main.src = src;
    main.style.opacity = '1';
  }, 150);
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectColor(colorName, el) {
  selectedColor = colorName;
  document.querySelectorAll('.color-swatch').forEach(s => {
    s.classList.remove('active');
    s.setAttribute('aria-pressed', 'false');
  });
  el.classList.add('active');
  el.setAttribute('aria-pressed', 'true');
}

function selectSize(size, el) {
  selectedSize = size;
  document.querySelectorAll('.chip.size-chip').forEach(c => {
    c.classList.remove('active');
    c.setAttribute('aria-pressed', 'false');
  });
  el.classList.add('active');
  el.setAttribute('aria-pressed', 'true');
}

function validateSelections() {
  const p = currentProduct;
  const hasColors = p.colors && p.colors.length > 0;
  const hasSizes = p.sizes && p.sizes.length > 0;
  if (hasColors && !selectedColor) {
    showToast('الرجاء اختيار اللون', 'error');
    return false;
  }
  if (hasSizes && !selectedSize) {
    showToast('الرجاء اختيار المقاس', 'error');
    return false;
  }
  return true;
}

function buildOrderItem() {
  const p = currentProduct;
  return {
    id: p.id,
    name: p.name,
    price: p.price,
    img: p.images[0],
    color: selectedColor || '',
    size: selectedSize || ''
  };
}

function addToCart() {
  if (!validateSelections()) return;
  Cart.add(buildOrderItem());
  updateBadge();
  showToast('تمت الإضافة إلى السلة ✓', 'success');
}

function buyNow() {
  if (!validateSelections()) return;
  buyNowItem = buildOrderItem();
  openCheckout();
}

function renderGallery(p) {
  return `
    <div class="product-gallery">
      <div class="main-img-wrap">
        <img id="mainImg" class="main-img" src="${p.images[0]}" alt="${p.name}"
             width="600" height="600" fetchpriority="high" decoding="async">
      </div>
      ${p.images.length > 1 ? `
        <div class="thumb-grid">
          ${p.images.map((img, i) => `
            <img
              class="thumb-img ${i === 0 ? 'active' : ''}"
              src="${img}"
              alt="${p.name} ${i + 1}"
              width="100" height="100"
              loading="lazy"
              decoding="async"
              data-img="${img}"
              role="button"
              tabindex="0"
              aria-label="عرض الصورة ${i + 1} من ${p.images.length}"
            >
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderInfo(p) {
  const hasColors = p.colors && p.colors.length > 0;
  const hasSizes = p.sizes && p.sizes.length > 0;
  const disc = Math.round((1 - p.price / p.originalPrice) * 100);
  const discountHtml = disc > 0 ? `<span class="discount-tag">-${disc}% تخفيض</span>` : '';

  const colorsHtml = hasColors ? `
    <div class="option-group">
      <span class="option-label" id="colorLabel"><i class="fas fa-palette" aria-hidden="true"></i> اللون</span>
      <div class="color-swatch-group" role="group" aria-labelledby="colorLabel">
        ${p.colors.map(c => `
          <button
            type="button"
            class="color-swatch ${c.class}${!c.inStock ? ' out-of-stock' : ''}"
            title="${c.name}${!c.inStock ? ' (غير متوفر)' : ''}"
            aria-label="${c.name}${!c.inStock ? ' (غير متوفر)' : ''}"
            aria-pressed="false"
            data-color="${c.name}"
            ${!c.inStock ? 'disabled' : ''}
          >
            <span class="color-name-tooltip">${c.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  ` : '';

  const sizesHtml = hasSizes ? `
    <div class="option-group">
      <span class="option-label" id="sizeLabel"><i class="fas fa-ruler" aria-hidden="true"></i> المقاس</span>
      <div class="chips" role="group" aria-labelledby="sizeLabel">
        ${p.sizes.map(s => `
          <button type="button" class="chip size-chip" aria-pressed="false" data-size="${s}">${s}</button>
        `).join('')}
      </div>
      ${p.showSizeGuide ? `
        <div class="size-hint">
          <i class="fas fa-info-circle" aria-hidden="true"></i>
          <span>M مناسب 65–75كغ · L مناسب 75–85كغ · XL مناسب 85–95كغ</span>
        </div>
      ` : ''}
    </div>
  ` : '';

  const ctaHtml = `
    <div class="cta-group">
      <button type="button" class="btn-buy-now" id="buyNowBtn">
        <i class="fas fa-bolt" aria-hidden="true"></i>
        اطلب الآن
      </button>
      <button type="button" class="btn-add-cart" id="addToCartBtn">
        <i class="fas fa-shopping-bag" aria-hidden="true"></i>
        أضف إلى السلة
      </button>
    </div>
  `;

  return `
    <div class="product-info">
      <h1 class="product-name">${p.name}</h1>
      <div class="product-prices">
        <span class="product-price-now">${p.price} درهم</span>
        ${disc > 0 ? `<span class="product-price-old">${p.originalPrice} درهم</span>` : ''}
        ${discountHtml}
      </div>
      <p class="product-desc">${p.description}</p>
      ${colorsHtml}
      ${sizesHtml}
      ${ctaHtml}
    </div>
  `;
}

function notFoundHtml() {
  return `
    <div style="text-align:center;padding:80px 20px;color:var(--text-muted);">
      <i class="fas fa-exclamation-circle" style="font-size:40px;margin-bottom:16px;display:block;" aria-hidden="true"></i>
      المنتج غير موجود
      <br><br>
      <a class="btn-primary" href="shop.html" style="display:inline-flex;">العودة للمتجر</a>
    </div>
  `;
}

function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const p = products.find(x => x.id === id);
  const page = document.getElementById('productPage');

  if (!p) {
    page.innerHTML = notFoundHtml();
    return;
  }

  currentProduct = p;
  document.title = `${p.name} | WAZIZ SHOP`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', p.description.slice(0, 155));

  page.innerHTML = `
    <div class="product-layout">
      ${renderGallery(p)}
      ${renderInfo(p)}
    </div>
  `;

  // Wire dynamically-inserted controls (CSP-friendly: no inline onclick handlers)
  page.querySelectorAll('.thumb-img').forEach(t =>
    t.addEventListener('click', () => switchImage(t.dataset.img, t))
  );
  page.querySelectorAll('.color-swatch:not([disabled])').forEach(s =>
    s.addEventListener('click', () => selectColor(s.dataset.color, s))
  );
  page.querySelectorAll('.size-chip').forEach(s =>
    s.addEventListener('click', () => selectSize(s.dataset.size, s))
  );
  document.getElementById('addToCartBtn')?.addEventListener('click', addToCart);
  document.getElementById('buyNowBtn')?.addEventListener('click', buyNow);
}

document.addEventListener('DOMContentLoaded', () => {
  initCartDrawer();
  renderCart();
  renderProduct();

  initCheckout(
    () => (buyNowItem ? [buyNowItem] : Cart.get()),
    () => {
      if (!buyNowItem) Cart.clear();
      buyNowItem = null;
    }
  );
});
