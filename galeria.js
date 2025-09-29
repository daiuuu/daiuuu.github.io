document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('galeria');
    if (!gallery) return; // No ejecutar si no estamos en la página de la galería

    const carousel = document.querySelector('.gallery-carousel');
    const background = document.querySelector('.screen-gallery');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let autoPlayInterval;

    function updateGallery(isNext) {
        const cards = document.querySelectorAll('.gallery-card');
        if (cards.length === 0) return;

        // Lógica para la rotación
        if (isNext) {
            carousel.appendChild(cards[0]);
        } else {
            carousel.insertBefore(cards[cards.length - 1], cards[0]);
        }

        const newActiveCard = document.querySelector('.gallery-card:first-child');
        const bgImage = newActiveCard.dataset.bg;

        // Cambiar fondo
        background.style.backgroundImage = `url('${bgImage}')`;

        // Actualizar la clase 'active' de las tarjetas
        document.querySelectorAll('.gallery-card').forEach(c => c.classList.remove('active'));
        newActiveCard.classList.add('active');
    }

    function showNext() {
        updateGallery(true);
    }

    function showPrev() {
        updateGallery(false);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(showNext, 10000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        showNext();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        showPrev();
        startAutoPlay();
    });

    // Iniciar la galería
    setTimeout(() => {
        const firstCard = document.querySelector('.gallery-card:first-child');
        if (firstCard) {
            background.style.backgroundImage = `url('${firstCard.dataset.bg}')`;
            firstCard.classList.add('active');
        }
        startAutoPlay();
    }, 100);
});