$(document).ready(function() {

    // scroll
    $(".section__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".blue").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $(".gates").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(2).click(function() {
        $('html, body').animate({
            scrollTop: $("#fluf").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(3).click(function() {
        $('html, body').animate({
            scrollTop: $("#bob").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(4).click(function() {
        $('html, body').animate({
            scrollTop: $("#jaeger").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(5).click(function() {
        $('html, body').animate({
            scrollTop: $(".k9").offset().top
        }, 2000);
    });
});