/* WAZIZ SHOP — Checkout drawer (shared logic) */
import { Cart } from './cart.js';
import { showToast, updateBadge } from './ui.js';
import { submitOrder } from './order-api.js';

export function openCheckout(items) {
  document.getElementById('coDrawer')?.classList.add('open');
  document.getElementById('coOverlay')?.classList.add('open');

  // Meta Pixel: user reached the checkout step
  if (typeof fbq === 'function') {
    const list = typeof items === 'function' ? items() : (Array.isArray(items) ? items : []);
    if (list.length) {
      const value = list.reduce((sum, item) => sum + parseInt(item.price, 10), 0);
      fbq('track', 'InitiateCheckout', {
        content_ids: list.map(i => i.id),
        content_type: 'product',
        contents: list.map(i => ({ id: i.id, quantity: 1 })),
        num_items: list.length,
        value,
        currency: 'MAD'
      });
    }
  }
}

export function closeCheckout() {
  document.getElementById('coDrawer')?.classList.remove('open');
  document.getElementById('coOverlay')?.classList.remove('open');
}

/**
 * Wires the checkout form.
 * @param {() => Array} getItems - returns the items to be ordered
 *        (the full cart on shop.html, or a single buy-now item on product.html)
 * @param {() => void} [onSuccess] - extra cleanup after a successful order
 */
export function initCheckout(getItems, onSuccess) {
  document.querySelectorAll('[data-action="open-checkout"]').forEach(el =>
    el.addEventListener('click', () => openCheckout(getItems))
  );
  document.querySelectorAll('[data-action="close-checkout"]').forEach(el =>
    el.addEventListener('click', closeCheckout)
  );
  document.getElementById('coOverlay')?.addEventListener('click', closeCheckout);

  const form = document.getElementById('checkoutForm');
  const submitBtn = document.getElementById('coSubmitBtn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('cName').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const city = document.getElementById('cCity').value.trim();
    const address = document.getElementById('cAddr').value.trim();

    if (!name || !phone || !city || !address) {
      showToast('يرجى ملء جميع الحقول', 'error');
      return;
    }

    const items = getItems();
    if (!items.length) {
      showToast('السلة فارغة', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'جاري الإرسال... <span class="spinner" aria-hidden="true"></span>';

    const value = items.reduce((sum, item) => sum + parseInt(item.price, 10), 0);

    // Meta Pixel: customer attempted to place an order
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', {
        content_ids: items.map(i => i.id),
        content_type: 'product',
        value,
        currency: 'MAD'
      });
    }

    const ok = await submitOrder({ name, phone, city, address }, items);

    if (ok) {
      document.getElementById('coBody').innerHTML = `
        <div class="success-box" role="status">
          <div class="suc-ico"><i class="fas fa-check-circle" aria-hidden="true"></i></div>
          <h3>لقد تم إرسال طلبك</h3>
          <p>سنتصل بك اليوم أو غداً لكي نؤكد طلبيتك، ومن بعدها تمر إلى التوصيل. المرجو ترك الهاتف بجانبك.</p>
        </div>
      `;

      // Meta Pixel: order was successfully submitted (conversion)
      if (typeof fbq === 'function') {
        fbq('track', 'Purchase', {
          content_ids: items.map(i => i.id),
          content_type: 'product',
          contents: items.map(i => ({ id: i.id, quantity: 1 })),
          num_items: items.length,
          value,
          currency: 'MAD'
        });
      }

      onSuccess?.();
      updateBadge();
    } else {
      showToast('حدث خطأ، حاول مرة أخرى', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane" aria-hidden="true"></i> تأكيد الطلب الآن';
    }
  });
}