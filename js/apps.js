$(document).ready(function() {

    // scroll
    $(".app__description__call-to-action").eq(0).click(function() {
        $('html, body').animate({
            scrollTop: $(".pass").offset().top
        }, 2000);
    });

    $(".app__description__call-to-action").eq(1).click(function() {
        $('html, body').animate({
            scrollTop: $(".yata").offset().top
        }, 2000);
    });

    $(".app__description__call-to-action").eq(2).click(function() {
        $('html, body').animate({
            scrollTop: $(".cents").offset().top
        }, 2000);
    });

    $(".app__description__call-to-action").eq(3).click(function() {
        $('html, body').animate({
            scrollTop: $(".leadme").offset().top
        }, 2000);
    });
});