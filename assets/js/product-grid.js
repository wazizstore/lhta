/* WAZIZ SHOP — Shared product grid renderer (used by home + shop pages) */

export function productCardHtml(p, index) {
  const disc = Math.round((1 - p.price / p.originalPrice) * 100);
  // LCP-sensitive: only the very first card's image gets high fetchpriority.
  const isFirst = index === 0;
  return `
    <a class="pcard reveal" style="animation-delay:${index * 0.07}s" href="product.html?id=${p.id}" aria-label="${p.name} — ${p.price} درهم">
      <div class="pcard-img">
        <img
          src="${p.images[0]}"
          alt="${p.name}"
          width="400" height="400"
          loading="${isFirst ? 'eager' : 'lazy'}"
          decoding="async"
          fetchpriority="${isFirst ? 'high' : 'low'}"
        >
        ${disc > 0 ? `<span class="pcard-badge">-${disc}%</span>` : ''}
      </div>
      <div class="pcard-body">
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-price">
          <span class="price-now">${p.price} درهم</span>
          <span class="price-old">${p.originalPrice} درهم</span>
        </div>
      </div>
    </a>
  `;
}

export function renderGrid(containerId, products) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = products.map((p, i) => productCardHtml(p, i)).join('');
}
