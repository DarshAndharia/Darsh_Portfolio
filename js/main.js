/* ===== PORTFOLIO MAIN JS ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- THEME TOGGLE ---- */
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const toggleIcon = document.getElementById('toggleIcon');

  const saved = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(saved);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('portfolio-theme', next);
    });
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggleIcon) {
      toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  /* ---- NAVBAR SCROLL BEHAVIOUR ---- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  /* ---- ACTIVE NAV LINK on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 90) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active-section');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active-section');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ---- SMOOTH SCROLL for nav links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 75;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      // close mobile menu if open
      const bsCollapse = document.getElementById('navbarNav');
      if (bsCollapse && bsCollapse.classList.contains('show')) {
        bsCollapse.classList.remove('show');
      }
    });
  });

  /* ---- SCROLL REVEAL ---- */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  /* ---- TYPED EFFECT on hero (optional) ---- */
  const typedEl = document.getElementById('typed-role');
  if (typedEl) {
    const roles = typedEl.getAttribute('data-roles')?.split(',') || [];
    let ri = 0, ci = 0, deleting = false;
    function type() {
      const word = roles[ri] || '';
      typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
      let delay = deleting ? 60 : 100;
      if (!deleting && ci > word.length) { delay = 1800; deleting = true; }
      if (deleting && ci < 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
      setTimeout(type, delay);
    }
    if (roles.length) type();
  }

  /* ---- YEAR in footer ---- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
