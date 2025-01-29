const logoCarousel = document.querySelector('.logo-carousel');

logoCarousel.addEventListener('mouseenter', () => {
    logoCarousel.style.animationPlayState = 'paused';
});

logoCarousel.addEventListener('mouseleave', () => {
    logoCarousel.style.animationPlayState = 'running';
});