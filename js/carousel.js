var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 50,
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
});