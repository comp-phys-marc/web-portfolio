$(document).ready(function() {

    // scroll
    $(".site--right__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".centsite").offset().top
        }, 2000);
    });

    $(".site--left__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".qee").offset().top
        }, 2000);
    });

    $(".site--right__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $(".qee-more").offset().top
        }, 2000);
    });

    $(".site--left__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $(".leadme").offset().top
        }, 2000);
    });

    $(".site--right__description__call-to-action").eq(2).click(function() {
        $('html, body').animate({
            scrollTop: $(".leadme-more").offset().top
        }, 2000);
    });
});