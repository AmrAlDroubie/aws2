const header_swiper = new Swiper(".header-swiper", {
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".header-pagination",
        clickable: "true",
    },
});

const aboutus_swiper = new Swiper(".about-us-swiper", {
    autoplay: {
        delay: 1500,
    },
    loop: true,
    pagination: {
        el: ".aboutus-pag",
        clickable: "true",
    },
    navigation: {
        nextEl: ".about-us-next",
        prevEl: ".about-us-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
    },
});