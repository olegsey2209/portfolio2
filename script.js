const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const toTopBtn = document.getElementById('toTopBtn');
const fgocModal = document.getElementById('fgocModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeFgocBtn = document.getElementById('closeFgocBtn');

const openButtons = [
  document.getElementById('openFgocBtn'),
  document.getElementById('openFgocBtnMobile'),
  document.getElementById('openFgocBtnHero')
].filter(Boolean);

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

function openModal() {
  fgocModal.classList.add('open');
  fgocModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  fgocModal.classList.remove('open');
  fgocModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

openButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

closeFgocBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (fgocModal.classList.contains('open')) closeModal();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && fgocModal.classList.contains('open')) {
    closeModal();
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    toTopBtn.classList.add('visible');
  } else {
    toTopBtn.classList.remove('visible');
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
