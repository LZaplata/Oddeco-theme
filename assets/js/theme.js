$(document).ready(function () {
    $(".offcanvas .nav li a").click(function () {
        $(".offcanvas button").click();
    });

    var swiper = new Swiper(".banner-swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 6000,
        }
    });
});
