// Script para animações e interações
document.addEventListener('DOMContentLoaded', function() {
    // IntersectionObserver para fade-in on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observar elementos com classe .reveal
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Scroll suave para links internos (fallback se CSS não funcionar)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de entrada para hero image
    const heroImage = document.querySelector('.hero__image img');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 100);
    }

    // Ler mais / Ler menos em cards
    document.querySelectorAll('.card__toggle').forEach(button => {
        button.addEventListener('click', () => {
            const description = button.previousElementSibling;
            if (!description) return;

            const isExpanded = description.classList.toggle('card__clamped');
            button.textContent = isExpanded ? 'Ler mais...' : 'Ler menos';
        });
    });

    // Menu mobile
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileMenu = document.querySelector('.header__nav--mobile');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('header__nav--open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('header__nav--open');
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            });
        });
    }
});