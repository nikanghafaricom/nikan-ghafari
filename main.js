// ===== MAIN JS =====

// ---- AUTO DARK MODE (System Preference) ----
function initTheme() {
  const stored = localStorage.getItem('ng_theme');
  if (stored) {
    applyTheme(stored);
  } else {
    // Auto detect
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('ng_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  const icon = document.getElementById('themeIcon');
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    if (icon) { icon.className = 'fa fa-sun'; }
  } else {
    document.body.classList.remove('light-mode');
    if (icon) { icon.className = 'fa fa-moon'; }
  }
}

document.getElementById('themeBtn').addEventListener('click', () => {
  const isLight = document.body.classList.contains('light-mode');
  const next = isLight ? 'dark' : 'light';
  localStorage.setItem('ng_theme', next);
  applyTheme(next);
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');

function openNav() {
  navDrawer.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navDrawer.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

// Close on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

// ---- LANGUAGE DROPDOWN ----
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
  langDropdown.classList.remove('open');
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('section, .venture-card, .contact-card, .about-grid, .chat-box');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => observer.observe(el));

// ---- HERO PARTICLES ----
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.setProperty('--dur', (3 + Math.random() * 4) + 's');
    p.style.setProperty('--delay', (Math.random() * 5) + 's');
    container.appendChild(p);
  }
}

// ---- VIDEO SECTION ----
function initVideo() {
  const video = document.getElementById('mainVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  const controls = document.getElementById('videoControls');
  const soundBtn = document.getElementById('soundBtn');
  const soundIcon = document.getElementById('soundIcon');

  // Check if video src is set (via admin panel)
  const savedVideo = localStorage.getItem('ng_video_url');
  if (savedVideo) {
    video.querySelector('source').src = savedVideo;
    video.load();
    placeholder.style.display = 'none';
    video.style.display = 'block';
    controls.style.display = 'flex';
    video.play().catch(() => {});
  }

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      soundIcon.className = video.muted ? 'fa fa-volume-mute' : 'fa fa-volume-high';
      soundBtn.querySelector('span').textContent = video.muted ? 'Tap to unmute' : 'Mute';
    });
  }
}

// ---- SMOOTH SCROLL (for anchor links) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- DIRECT CHAT URL ----
// If URL ends with #chat, scroll there automatically
if (window.location.hash === '#chat') {
  setTimeout(() => {
    const chatSection = document.getElementById('chat');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  createParticles();
  initVideo();
});

// Also init theme immediately to avoid flash
initTheme();
