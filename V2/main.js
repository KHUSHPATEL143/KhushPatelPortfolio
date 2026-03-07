/* ═══════════════════════════════════════════════════════════
   KHUSH PATEL — PORTFOLIO V2  ·  GSAP Animations
   ═══════════════════════════════════════════════════════════ */

// ── Typed text ──────────────────────────────────────────
const roles = [
    'Full Stack Developer.',
    'Flutter Desktop Builder.',
    'Backend Engineer.',
    'UI/UX Enthusiast.',
    'Problem Solver.',
];

class TypeWriter {
    constructor(el, words, speed = 80, del = 45, pause = 2200) {
        if (el._typewriterTimeout) clearTimeout(el._typewriterTimeout);
        this.el = el; this.words = words;
        this.speed = speed; this.del = del; this.pause = pause;
        this.i = 0; this.j = 0; this.deleting = false;
        this.tick();
    }
    tick() {
        if (!this.el.isConnected) return;
        const word = this.words[this.i];
        this.j += this.deleting ? -1 : 1;
        this.el.textContent = word.substring(0, this.j);
        let wait = this.deleting ? this.del : this.speed;
        if (!this.deleting && this.j === word.length) { wait = this.pause; this.deleting = true; }
        else if (this.deleting && this.j === 0) { this.deleting = false; this.i = (this.i + 1) % this.words.length; wait = 400; }
        this.el._typewriterTimeout = setTimeout(() => this.tick(), wait);
    }
}

// ── Canvas particles ────────────────────────────────────
function initCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }

    class Dot {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.r = Math.random() * 1.8 + 0.4;
            this.dx = (Math.random() - 0.5) * 0.3;
            this.dy = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.4 + 0.1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139,92,246,${this.alpha})`;
            ctx.fill();
        }
        update() {
            this.x += this.dx; this.y += this.dy;
            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
        }
    }

    function init() {
        resize();
        particles = [];
        const count = Math.min(60, Math.floor(w * h / 12000));
        for (let i = 0; i < count; i++) particles.push(new Dot());
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);

        // Draw faint connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(139,92,246,${0.04 * (1 - dist / 120)})`;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', init);
    init();
    loop();
}

// ── Navbar ──────────────────────────────────────────────
function initNavbar() {
    const nav = document.getElementById('navbar');
    const items = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section, .hero');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);

        let cur = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 140) cur = s.id;
        });
        items.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${cur}`);
        });
    });

    // Smooth scroll with GSAP if available
    items.forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            if (window.gsap) {
                gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 80 }, ease: 'power3.inOut' });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            document.getElementById('navMenu').classList.remove('active');
            document.getElementById('burger').classList.remove('active');
        });
    });

    // Logo scroll to top
    document.getElementById('logoLink')?.addEventListener('click', e => {
        e.preventDefault();
        if (window.gsap) {
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// ── Burger ──────────────────────────────────────────────
function initBurger() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('navMenu');
    burger?.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    document.addEventListener('click', e => {
        if (!e.target.closest('.nav-inner')) {
            burger?.classList.remove('active');
            menu?.classList.remove('active');
        }
    });
}

// ── Project card mouse glow ─────────────────────────────
function initCardGlow() {
    document.querySelectorAll('.proj-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
            card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
        });
    });
}

// ═══════════════════════════════════════════════════════════
// GSAP ANIMATIONS
// ═══════════════════════════════════════════════════════════

function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger on layout shifts (e.g. font load)
    if (document.fonts) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
    window.addEventListener('load', () => ScrollTrigger.refresh());
    // Auto refresh periodically in case of slow renders
    setTimeout(() => ScrollTrigger.refresh(), 1000);
    setTimeout(() => ScrollTrigger.refresh(), 3000);

    // ── Hero entrance ─────────────────────────────────────
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });
    heroTl
        .from('.hero-tag', { y: 30, opacity: 0 })
        .from('.line-1', { y: 80, opacity: 0, skewY: 4 }, '-=0.7')
        .from('.line-2', { y: 80, opacity: 0, skewY: 4 }, '-=0.8')
        .from('.hero-role', { y: 20, opacity: 0 }, '-=0.6')
        .from('.hero-bio', { y: 20, opacity: 0 }, '-=0.7')
        .from('.hero-actions', { y: 20, opacity: 0 }, '-=0.7')
        .from('.metric', { y: 30, opacity: 0, stagger: 0.12 }, '-=0.5')
        .from('.scroll-cue', { opacity: 0 }, '-=0.3');

    // ── Hero parallax on scroll ───────────────────────────
    gsap.to('.hero-body', {
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
        y: -100, opacity: 0.3,
    });
    gsap.to('.hero-gradient', {
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
        y: 150, scale: 1.3, opacity: 0,
    });

    // ── Section headings ──────────────────────────────────
    gsap.utils.toArray('.sec-heading').forEach(h => {
        gsap.from(h, {
            scrollTrigger: { trigger: h, start: 'top 88%' },
            x: -50, opacity: 0, duration: 0.7, ease: 'power3.out',
        });
    });

    // ── About ─────────────────────────────────────────────
    gsap.from('.about-prose p', {
        scrollTrigger: { trigger: '.about-prose', start: 'top 82%' },
        y: 30, opacity: 0, stagger: 0.15, duration: 0.6, ease: 'power2.out',
    });
    gsap.from('.terminal-card', {
        scrollTrigger: { trigger: '.terminal-card', start: 'top 82%' },
        x: 60, rotateY: -8, opacity: 0, duration: 0.9, ease: 'power3.out',
    });

    // ── Skills columns ────────────────────────────────────
    gsap.from('.skill-col', {
        scrollTrigger: { trigger: '.skills-cols', start: 'top 82%' },
        y: 50, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
    });
    document.querySelectorAll('.skill-col').forEach(col => {
        gsap.from(col.querySelectorAll('.pill'), {
            scrollTrigger: { trigger: col, start: 'top 80%' },
            scale: 0.5, opacity: 0, stagger: 0.04, duration: 0.35, ease: 'back.out(1.7)',
        });
    });

    // ── Project cards ─────────────────────────────────────
    gsap.from('.proj-card', {
        scrollTrigger: { trigger: '.project-grid', start: 'top 82%' },
        y: 60, rotateX: 4, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
    });

    // ── Timeline items ────────────────────────────────────
    gsap.utils.toArray('.tl-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: 'top 88%' },
            x: -40, opacity: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
        });
    });

    // ── Contact ───────────────────────────────────────────
    gsap.from('.contact-intro', {
        scrollTrigger: { trigger: '.contact-intro', start: 'top 88%' },
        y: 20, opacity: 0, duration: 0.6,
    });
    gsap.from('.c-card', {
        scrollTrigger: { trigger: '.contact-grid', start: 'top 88%' },
        y: 30, scale: 0.92, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.3)',
    });

    // ── Animated counters ─────────────────────────────────
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        ScrollTrigger.create({
            trigger: el, start: 'top 92%', once: true,
            onEnter: () => {
                gsap.to({ v: 0 }, {
                    v: target, duration: 1.4, ease: 'power2.out',
                    onUpdate() { el.textContent = Math.round(this.targets()[0].v) + '+'; },
                });
            },
        });
    });

    // ── 3D tilt on hover (cards) ──────────────────────────
    const tiltCards = document.querySelectorAll('.proj-card, .skill-col, .tl-card, .c-card, .terminal-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const cx = r.width / 2, cy = r.height / 2;
            const x = e.clientX - r.left, y = e.clientY - r.top;
            const rx = ((y - cy) / cy) * -5;
            const ry = ((x - cx) / cx) * 5;
            gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.35, ease: 'power2.out', transformPerspective: 800 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
        });
    });

    // ── Magnetic buttons ──────────────────────────────────
    document.querySelectorAll('.btn-glow, .btn-ghost, .resume-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            const dx = (e.clientX - r.left - r.width / 2) * 0.15;
            const dy = (e.clientY - r.top - r.height / 2) * 0.15;
            gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
        });
    });
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    // Typed text
    const el = document.getElementById('roleTyped');
    if (el) new TypeWriter(el, roles);

    // Canvas particles
    initCanvas();

    // Nav, burger, glow
    initNavbar();
    initBurger();
    initCardGlow();

    // GSAP (only if loaded)
    if (window.gsap && window.ScrollTrigger) {
        initGSAP();
    } else {
        // Retry after CDN loads
        const wait = setInterval(() => {
            if (window.gsap && window.ScrollTrigger) {
                clearInterval(wait);
                initGSAP();
            }
        }, 100);
        // Give up after 5s — everything stays visible without GSAP
        setTimeout(() => clearInterval(wait), 5000);
    }
});
