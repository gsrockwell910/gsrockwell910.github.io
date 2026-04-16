/* ============================================================
   Gavin Rockwell — Portfolio
   main.js
   ============================================================ */

'use strict';

/* ── Nav: add .scrolled class when user scrolls past 40px ─── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Scroll-reveal: fade elements in as they enter viewport ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once only
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Smooth scroll for in-page anchor links ───────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
