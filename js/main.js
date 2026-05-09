/* ============================================================
   LAEMU — Main JavaScript
   ============================================================ */

// ---- NAVIGATION ----
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav__mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-answer').classList.remove('open');
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ---- FILTER BUTTONS ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.filters');
    if (!group) return;
    group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ---- PARALLAX ----
const parallaxSections = document.querySelectorAll('.parallax-bg');
if (parallaxSections.length) {
  window.addEventListener('scroll', () => {
    parallaxSections.forEach(bg => {
      const parent = bg.closest('.parallax-section');
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        bg.style.transform = `translateY(${progress * 12}%)`;
      }
    });
  }, { passive: true });
}

// ---- HERO BG SUBTLE ZOOM ----
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  setTimeout(() => { heroBg.style.transform = 'scale(1.04)'; }, 100);
}

// ---- TICKER CLONE ----
document.querySelectorAll('.ticker__track').forEach(track => {
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
});

// ---- COUNTER ANIMATION ----
function animateCounter(el, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();
  const isDecimal = target % 1 !== 0;

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * eased;
    el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString('de-CH');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = true;
      const target = parseFloat(entry.target.dataset.target || entry.target.textContent.replace(/[^0-9.]/g, ''));
      if (!isNaN(target)) animateCounter(entry.target, target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__num[data-target]').forEach(el => counterObserver.observe(el));

// ---- PROGRESS BARS ----
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.progress-fill');
      if (fill) fill.style.width = fill.dataset.width || '0%';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-bar').forEach(bar => progressObserver.observe(bar));

// ---- VIDEO BACKGROUND ----
const videoBg = document.querySelector('.hero-video');
if (videoBg) {
  videoBg.play().catch(() => {});
}

// ---- SMOOTH SECTION REVEAL FOR HERO CONTENT ----
window.addEventListener('load', () => {
  document.querySelectorAll('.hero__content > *').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity .8s ease ${i * .15}s, transform .8s ease ${i * .15}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 150);
  });
});

// ---- ACTIVE NAV LINK ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (href === currentPage || (currentPage === '' && href === 'index.html') ||
      (currentPage === 'index.html' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ---- MEMBER SIDEBAR ACTIVE ----
document.querySelectorAll('.sidebar__link').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar__link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ---- TOAST NOTIFICATION ----
window.showToast = function(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:2rem; right:2rem; z-index:9999;
    background:${type === 'success' ? '#1A1814' : '#8B6F47'}; color:#F7F2EC;
    padding:.875rem 1.5rem; border-radius:12px;
    font-family:Manrope,sans-serif; font-size:.875rem; font-weight:600;
    box-shadow:0 8px 32px rgba(0,0,0,.2);
    transform:translateY(20px); opacity:0;
    transition:.3s cubic-bezier(.4,0,.2,1);
    max-width:320px;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });
  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// ---- FORM SUBMIT DEMO ----
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Wird gesendet...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Gesendet!';
      window.showToast('Danke! Wir melden uns bald.');
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
    }, 1200);
  });
});

// ---- IMAGE PLACEHOLDER FALLBACK ----
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || 800;
    canvas.height = img.naturalHeight || 600;
    const ctx = canvas.getContext('2d');
    const colors = ['#E8DDD0','#D4C5B0','#C4A882','#EEE8DF'];
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    img.src = canvas.toDataURL();
  });
});
