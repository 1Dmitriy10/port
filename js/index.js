import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
import { getItemPortfolio } from "./gallery.js"

getItemPortfolio()

const skills = new Swiper('.skills-slider', {
    loop: true,
    effect: 'cube',
    slidesPerView: 2,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

