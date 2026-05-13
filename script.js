/* ════════════════════════════════════════════
   GENERATIVE PARTICLE BACKGROUND
════════════════════════════════════════════ */
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles, animId;

  const COLORS = ['#7c3aff', '#00d4ff', '#ff3a6e'];
  const COUNT = 90;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x: rand(0, W),
      y: rand(0, H),
      vx: rand(-0.3, 0.3),
      vy: rand(-0.3, 0.3),
      r: rand(1, 2.5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: rand(0.15, 0.55),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, createParticle);
  }

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function drawConnections() {
    const CONNECT_DIST = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    // Subtle mouse-attraction glow
    const grd = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
    grd.addColorStop(0, 'rgba(124,58,255,0.04)');
    grd.addColorStop(1, 'rgba(124,58,255,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    drawConnections();

    particles.forEach(p => {
      // Gentle mouse repulsion
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * 0.4;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Dampen velocity
      p.vx *= 0.98;
      p.vy *= 0.98;

      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    animId = requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    tick();
  });

  init();
  tick();
})();


/* ════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════ */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal], .project-featured').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 5) * 80}ms`;
    observer.observe(el);
  });
})();


/* ════════════════════════════════════════════
   NAV ACTIVE STATE
════════════════════════════════════════════ */
(function initNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActive() {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${sec.id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();


/* ════════════════════════════════════════════
   PIPELINE NODE ANIMATION
════════════════════════════════════════════ */
(function initPipeline() {
  const nodes = document.querySelectorAll('.pipeline-node');
  if (!nodes.length) return;

  let current = 0;
  function pulse() {
    nodes.forEach(n => n.classList.remove('active-node'));
    nodes[current].classList.add('active-node');
    current = (current + 1) % nodes.length;
  }

  // Inject CSS for active node
  const style = document.createElement('style');
  style.textContent = `
    .pipeline-node.active-node {
      border-color: rgba(124,58,255,0.7) !important;
      background: rgba(124,58,255,0.1) !important;
    }
    .pipeline-node.active-node .node-icon {
      background: rgba(124,58,255,0.35) !important;
      box-shadow: 0 0 12px rgba(124,58,255,0.5);
    }
    .nav-links a.active { color: #fff !important; }
  `;
  document.head.appendChild(style);

  setInterval(pulse, 900);
})();


/* ════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL (fallback for older browsers)
════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
