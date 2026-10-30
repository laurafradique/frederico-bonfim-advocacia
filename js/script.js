// Script para animações e interações
document.addEventListener('DOMContentLoaded', function() {
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // IntersectionObserver para fade-in on scroll
    const revealElements = document.querySelectorAll('.reveal');

    if (reduzirMovimento || !('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -10% 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // Menu mobile
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileMenu = document.querySelector('.header__nav--mobile');

    if (menuToggle && mobileMenu) {
        const isMenuOpen = () => mobileMenu.classList.contains('header__nav--open');

        const setMenu = (isOpen) => {
            mobileMenu.classList.toggle('header__nav--open', isOpen);
            mobileMenu.setAttribute('aria-hidden', String(!isOpen));
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        };

        menuToggle.addEventListener('click', () => setMenu(!isMenuOpen()));

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenu(false));
        });

        // Esc fecha o menu e devolve o foco ao botão
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen()) {
                setMenu(false);
                menuToggle.focus();
            }
        });

        // Clique fora fecha o menu
        document.addEventListener('click', (e) => {
            if (isMenuOpen() && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                setMenu(false);
            }
        });
    }

    // Botão flutuante de WhatsApp: aparece depois do hero e some no rodapé
    const whatsappFloat = document.querySelector('.whatsapp-float');
    const ocultarEm = document.querySelectorAll('#sobre, .footer');

    if (whatsappFloat && 'IntersectionObserver' in window) {
        const visiveis = new Set();
        const floatObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visiveis.add(entry.target);
                } else {
                    visiveis.delete(entry.target);
                }
            });
            whatsappFloat.classList.toggle('whatsapp-float--visible', visiveis.size === 0);
        });

        ocultarEm.forEach(el => floatObserver.observe(el));
    }

    // Dúvidas frequentes (duvidas.html)
    const faqItems = document.querySelectorAll('.faq__item');

    if (faqItems.length) {
        // Abre a pergunta indicada no link: duvidas.html#id ou duvidas.html?pergunta=id
        const abrirPerguntaDoLink = () => {
            const id = new URLSearchParams(window.location.search).get('pergunta') || window.location.hash.slice(1);
            if (!id) return;

            const item = document.getElementById(id);
            if (item && item.classList.contains('faq__item')) {
                item.open = true;
                item.scrollIntoView({ behavior: reduzirMovimento ? 'auto' : 'smooth', block: 'start' });
                item.querySelector('.faq__question').focus({ preventScroll: true });
            }
        };

        abrirPerguntaDoLink();
        window.addEventListener('hashchange', abrirPerguntaDoLink);

        // Ao abrir uma pergunta, o endereço passa a apontar para ela (facilita copiar o link)
        faqItems.forEach(item => {
            item.addEventListener('toggle', () => {
                if (item.open && window.location.hash !== '#' + item.id) {
                    history.replaceState(null, '', '#' + item.id);
                }
            });
        });

        // Dados estruturados FAQPage para o Google, gerados a partir das perguntas da página
        const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: Array.from(faqItems).map(item => ({
                '@type': 'Question',
                name: item.querySelector('.faq__question').textContent.trim(),
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.querySelector('.faq__answer').textContent.trim().replace(/\s+/g, ' ')
                }
            }))
        };
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(schemaScript);
    }

    // Aviso de cookies (informativo): aparece até a pessoa clicar em "Entendi"
    const CHAVE_AVISO_COOKIES = 'fb-aviso-cookies';
    let avisoJaVisto = false;
    try {
        avisoJaVisto = localStorage.getItem(CHAVE_AVISO_COOKIES) === 'ok';
    } catch (e) {
        // Navegador sem acesso ao armazenamento: mostra o aviso normalmente
    }

    if (!avisoJaVisto) {
        const aviso = document.createElement('div');
        aviso.className = 'cookie-notice';
        aviso.setAttribute('role', 'region');
        aviso.setAttribute('aria-label', 'Aviso de cookies');
        aviso.innerHTML =
            '<p class="cookie-notice__text">Este site utiliza cookies para medir o desempenho dos anúncios e melhorar a sua experiência. ' +
            'Saiba mais na <a href="politica-de-privacidade.html">Política de Privacidade</a>.</p>' +
            '<button type="button" class="btn btn--primary cookie-notice__button">Entendi</button>';
        document.body.appendChild(aviso);

        aviso.querySelector('.cookie-notice__button').addEventListener('click', () => {
            try {
                localStorage.setItem(CHAVE_AVISO_COOKIES, 'ok');
            } catch (e) {
                // Sem armazenamento: o aviso some só nesta visita
            }
            aviso.remove();
        });
    }

    // Ano atual no rodapé
    const anoAtual = document.querySelector('[data-ano-atual]');
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }
});
