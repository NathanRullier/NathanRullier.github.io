/* ════════════════════════════════════════════
   LANGUAGE SWITCHER
════════════════════════════════════════════ */
(function initI18n() {
  const TRANSLATIONS = {
    en: {
      'nav-about':        'About',
      'nav-projects':     'Projects',
      'nav-skills':       'Skills',
      'nav-contact':      'Contact',

      'hero-title':       'Full-Stack Developer',
      'hero-sub':         'I turn conceptual ideas into working prototypes — quickly, cleanly,<br>with just enough robustness to hold in demo and evolve into production.',
      'hero-cta-primary': 'See the work',
      'hero-cta-ghost':   'Get in touch',
      'hero-scroll':      'scroll',

      'about-title': 'About',
      'about-p1':    "Software engineer with a Master's in AI from Polytechnique Montréal, with 3+ years building production back-ends in Node.js, Java, and Python. At Stingray I ship services powering a catalogue of millions of music assets; at Loto-Québec I built Node.js services and Vue/Nuxt interfaces deployed continuously.",
      'about-p2':    "What drives me is the moment a conceptual idea becomes a working prototype — quickly, cleanly, with just enough robustness to hold in demo and evolve into production.",
      'about-p3':    "Multidisciplinary environments, at the crossroads of brand creativity and emerging technology, are exactly where I want to work.",
      'fact-1':      'years pro experience',
      'fact-2':      'Artificial Intelligence',
      'fact-3':      'AI models, 1 app, fully offline',
      'fact-4':      'Close-up magician (yes, really)',

      'projects-title':    'Projects',
      'feat-tag-featured': 'Featured',
      'feat-tag-offline':  'Offline AI',
      'dnd-desc':          'A cross-platform app that listens to spoken tabletop RPG narration and generates images of the scene in real-time — <strong>100% offline, on-device</strong>. Speech is transcribed with whisper.cpp; a local LLM (llama.cpp) detects new locations from the narrative; stable-diffusion.cpp generates an image from a prompt built from the scene description, your chosen art style, and character likenesses.',
      'dnd-b1':            'Three separate on-device AI models coordinated in a real-time pipeline',
      'dnd-b2':            'Runs on Windows, Linux, Android, and iOS — same codebase',
      'dnd-b3':            'Model selector: choose speed vs quality trade-off per device',
      'dnd-b4':            'PhotoMaker integration for consistent character likenesses across scenes',
      'dnd-b5':            'Custom Dart FFI layer binding to stable-diffusion.cpp across all platforms',
      'pipeline-mic':      'Mic Input',
      'pipeline-stt':      'Speech→Text',
      'pipeline-llm':      'Scene Detection',
      'pipeline-sd':       'Image Gen',
      'pipeline-badge':    'All on-device · No cloud',
      'tag-gamedev':       'Game Dev',
      'tag-hackathon':     'Hackathon',
      'card-jean-desc':    'A puzzle game built in 48 hours at the <em>Game Jam de Québec 2024</em> with a friend. Dynamic music that changes with the world-state, hand-crafted art, and a dual-world mechanic that earned praise from the judges for its narrative design.',
      'play-itchio':       'Play on itch.io ↗',
      'tag-genart':        'Generative Art',
      'tag-audio':         'Audio-Reactive',
      'card-noise-desc':   'A full-viewport generative art piece: 900 particles following a Perlin flow field, mouse-attracted, audio-reactive via the Web Audio API. The microphone drives particle speed, field chaos, and trail brightness in real-time.',
      'live-demo':         'Live demo ↗',
      'tag-interactive':   'Interactive',
      'card-3d-title':     '3D Spot-the-Difference',
      'card-3d-desc':      'An interactive web-based media piece — a spot-the-difference game rendered entirely in WebGL. Custom 3D assets, real-time rendering, and synchronized state designed as an experience first, a game second.',
      'tag-physical':      'Physical Computing',
      'tag-wearable':      'Wearable',
      'card-arduino-title':'Interactive Stage Costumes',
      'card-arduino-desc': 'Arduino-driven wearable costumes designed for live performance — lights and effects triggered by movement and sound. Also built a portable Fibonacci sequence clock as a daily-carry object where code meets craft.',
      'tag-robotics':      'Robotics',
      'tag-embedded':      'Embedded',
      'tag-realtime':      'Real-Time',
      'card-robot-title':  'Autonomous Line-Following Robot',
      'card-robot-desc':   'Low-level embedded engineering on ATmega324PA — sensor reading, real-time control loops, and motor actuation without an OS. Built for the CRC Robotics competition.',
      'tag-pro':           'Professional',
      'tag-ai':            'AI Integration',
      'card-pro-title':    'AI-Augmented Media Platform',
      'card-pro-desc':     'At Stingray Group: designed and shipped third-party API integrations, NLP microservices for multilingual content-safety detection, and Python tooling for AI-assisted content analysis — bridging R&amp;D prototypes into production.',

      'skills-title':   'Skills &amp; Tools',
      'sg-creative':    'Creative &amp; Interactive',
      'sg-languages':   'Languages',
      'sg-platforms':   'Platforms &amp; DevOps',
      'skill-prompt':   'Prompt engineering',
      'skill-arduino':  'Arduino / Physical computing',
      'skill-docker':   'Docker / Containerization',
      'skill-linux':    'Linux server environments',
      'skill-api':      'REST API design',

      'extra-title':         'Beyond the screen',
      'extra-magic-title':   'Close-up magician',
      'extra-magic-desc':    'Professional-level sleight of hand performed at private events.',
      'extra-vol-title':     'Volunteer performer',
      'extra-vol-desc':      'Choir and live performances presented in retirement homes.',
      'extra-builder-title': 'Community builder',
      'extra-builder-desc':  'Organized multiple hackathons and collegiate events at Cégep Bois-de-Boulogne. Tutoring at a school for children with intellectual disabilities.',
      'extra-comp-title':    'Competitor',
      'extra-comp-desc':     'Jeux de génie du Québec. CRC Robotics Challenge. Multiple hackathons.',

      'contact-title': "Let's build something.",
      'contact-sub':   'Open to Full-Stack developer roles in Montréal. Bilingual FR/EN.<br>Especially excited about projects where technology serves storytelling.',
    },
    fr: {
      'nav-about':        `À propos`,
      'nav-projects':     `Projets`,
      'nav-skills':       `Compétences`,
      'nav-contact':      `Contact`,

      'hero-title':       `Développeur Full-Stack`,
      'hero-sub':         `Je transforme les idées conceptuelles en prototypes fonctionnels — rapidement, proprement,<br>avec juste assez de robustesse pour tenir en démo et évoluer en production.`,
      'hero-cta-primary': `Voir les projets`,
      'hero-cta-ghost':   `Me contacter`,
      'hero-scroll':      `défiler`,

      'about-title': `À propos`,
      'about-p1':    `Ingénieur logiciel diplômé d'une maîtrise en intelligence artificielle à Polytechnique Montréal, avec plus de 3 ans à bâtir des back-ends de production en Node.js, Java et Python. Chez Stingray, je livre des services qui alimentent un catalogue de millions d'actifs musicaux ; chez Loto-Québec, j'ai conçu des services Node.js et des interfaces Vue/Nuxt déployées en continu.`,
      'about-p2':    `Ce qui m'anime, c'est le moment où une idée conceptuelle devient un prototype fonctionnel : rapidement, proprement, avec juste assez de robustesse pour tenir en démo et évoluer en production.`,
      'about-p3':    `L'environnement multidisciplinaire de Sid Lee, à la croisée de la créativité de marque et des technologies émergentes, correspond exactement au type de travail dans lequel je veux m'inscrire.`,
      'fact-1':      `ans d'expérience pro`,
      'fact-2':      `Intelligence artificielle`,
      'fact-3':      `modèles IA, 1 app, hors ligne`,
      'fact-4':      `Magicien close-up (oui, vraiment)`,

      'projects-title':    `Projets`,
      'feat-tag-featured': `En vedette`,
      'feat-tag-offline':  `IA hors ligne`,
      'dnd-desc':          `Une application multiplateforme qui écoute la narration d'une partie de jeu de rôle et génère des images de la scène en temps réel — <strong>100 % hors ligne, sur l'appareil</strong>. La parole est transcrite avec whisper.cpp ; un LLM local (llama.cpp) détecte les nouveaux lieux ; stable-diffusion.cpp génère une image à partir d'un prompt construit depuis la description de la scène, le style artistique choisi et les personnages.`,
      'dnd-b1':            `Trois modèles d'IA sur appareil coordonnés dans un pipeline temps réel`,
      'dnd-b2':            `Fonctionne sur Windows, Linux, Android et iOS — même base de code`,
      'dnd-b3':            `Sélecteur de modèles : choisir le compromis vitesse/qualité par appareil`,
      'dnd-b4':            `Intégration PhotoMaker pour des likenesses cohérentes entre les scènes`,
      'dnd-b5':            `Couche Dart FFI sur mesure reliant stable-diffusion.cpp à toutes les plateformes`,
      'pipeline-mic':      `Micro`,
      'pipeline-stt':      `Parole→Texte`,
      'pipeline-llm':      `Détection de scène`,
      'pipeline-sd':       `Génération d'image`,
      'pipeline-badge':    `Sur l'appareil · Sans nuage`,
      'tag-gamedev':       `Jeu vidéo`,
      'tag-hackathon':     `Hackathon`,
      'card-jean-desc':    `Un jeu de puzzle réalisé en 48 h au <em>Game Jam de Québec 2024</em> avec un ami. Une musique dynamique qui évolue avec l'état du monde, des illustrations faites à la main et une mécanique de double-monde saluée par les juges pour sa conception narrative.`,
      'play-itchio':       `Jouer sur itch.io ↗`,
      'tag-genart':        `Art génératif`,
      'tag-audio':         `Réactif au son`,
      'card-noise-desc':   `Une pièce d'art génératif plein écran : 900 particules suivant un champ de flux Perlin, attirées par la souris et réactives à l'audio via Web Audio API. Le microphone pilote la vitesse, le chaos du champ et la luminosité des traînées en temps réel.`,
      'live-demo':         `Démo en ligne ↗`,
      'tag-interactive':   `Interactif`,
      'card-3d-title':     `Jeu des différences 3D`,
      'card-3d-desc':      `Une pièce de média interactif web — un jeu des différences rendu entièrement en WebGL. Assets 3D personnalisés, rendu temps réel et synchronisation d'état conçus comme une expérience avant tout.`,
      'tag-physical':      `Informatique physique`,
      'tag-wearable':      `Portable`,
      'card-arduino-title':`Costumes de scène interactifs`,
      'card-arduino-desc': `Costumes portables pilotés par Arduino pour la scène live — lumières et effets déclenchés par le mouvement et le son. J'ai aussi fabriqué une horloge de Fibonacci portable, objet du quotidien où le code rencontre l'artisanat.`,
      'tag-robotics':      `Robotique`,
      'tag-embedded':      `Embarqué`,
      'tag-realtime':      `Temps réel`,
      'card-robot-title':  `Robot suiveur de ligne autonome`,
      'card-robot-desc':   `Ingénierie embarquée bas niveau sur ATmega324PA — lecture de capteurs, boucles de contrôle temps réel et actionnement moteur sans OS. Réalisé pour la compétition CRC Robotics.`,
      'tag-pro':           `Professionnel`,
      'tag-ai':            `Intégration IA`,
      'card-pro-title':    `Plateforme média augmentée par l'IA`,
      'card-pro-desc':     `Chez Stingray Group : conception et livraison d'intégrations d'API tierces, de microservices NLP pour la détection de contenu multilingue, et d'outils Python pour l'analyse de contenu assistée par IA — du prototype R&amp;D à la production.`,

      'skills-title':   `Compétences et outils`,
      'sg-creative':    `Créatif &amp; interactif`,
      'sg-languages':   `Langages`,
      'sg-platforms':   `Plateformes &amp; DevOps`,
      'skill-prompt':   `Ingénierie de prompts`,
      'skill-arduino':  `Arduino / Informatique physique`,
      'skill-docker':   `Docker / Conteneurisation`,
      'skill-linux':    `Environnements serveur Linux`,
      'skill-api':      `Conception d'API REST`,

      'extra-title':         `Au-delà de l'écran`,
      'extra-magic-title':   `Magicien close-up`,
      'extra-magic-desc':    `Prestidigitation de niveau professionnel lors d'événements privés.`,
      'extra-vol-title':     `Bénévole et performeur`,
      'extra-vol-desc':      `Chorale et spectacles vivants présentés en résidences pour personnes âgées.`,
      'extra-builder-title': `Bâtisseur de communauté`,
      'extra-builder-desc':  `Organisation de hackathons et d'événements étudiants au Cégep Bois-de-Boulogne. Tutorat dans une école pour enfants ayant une déficience intellectuelle.`,
      'extra-comp-title':    `Compétiteur`,
      'extra-comp-desc':     `Jeux de génie du Québec. Défi CRC Robotique. Multiples hackathons.`,

      'contact-title': `Construisons quelque chose.`,
      'contact-sub':   `Ouvert aux postes de développeur Full-Stack à Montréal. Bilingue FR/EN.<br>Particulièrement motivé par les projets où la technologie sert la narration.`,
    },
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLang(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    // text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // innerHTML (for elements with <br>, <strong>, <em>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Update toggle active state
    document.querySelectorAll('.lang-opt').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'fr' : 'en');
  });

  // Init on load
  applyLang(currentLang);
})();


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
