// Mobile-Navigation
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Aktiven Menüpunkt beim Scrollen markieren
if ('IntersectionObserver' in window && primaryNav) {
  const links = Array.from(primaryNav.querySelectorAll('a[href^="#"]'));
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = byId.get(entry.target.id);
      if (link && entry.isIntersecting) {
        links.forEach((a) => a.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  byId.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// Vorher/Nachher-Umschalter
const tabs = document.querySelectorAll('.tab[data-sandbox]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      const active = t === tab;
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
  });
});

// Problem-Finder
const WA = 'https://wa.me/4915128864342?text=';
const clubProfiles = {
  sport: {
    tag: '<fokus: sportverein/>',
    heading: 'Helferplanung & sonntägliche Presseberichte',
    desc: 'Beim Sportfest fehlen oft dieselben Helfer am Grill. Gleichzeitig muss der Spielbericht spät abends noch an die Lokalsport-Redaktion geschickt werden.',
    impact: 'Kann viele Stunden Organisationszeit pro Event sparen',
    sol1: 'SchichtmeisterApp Integration',
    sol1Desc: 'Digitale Anmeldung ohne WhatsApp-Spam',
    sol2: 'Presse- & Social-Tool',
    sol2Desc: 'Spielbericht auf Knopfdruck um 18:00 Uhr',
    msg: 'Hallo Artjom, unser Sportverein möchte eine einfachere Lösung'
  },
  musik: {
    tag: '<fokus: musikverein/>',
    heading: 'Konzert-Helfer & Proben-Terminkoordination',
    desc: 'Auf- und Abbau beim Jahreskonzert sowie Thekendienste werden auf zu viele Schultern verteilt oder bleiben am Vorstand hängen.',
    impact: 'Entlastet den Festausschuss spürbar',
    sol1: 'SchichtmeisterApp mit Bonuspunkten',
    sol1Desc: 'Transparente Belohnung für aktive Musiker',
    sol2: 'Termin-Widget für die Website',
    sol2Desc: 'Öffentliche Auftritte leicht aktuell halten',
    msg: 'Hallo Artjom, unser Musikverein sucht digitale Unterstützung'
  },
  feuerwehr: {
    tag: '<fokus: feuerwehrverein/>',
    heading: 'Tag der offenen Tür & Nachwuchsgewinnung',
    desc: 'Für das Feuerwehrfest müssen dutzende Schichten koordiniert werden. Gleichzeitig braucht die Jugendfeuerwehr eine frische Online-Präsenz.',
    impact: 'Übersichtliche Schichtplanung für das ganze Fest',
    sol1: 'SchichtmeisterApp Einsatzfest',
    sol1Desc: 'Einfache Einteilung für alle Kameraden',
    sol2: 'Moderne Webseite mit CMS',
    sol2Desc: 'Berichte & Nachwuchsaufrufe direkt teilen',
    msg: 'Hallo Artjom, unser Feuerwehrverein hat eine Anfrage'
  },
  betrieb: {
    tag: '<fokus: handwerksbetrieb/>',
    heading: 'Notdienst-Anfragen & mobile Erreichbarkeit',
    desc: 'Kunden rufen am Wochenende an oder suchen mobil nach schneller Hilfe. Eine klare, saubere Website ohne Schnickschnack hilft, dass Notfall-Anfragen schnell ankommen.',
    impact: 'Direkte Neukunden & klare Erreichbarkeit',
    sol1: 'Mobil-first Express-Webseite',
    sol1Desc: 'Notruf-CTA direkt auf dem Handy-Bildschirm',
    sol2: 'Lokale Auffindbarkeit für Boppard & Koblenz',
    sol2Desc: 'Besser bei der Suche vor Ort gefunden werden',
    msg: 'Hallo Artjom, ich habe einen Handwerksbetrieb in der Region'
  }
};

const setText = (id, text) => {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
};

document.querySelectorAll('.pill-btn[data-club]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const data = clubProfiles[btn.dataset.club];
    if (!data) return;
    setText('clubTag', data.tag);
    setText('clubHeading', data.heading);
    setText('clubDesc', data.desc);
    setText('clubImpact', data.impact);
    setText('clubSol1', data.sol1);
    setText('clubSol1Desc', data.sol1Desc);
    setText('clubSol2', data.sol2);
    setText('clubSol2Desc', data.sol2Desc);
    const cta = document.getElementById('clubCta');
    if (cta) cta.href = WA + encodeURIComponent(data.msg);
    document.querySelectorAll('.pill-btn[data-club]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b === btn));
    });
  });
});

// Themen-Auswahl -> WhatsApp-Text
const topicLink = document.getElementById('topicWhatsAppLink');
document.querySelectorAll('.topic-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const topic = btn.textContent.trim();
    if (topicLink) {
      topicLink.href = WA + encodeURIComponent('Hallo Artjom, in unserem Verein drückt besonders der Schuh beim Thema: ' + topic + ' - wie können wir das lösen?');
    }
    document.querySelectorAll('.topic-btn').forEach((b) => {
      b.setAttribute('aria-pressed', String(b === btn));
    });
  });
});

// Footer-Jahr
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
