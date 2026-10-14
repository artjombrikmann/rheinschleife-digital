// Mobile-Navigation
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Menü nach Klick auf einen Link schließen
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer-Jahr automatisch aktuell halten
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Problem-Tags: WhatsApp-Nachricht je nach gewähltem Thema personalisieren
const tagButtons = document.querySelectorAll('.tag-btn');
const issueBtn = document.getElementById('issueWhatsappBtn');

if (tagButtons.length && issueBtn) {
  const baseUrl = 'https://wa.me/4915128864342?text=';

  tagButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.topic;
      const message = `Hallo Artjom, unser Verein hat ein Thema mit #${topic} und wir würden gerne unverbindlich sprechen.`;
      issueBtn.href = baseUrl + encodeURIComponent(message);

      tagButtons.forEach((b) => {
        b.classList.remove('tag-btn-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('tag-btn-active');
      btn.setAttribute('aria-pressed', 'true');

      issueBtn.classList.add('btn-pulse');
      window.setTimeout(() => issueBtn.classList.remove('btn-pulse'), 250);
    });
  });
}
