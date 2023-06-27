$(document).ready(function() {

    // scroll
    $(".section__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".bloch").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $(".blue").offset().top
        }, 2000);
    });
});