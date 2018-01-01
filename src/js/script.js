$(document).ready(function () {
    // Top Destinations Sliders 
    // Hotels' Slider
    var hotelsSwiper = new Swiper('#hotels-tab .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        spaceBetween: 0,
        loop: false,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1
        },
        navigation: {
            nextEl: '.swiper-button-next__hotels ',
            prevEl: '.swiper-button-prev__hotels',
        },
    });


    //Naviage Down Button 
    $('#navDown').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('.section--top-destinations').offset().top
          }, 800);
    });
    
});