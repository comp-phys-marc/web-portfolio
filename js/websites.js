$(document).ready(function() {

    // scroll
    $(".site--right__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".cents").offset().top
        }, 2000);
    });

    $(".site--left__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".qee").offset().top
        }, 2000);
    });

    $(".site--right__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $(".deborah").offset().top
        }, 2000);
    });
});