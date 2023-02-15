'use strict';

const buttonNext = document.querySelector('.btn-next');
const buttonPrev = document.querySelector('.btn-prev');

buttonNext.addEventListener('click', () => {
    buttonPrev.classList.remove('d-none');

    const activeSlide = document.querySelector('.slider-item.active');

    activeSlide.classList.remove('active');
    activeSlide.nextElementSibling.classList.add('active');

    if (activeSlide.nextElementSibling.nextElementSibling === null) {
        buttonNext.classList.add('d-none');
    }

});

buttonPrev.addEventListener('click', () => {
    buttonNext.classList.remove('d-none');

    const activeSlide = document.querySelector('.slider-item.active');

    activeSlide.classList.remove('active');
    activeSlide.previousElementSibling.classList.add('active');

    if (activeSlide.previousElementSibling.previousElementSibling === null) {
        buttonPrev.classList.add('d-none');
    }

});
