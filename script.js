/* ===================== PRELOADER ===================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 800);
});

/* ===================== CUSTOM CURSOR ===================== */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followX = 0, followY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateCursor() {
  followX += (mouseX - followX) * 0.12;
  followY += (mouseY - followY) * 0.12;
  follower.style.left = followX + 'px';
  follower.style.top = followY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .project-card, .stat-card, .cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    follower.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    follower.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

/* ===================== TYPEWRITER ===================== */
const roles = (window.I18N && window.I18N.roles()) || [
  'Cloud & DevOps Engineer',
  'Full-Stack Developer',
  'React Native Builder',
  'OpenStack / K8s Enthusiast',
  'IoT & Product Maker'
];
let roleIdx = 0, charIdx = 0, isDeleting = false, typeTimer = null;
const typewriterEl = document.getElementById('typewriter');

function typewrite() {
  const current = roles[roleIdx];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typewriterEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }

  let delay = isDeleting ? 60 : 100;
  if (!isDeleting && charIdx === current.length) {
    delay = 2000; isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    delay = 400;
  }
  typeTimer = setTimeout(typewrite, delay);
}
typewrite();

// Restart the loop with the role list of the newly selected language.
document.addEventListener('i18n:changed', () => {
  if (!window.I18N) return;
  const next = window.I18N.roles();
  if (!next || !next.length) return;
  clearTimeout(typeTimer);
  roles.length = 0;
  roles.push(...next);
  roleIdx = 0; charIdx = 0; isDeleting = false;
  typewriterEl.textContent = '';
  typewrite();
});

/* ===================== NAVBAR SCROLL ===================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===================== HAMBURGER ===================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ===================== ACTIVE NAV LINK ===================== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

/* ===================== SCROLL REVEAL ===================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Stagger children in grids
document.querySelectorAll('.projects-grid, .certs-grid, .skills-wrapper, .stat-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.dataset.reveal = '';
    child.dataset.delay = i * 80;
  });
});

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* ===================== PROJECT FILTER ===================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ===================== BACK TO TOP ===================== */
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.classList.toggle('show', window.scrollY > 400);
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===================== CONTACT FORM ===================== */
// Static site: no backend. Compose the message in the visitor's mail client
// instead of showing a fake "Message Sent" confirmation.
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const isFr = window.I18N && window.I18N.lang === 'fr';
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const topic = form.elements.subject.value.trim() ||
    (isFr ? 'Contact portfolio' : 'Portfolio contact');
  const message = form.elements.message.value.trim();

  const subject = `[Portfolio] ${topic}`;
  const body = isFr
    ? `Nom : ${name}\nE-mail : ${email}\n\n${message}`
    : `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href =
    'mailto:medrahim.bennejma@esprit.tn' +
    `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* ===================== SMOOTH SCROLL ===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===================== PROJECT MODAL + LIGHTBOX ===================== */
(function initProjectModal() {
  function boot() {
    const modal = document.getElementById('projectModal');
    const lightbox = document.getElementById('lightbox');
    const projectsRoot = document.getElementById('projects');
    if (!modal || !lightbox || !projectsRoot || !window.PROJECTS) {
      console.warn('Project modal not ready');
      return;
    }

    const title = document.getElementById('modalTitle');
    const tag = document.getElementById('modalTag');
    const summary = document.getElementById('modalSummary');
    const details = document.getElementById('modalDetails');
    const note = document.getElementById('modalNote');
    const tech = document.getElementById('modalTech');
    const repoLink = document.getElementById('modalRepo');
    const gallery = document.getElementById('modalGallery');
    const galleryWrap = document.getElementById('modalGalleryWrap');
    const captureCount = document.getElementById('modalCaptureCount');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (!title || !tag || !summary || !details || !tech) {
      console.warn('Project modal markup incomplete');
      return;
    }

    let currentCaptures = [];
    let activeId = null;

    function hideGallery() {
      currentCaptures = [];
      if (galleryWrap) {
        galleryWrap.hidden = true;
        galleryWrap.setAttribute('aria-hidden', 'true');
      }
      if (gallery) gallery.innerHTML = '';
      if (captureCount) captureCount.textContent = '';
    }

    hideGallery();

    function catalog(lang) {
      return (lang === 'fr' && window.PROJECTS_FR) ? window.PROJECTS_FR : window.PROJECTS;
    }

    function render(id) {
      const lang = window.I18N ? window.I18N.lang : 'en';
      const source = catalog(lang);
      const p = source[id] || window.PROJECTS[id];
      if (!p) return;

      title.textContent = p.title;
      tag.textContent = p.tag;
      summary.textContent = p.summary;

      const detailList = p.details || [];
      details.innerHTML = detailList.map(d => `<li>${d}</li>`).join('');
      details.hidden = detailList.length === 0;

      if (note) {
        note.hidden = true;
        note.textContent = '';
      }

      tech.innerHTML = (p.tech || []).map(t => `<span>${t}</span>`).join('');

      if (repoLink) {
        if (p.repo) {
          repoLink.href = p.repo;
          repoLink.hidden = false;
          repoLink.innerHTML = '<i class="fab fa-github"></i> ' +
            (lang === 'fr' ? 'Voir le dépôt' : 'View repository');
        } else {
          repoLink.hidden = true;
          repoLink.removeAttribute('href');
        }
      }

      hideGallery();
    }

    function openModal(id) {
      if (!window.PROJECTS[id]) return;
      activeId = id;
      render(id);

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      activeId = null;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Keep an open case study in sync when the visitor switches language.
    document.addEventListener('i18n:changed', () => {
      if (activeId) render(activeId);
    });

    function openLightbox() { /* gallery disabled */ }

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }

    function stepLightbox() { /* gallery disabled */ }

    function handleProjectCardClick(e) {
      if (e.target.closest('[data-stop]')) return;
      const card = e.currentTarget;
      openModal(card.dataset.project);
    }

    // Bind on each card so clicks work even when .project-card-body uses pointer-events: none
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
      card.addEventListener('click', handleProjectCardClick);
    });

    modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => stepLightbox(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => stepLightbox(1));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    lightbox.querySelectorAll('[data-close-lightbox]').forEach(el => el.addEventListener('click', closeLightbox));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightbox.classList.contains('open')) closeLightbox();
        else if (modal.classList.contains('open')) closeModal();
      }
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

(function createStars() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.style.cssText = `
      position: absolute;
      width: ${Math.random() * 2.5 + 0.5}px;
      height: ${Math.random() * 2.5 + 0.5}px;
      background: white;
      border-radius: 50%;
      opacity: ${Math.random() * 0.5 + 0.1};
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite;
      animation-delay: ${Math.random() * 4}s;
      pointer-events: none;
    `;
    hero.querySelector('.hero-bg-shapes').appendChild(star);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%,100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.4); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
})();

