/* 
   Script developed with assistance from Claude AI.
   Logic has been reviewed, adapted, and optimised to fit project requirements,
   including accessibility considerations and responsive behaviour.
*/

/* ---------- Footer Copyright Auto Assign ---------- */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ---------- Transparent/Solid Nav on Scroll */
const nav = document.querySelector('.site-nav');
function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

/* ---------- Hamburger Toggle ---------- */
const hamburger = document.querySelector('.hamburger');
const drawer    = document.getElementById('mobile-menu');
function closeDrawer() {
  hamburger.setAttribute('aria-expanded', 'false');
  drawer.classList.remove('open');
}
hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  drawer.classList.toggle('open', !expanded);
});
drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

/* ---------- close drawer on viewport resize ---------- */
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) closeDrawer();
}, { passive: true });

/* ---------- Modal ---------- */
const modal    = document.getElementById('form-modal');
const openBtn  = document.getElementById('open-form-preview');
const closeBtn = document.getElementById('close-modal');

if (modal && openBtn && closeBtn) {
  function openModal() {
    modal.classList.add('visible');
    modal.focus();
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
    openBtn.focus();
  }
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) closeModal();
  });
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}