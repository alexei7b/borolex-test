import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";


try {
    const swiper = new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        // Responsive breakpoints
        breakpoints: {

            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }

        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, Pagination]
    });
} catch (e) { }





const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".menu_item").forEach(item => {
    const link = item.querySelector(".menu_link");

    if (link.getAttribute("href") === currentPage) {
        item.classList.add("active");
    }
});