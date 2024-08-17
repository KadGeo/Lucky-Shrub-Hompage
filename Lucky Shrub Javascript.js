const carouselContainer = document.querySelector('.carousel-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let scrollAmount = 0;

leftBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= carouselContainer.offsetWidth / 3;
        carouselContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

rightBtn.addEventListener('click', () => {
    if (scrollAmount < carouselContainer.scrollWidth - carouselContainer.offsetWidth) {
        scrollAmount += carouselContainer.offsetWidth / 3;
        carouselContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});
