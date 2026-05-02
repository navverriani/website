/* ============================================
   DAVYD NAVERIANI — PORTFOLIO JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Nav scroll effect ---
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    const onScroll = () => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 40);
        lastScroll = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile nav ---
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');

    const closeMenu = () => {
        links.classList.remove('open');
        overlay.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        overlay.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    overlay.addEventListener('click', closeMenu);
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // --- Fade-in on scroll (Intersection Observer) ---
    const fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
        );
        fadeEls.forEach(el => observer.observe(el));
    }

    // --- Staggered fade-in for list items ---
    const staggerContainers = document.querySelectorAll('[data-stagger]');
    staggerContainers.forEach(container => {
        const children = container.children;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        Array.from(children).forEach((child, i) => {
                            child.style.transitionDelay = `${i * 70}ms`;
                            child.classList.add('visible');
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.04 }
        );
        observer.observe(container);
    });

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    const activateLink = () => {
        const scrollY = window.scrollY + 150;
        let found = false;
        // Walk sections bottom-to-top so the last matching one wins
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (!found && scrollY >= top && scrollY < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (link) link.classList.add('active');
                found = true;
            }
        }
        if (!found) navLinks.forEach(l => l.classList.remove('active'));
    };
    window.addEventListener('scroll', activateLink, { passive: true });

    // --- News toggle ---
    const newsToggle = document.getElementById('news-toggle');
    if (newsToggle) {
        const newsList = newsToggle.previousElementSibling;
        const toggleText = newsToggle.querySelector('.news-toggle-text');

        newsToggle.addEventListener('click', () => {
            const expanded = newsList.classList.toggle('expanded');
            newsToggle.classList.toggle('expanded', expanded);
            newsToggle.setAttribute('aria-expanded', String(expanded));
            toggleText.textContent = expanded ? 'Show less' : 'Show more';

            // Trigger fade-in for newly visible items
            if (expanded) {
                newsList.querySelectorAll('.news-hidden').forEach((item, i) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    item.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        });
                    });
                });
            }
        });
    }

    // --- Canvas star field ---
    const starCanvas = document.getElementById('star-canvas');
    if (starCanvas) {
        const ctx = starCanvas.getContext('2d');
        const stars = [];

        const resizeCanvas = () => {
            starCanvas.width = window.innerWidth;
            starCanvas.height = window.innerHeight;
        };

        // Generate star data once
        for (let i = 0; i < 300; i++) {
            const r = Math.random();
            stars.push({
                x: Math.random(),
                y: Math.pow(Math.random(), 0.65) * 0.75,
                size: r < 0.7 ? 0.5 + Math.random() * 0.5 : r < 0.92 ? 1 + Math.random() * 0.8 : 1.8 + Math.random() * 1.2,
                phase: Math.random() * Math.PI * 2,
                speed: 0.3 + Math.random() * 0.8,
                baseAlpha: 0.3 + Math.random() * 0.7
            });
        }

        const drawStars = (time) => {
            if (document.documentElement.getAttribute('data-theme') !== 'dark') {
                ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
                requestAnimationFrame(drawStars);
                return;
            }

            ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);

            for (const star of stars) {
                const twinkle = Math.sin(time * 0.001 * star.speed + star.phase);
                const alpha = star.baseAlpha * (0.4 + 0.6 * (0.5 + 0.5 * twinkle));
                const x = star.x * starCanvas.width;
                const y = star.y * starCanvas.height;

                // Glow for larger stars
                if (star.size > 1.2) {
                    const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4);
                    glow.addColorStop(0, 'rgba(255,255,255,' + (alpha * 0.35) + ')');
                    glow.addColorStop(1, 'transparent');
                    ctx.beginPath();
                    ctx.arc(x, y, star.size * 4, 0, Math.PI * 2);
                    ctx.fillStyle = glow;
                    ctx.fill();
                }

                // Star core
                ctx.beginPath();
                ctx.arc(x, y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
                ctx.fill();
            }

            requestAnimationFrame(drawStars);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        requestAnimationFrame(drawStars);
    }

    // --- Theme toggle ---
    const themeToggle = document.getElementById('theme-toggle');

    // Remove no-transition class after initial paint
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.documentElement.classList.remove('no-transition');
        });
    });

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- Hero entrance animation ---
    const heroEls = document.querySelectorAll('.hero-label, .hero-name, .hero-tagline, .hero-bio, .social-links');
    heroEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${i * 0.1 + 0.15}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1 + 0.15}s`;
        // Trigger on next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    });
});
