/* =====================================================
   LANGUAGE (EN / FR) + THEME (dark / light)
   French copy lives in i18n-fr.js, keyed by the English
   text found in the page.
===================================================== */
(function () {
  'use strict';

  var FR = window.I18N_FR || {};
  var LS_LANG = 'mr-lang';
  var LS_THEME = 'mr-theme';

  var SELECTOR = [
    '.nav-links a',
    '.hero-badge', '.hero-greeting', '.hero-desc', '.hero-btns .btn',
    '.section-tag', '.section-title',
    '.about-text > p', '.highlight-item span', '.stat-card p',
    '.timeline-label', '.edu-info strong', '.edu-info span',
    '.tl-type', '.tl-date', '.tl-project', '.tl-bullets li',
    '.skill-group-header h3', '.skill-item span',
    '.filter-btn',
    '.project-category-tag', '.project-card h3', '.project-card p', '.project-more',
    '.cert-org', '.cert-body h3', '.cert-body p', '.cert-date', '.cert-level', '.cert-btn',
    '.certs-extra-label', '.certs-extra a',
    '.contact-subtitle', '.contact-item-text span', '.contact-item-text strong',
    '.contact-form label', '.contact-form button[type="submit"]', '.form-note',
    'footer p', '#modalRepo'
  ].join(',');

  var PH = {
    'ph.name': 'Jean Dupont',
    'ph.email': 'jean@exemple.fr',
    'ph.subject': 'Opportunité de PFE / collaboration',
    'ph.message': "Parlez-moi de l'opportunité..."
  };

  var META = {
    en: {
      title: 'Med Rahim Ben Nejma | Cloud & DevOps Engineer',
      desc: 'Mohamed Rahim Ben Nejma — computer engineer at ESPRIT (ArcTIC, Cloud & Infrastructure). AWS Academy, Oracle Cloud and Hedera certified. React Native, Spring Boot, Docker, Kubernetes, Jenkins CI/CD and Azure. Open to a Cloud / DevOps PFE, January–June 2027.',
      locale: 'en_US'
    },
    fr: {
      title: 'Med Rahim Ben Nejma | Ingénieur Cloud & DevOps',
      desc: "Mohamed Rahim Ben Nejma — étudiant ingénieur à ESPRIT (ArcTIC, Cloud & Infrastructure). Certifié AWS Academy, Oracle Cloud et Hedera. React Native, Spring Boot, Docker, Kubernetes, CI/CD Jenkins et Azure. Ouvert à un PFE Cloud / DevOps, janvier–juin 2027.",
      locale: 'fr_FR'
    }
  };

  var ROLES = {
    en: [
      'Cloud & DevOps Engineer',
      'Full-Stack Developer',
      'React Native Builder',
      'OpenStack / K8s Enthusiast',
      'IoT & Product Maker'
    ],
    fr: [
      'Ingénieur Cloud & DevOps',
      'Développeur Full-Stack',
      'Développeur React Native',
      'Passionné OpenStack / K8s',
      'Créateur IoT & produit'
    ]
  };

  var NAVCV = {
    en: 'Download CV (PDF)',
    fr: 'Télécharger le CV (PDF)'
  };

  var THEME_LABEL = {
    dark: { en: 'Switch to light mode', fr: 'Passer en mode clair' },
    light: { en: 'Switch to dark mode', fr: 'Passer en mode sombre' }
  };

  var current = 'en';
  var originals = new Map();

  function norm(s) {
    return (s || '').replace(/\s+/g, ' ').trim();
  }

  function collect() {
    if (originals.size) return;
    document.querySelectorAll(SELECTOR).forEach(function (el) {
      if (el.closest('#projectModal') || originals.has(el)) return;
      originals.set(el, { html: el.innerHTML, key: norm(el.textContent) });
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      if (!el.dataset.origPh) el.dataset.origPh = el.getAttribute('placeholder') || '';
    });
  }

  function setMeta(attr, name, value) {
    var el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (el && value) el.setAttribute('content', value);
  }

  function updateThemeLabel() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var t = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    var label = THEME_LABEL[t][current];
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    var icon = document.getElementById('themeIcon');
    if (icon) icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  function apply(lang) {
    current = (lang === 'fr') ? 'fr' : 'en';
    collect();
    document.documentElement.lang = current;

    originals.forEach(function (rec, el) {
      var fr = FR[rec.key];
      if (el.classList.contains('section-title') && rec.key === 'Certifications') {
        fr = 'Certi<span>fications</span>';
      }
      el.innerHTML = (current === 'fr' && fr) ? fr : rec.html;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      el.placeholder = (current === 'fr' && PH[k]) ? PH[k] : el.dataset.origPh;
    });

    var cv = document.querySelector('.nav-cv');
    if (cv) {
      cv.setAttribute('aria-label', NAVCV[current]);
      cv.setAttribute('title', NAVCV[current]);
    }

    var m = META[current];
    if (m) {
      document.title = m.title;
      setMeta('name', 'description', m.desc);
      setMeta('property', 'og:title', m.title);
      setMeta('property', 'og:description', m.desc);
      setMeta('property', 'og:locale', m.locale);
      setMeta('name', 'twitter:title', m.title);
      setMeta('name', 'twitter:description', m.desc);
    }

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      var on = b.getAttribute('data-lang') === current;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    updateThemeLabel();
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: current }, bubbles: true }));
  }

  function setLang(lang) {
    try { localStorage.setItem(LS_LANG, lang === 'fr' ? 'fr' : 'en'); } catch (e) {}
    apply(lang);
  }

  function applyTheme(t, persist) {
    document.documentElement.setAttribute('data-theme', t);
    if (persist) {
      try { localStorage.setItem(LS_THEME, t); } catch (e) {}
    }
    var color = t === 'light' ? '#f5f5fb' : '#080812';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', color);
    updateThemeLabel();
  }

  function toggleTheme() {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next, true);
  }

  // Initial language: saved choice, else the browser language.
  var saved = null;
  try { saved = localStorage.getItem(LS_LANG); } catch (e) {}
  if (saved !== 'fr' && saved !== 'en') {
    saved = (navigator.language || '').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }

  function boot() {
    apply(saved);

    var themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });

    // Follow the OS theme only while the visitor has not chosen one.
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: light)');
      var onChange = function (e) {
        var stored = null;
        try { stored = localStorage.getItem(LS_THEME); } catch (err) {}
        if (stored !== 'light' && stored !== 'dark') applyTheme(e.matches ? 'light' : 'dark', false);
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
    applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.I18N = {
    get lang() { return current; },
    setLang: setLang,
    roles: function () { return ROLES[current].slice(); },
    meta: function () { return META[current]; }
  };
})();
