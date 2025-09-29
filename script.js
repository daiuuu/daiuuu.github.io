document.addEventListener('DOMContentLoaded', function() {

    // LÓGICA MENÚ HAMBURGUESA
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav-mobile');

    hamburger.addEventListener('click', () => {
        navMobile.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // LÓGICA FADE-IN EN SCROLL
    const fadeInOnScrollElements = document.querySelectorAll('.fade-in-on-scroll');
    const scrollObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    fadeInOnScrollElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // LÓGICA CAMBIO DE IDIOMA
    const langButton = document.getElementById('btn-lang');
    if (langButton) {
        const langFlag = document.getElementById('lang-flag');
        const langText = document.getElementById('lang-text');
        const translatableElements = document.querySelectorAll('[data-es], [data-en]');

        const langData = {
            es: { flag: 'https://flagcdn.com/es.svg', alt: 'Bandera de España' },
            en: { flag: 'https://flagcdn.com/gb.svg', alt: 'Flag of Great Britain' }
        };

        function setLanguage(lang) {
            if (!['es', 'en'].includes(lang)) return;

            document.documentElement.lang = lang;
            document.documentElement.dataset.lang = lang;

            translatableElements.forEach(el => {
                if (el.dataset[lang]) {
                    // Usar innerHTML para permitir etiquetas como <span>
                    el.innerHTML = el.dataset[lang];
                }
            });

            langText.textContent = lang.toUpperCase();
            const flagInfo = langData[lang];
            if (flagInfo) {
                langFlag.src = flagInfo.flag;
                langFlag.alt = flagInfo.alt;
            }
        }

        langButton.addEventListener('click', () => {
            const currentLang = document.documentElement.dataset.lang || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });

        // Detectar idioma del navegador y establecerlo, con 'es' como fallback
        const browserLang = navigator.language.substring(0, 2);
        setLanguage(browserLang === 'en' ? 'en' : 'es');
    }

    // LÓGICA NAVEGACIÓN ACTIVA
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-main a, .nav-mobile a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
        // Quitar la clase active de todos los links primero
        link.classList.remove('active');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Caso especial para la página de inicio
    if (currentPage === '' || currentPage === 'inicio.html') {
        document.querySelectorAll('.nav-main a[href="index.html"], .nav-mobile a[href="index.html"]').forEach(l => l.classList.add('active'));
    }


});;