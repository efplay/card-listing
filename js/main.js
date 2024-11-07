var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween:22,
    effect: 'fade',
    loop: true,
    speed: 350,
    mousewheel:{
        invert:false
    },
    pagination :{
        el:'.swiper-pagination',
        clickable:true,
        dynamicBullets:true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
            // >768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // > 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
        }
    }
});