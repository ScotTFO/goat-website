// Shared components: nav, footer, scroll reveal, day counter
(function() {
  // Day counter
  const born = new Date('2026-01-31T00:00:00Z');
  const now = new Date();
  const days = Math.max(1, Math.ceil((now - born) / 86400000));
  document.querySelectorAll('.day-count').forEach(el => el.textContent = days);

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
    { threshold: 0.05, rootMargin: '50px' }
  );
  document.querySelectorAll('.about-card, .thought-card, .community-card, .journal-entry, .value, .journal-preview').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
})();
