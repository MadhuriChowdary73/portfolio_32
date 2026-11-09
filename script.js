/* =================================================================
   MADHURI CHOWDARY — PORTFOLIO  ·  script.js
   =================================================================
   GSAP + ScrollTrigger animations, interactions, and utilities.

   ★  EDITABLE CONTENT
   All text content lives directly in index.html (clearly marked).
   Links, project hrefs, and social URLs are also in the HTML.
   Colors and design tokens are in style.css :root.
   ================================================================= */

/* -----------------------------------------------------------------
   0. REGISTER GSAP PLUGINS
   ----------------------------------------------------------------- */
gsap.registerPlugin(ScrollTrigger);

/* -----------------------------------------------------------------
   1. PREFERS-REDUCED-MOTION CHECK
   ----------------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -----------------------------------------------------------------
   2. INTRO TYPING ANIMATION
   ----------------------------------------------------------------- */
(function introTyping() {
  const overlay = document.getElementById('intro-overlay');
  const container = document.getElementById('intro-typing');
  const cursorEl = document.getElementById('intro-cursor');
  if (!overlay || !container) return;

  if (prefersReducedMotion) {
    overlay.style.display = 'none';
    return;
  }

  // Build letter spans
  const name = 'Madhuri Chowdary';
  name.split('').forEach(char => {
    if (char === ' ') {
      const space = document.createElement('span');
      space.className = 'intro-space';
      container.appendChild(space);
    } else {
      const span = document.createElement('span');
      span.className = 'intro-letter';
      span.textContent = char;
      container.appendChild(span);
    }
  });

  const letters = container.querySelectorAll('.intro-letter');

  const tl = gsap.timeline({
    onComplete: () => {
      overlay.style.display = 'none';
      heroReveal();
    }
  });

  // 1. Type letters one by one
  tl.to(letters, {
    opacity: 1,
    y: 0,
    duration: 0.06,
    stagger: 0.07,
    ease: 'power2.out',
    delay: 0.4
  })
  // 2. Hold the name on screen
  .to({}, { duration: 0.6 })
  // 3. Hide cursor
  .to(cursorEl, {
    opacity: 0,
    duration: 0.15
  })
  // 4. Slide everything up
  .to(overlay, {
    yPercent: -100,
    duration: 0.7,
    ease: 'power3.inOut'
  });
})();

/* -----------------------------------------------------------------
   3. HERO REVEAL — word-by-word stagger
   ----------------------------------------------------------------- */
function heroReveal() {
  if (prefersReducedMotion) return;

  const words = document.querySelectorAll('.hero-title .word');
  const tagline = document.querySelector('.hero-tagline');
  const btns = document.querySelector('.hero-btns');
  const social = document.querySelector('.hero-social');
  const role = document.querySelector('.hero-role');

  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.4)' } });

  tl.from(words, {
    yPercent: 120,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15
  })
  .from(role, { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
  .from(tagline, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
  .from(btns, { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')
  .from(social, { y: 15, opacity: 0, duration: 0.4 }, '-=0.2');
}

// If reduced motion, just make everything visible immediately
if (prefersReducedMotion) {
  document.querySelectorAll('.card-reveal, .slide-in-left').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

/* -----------------------------------------------------------------
   4. ROTATING ROLE LINE
   ----------------------------------------------------------------- */
(function roleCarousel() {
  const items = document.querySelectorAll('.role-item');
  if (items.length === 0) return;

  let current = 0;

  setInterval(() => {
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, 2200);
})();

/* -----------------------------------------------------------------
   5. FLOATING SHAPES — gentle bob
   ----------------------------------------------------------------- */
if (!prefersReducedMotion) {
  gsap.utils.toArray('.floating-shape').forEach((shape, i) => {
    gsap.to(shape, {
      y: '+=12',
      duration: 2 + i * 0.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
}

/* -----------------------------------------------------------------
   6. SCROLL PROGRESS BAR
   ----------------------------------------------------------------- */
(function scrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }, { passive: true });
})();

/* -----------------------------------------------------------------
   7. SCROLL-TRIGGERED REVEALS (cards & titles)
   ----------------------------------------------------------------- */
if (!prefersReducedMotion) {
  // Card reveals — pop in with rotation and back.out
  gsap.utils.toArray('.card-reveal').forEach(card => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.7,
      ease: 'back.out(1.4)'
    });
  });

  // Section title slide-in-left
  gsap.utils.toArray('.slide-in-left').forEach(title => {
    gsap.to(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power3.out'
    });
  });

  // Chip stagger animation
  gsap.utils.toArray('.skill-group').forEach(group => {
    const chips = group.querySelectorAll('.chip-stagger');
    gsap.from(chips, {
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: 'back.out(1.2)'
    });
  });
}

/* -----------------------------------------------------------------
   8. NAVBAR — active link highlight + scroll shadow
   ----------------------------------------------------------------- */
(function navHighlight() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    const scrollY = window.scrollY;

    // Navbar shadow on scroll
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }

    // Active link
    const checkY = scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (checkY >= top && checkY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* -----------------------------------------------------------------
   9. MOBILE MENU
   ----------------------------------------------------------------- */
(function mobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  const links = menu.querySelectorAll('.mobile-link');

  function toggle() {
    const isOpen = hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggle);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('open')) toggle();
    });
  });
})();

/* -----------------------------------------------------------------
   10. COPY EMAIL BUTTON
   ----------------------------------------------------------------- */
(function copyEmail() {
  const btn = document.getElementById('copy-email');
  if (!btn) return;

  const email = btn.dataset.email;

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 1600);
    }).catch(() => {
      // Fallback: open mailto
      window.location.href = 'mailto:' + email;
    });
  });
})();

/* -----------------------------------------------------------------
   11. BACK TO TOP
   ----------------------------------------------------------------- */
(function backToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* -----------------------------------------------------------------
   12. MAGNETIC BUTTONS
   ----------------------------------------------------------------- */
(function magneticButtons() {
  // Only on desktop (non-touch)
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const magnets = document.querySelectorAll('.magnetic');

  magnets.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
    });
  });
})();

/* -----------------------------------------------------------------
   13. PROJECT CARD TILT (subtle, desktop only)
   ----------------------------------------------------------------- */
(function cardTilt() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateX: -y * 4,
        rotateY: x * 4,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 800
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });
})();

/* -----------------------------------------------------------------
   14. SMOOTH SCROLL FOR ANCHOR LINKS
   ----------------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

