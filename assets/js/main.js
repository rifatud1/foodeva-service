(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const yearTarget = document.getElementById('current-year');

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.startsWith('http') || href.startsWith('mailto:')) {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        const headerOffset = header ? header.offsetHeight + 16 : 0;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
      }
    });
  });
})();
