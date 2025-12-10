// Toggle menu mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Lightbox immagini (content portfolio & simili)
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

if (lightboxOverlay && lightboxImage && lightboxClose) {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox-src]');
    if (trigger) {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox-src');
      if (src) {
        lightboxImage.setAttribute('src', src);
        lightboxOverlay.classList.add('open');
      }
    }
  });

  lightboxClose.addEventListener('click', () => {
    lightboxOverlay.classList.remove('open');
  });

  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightboxOverlay.classList.remove('open');
    }
  });
}