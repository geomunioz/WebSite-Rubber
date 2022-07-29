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

var swiper5 = new Swiper(".mySwiper5", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-100%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 0],
      },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });