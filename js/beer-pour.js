<<<<<<< HEAD
/* 
   Script developed with assistance from Claude AI.
   Logic has been reviewed, adapted, and optimised to fit project requirements,
   including accessibility considerations and responsive behaviour.
*/
=======
/* ai generated */
>>>>>>> 802797a2d1bf416178019c843b0ab889b4debf8e

/* ---------- Beer Pour Animation ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('beer-anim');
  if (!section) return;
  /* target the liquid beer image inside the section */
  const liquid = section.querySelector('.bl-liquid');
  /* reset the fill animation */
  function runAnimation() {
    /* transition reset */
    section.classList.remove('pour-active');
    /* reset liquid height */
<<<<<<< HEAD
    if (liquid) liquid.classList.add('bl-liquid-reset');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (liquid) liquid.classList.remove('bl-liquid-reset');
=======
    if (liquid) { liquid.style.cssText = 'transition:none; height:0;'; }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (liquid) liquid.style.cssText = '';
>>>>>>> 802797a2d1bf416178019c843b0ab889b4debf8e
        /* trigger beer liquid fill */
        setTimeout(() => section.classList.add('pour-active'), 300);
      });
    });
  }
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    setTimeout(runAnimation, 400);
    return;
  }
  /* wait for section scrolling into viewport */
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(runAnimation, 400);
        obs.unobserve(section);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(section);
});