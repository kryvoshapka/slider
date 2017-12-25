$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 500);

    $(".slider").slick({
       slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,

    });


});