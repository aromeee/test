$(document).ready(function(){

    $('.depth2').hide()
    $('.gnb > li').hover(function(){
        $(this).find('.depth2').stop().fadeToggle()
    });

    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
        $('.mgnb_wrap').fadeIn()
    });

    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
        $('.mgnb_wrap').fadeIn()
    });

    $('.m_depth2').hide();
    $('.mgnb > li').click(function(){
        $(this).find('.m_depth2').slideDown();
        $(this).siblings().find('.m_depth2').slideUp();
    });

    $('.close').click(function(){
        $('.mgnb_wrap').fadeOut();
    });

    $('.search').hide();
        $('.search_icon').click(function(){
            $('.search').fadeIn()
        });

        $('.search_close').click(function(){
            $('.search').fadeOut()
        });

    const mv = new Swiper('.mv', {
        effect : "fade",
        loop : true,
        speed : 1000,
        autoplay : {
            delay : 3000
        },

        fadeEffect : {
            crossFade : true
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });

    const story = new Swiper('.story', {
        slidesPerView : 1,
        speed : 1000,
        autoplay: {
            delay: 2000
        },

        breakpoints: {
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
        },
    });

    const product = new Swiper('.product', {
        slidesPerView: 1,
        loop : true,

        autoplay: {
            delay: 2000
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            1000: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
        },
    });






});