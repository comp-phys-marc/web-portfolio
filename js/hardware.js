$(document).ready(function() {

    // scroll
    $(".section__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".bloch").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $("#hall").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(2).click(function() {
        $('html, body').animate({
            scrollTop: $("#emulator").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(3).click(function() {
        $('html, body').animate({
            scrollTop: $("#carrier").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(4).click(function() {
        $('html, body').animate({
            scrollTop: $("#flasher").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(5).click(function() {
        $('html, body').animate({
            scrollTop: $("#wearable").offset().top
        }, 2000);
    });

    $(".section__description__call-to-action").eq(6).click(function() {
        $('html, body').animate({
            scrollTop: $(".blue").offset().top
        }, 2000);
    });
});