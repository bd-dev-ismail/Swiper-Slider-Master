$(document).ready(function(){

      const swiper = new Swiper('.swiper', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowsOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
});
