$(document).ready(function() {

    // laptop hover glow
    $('.top-matter__images__laptop').hover(function() {
        $('.top-matter__images__laptop').hide(); 
        $('.top-matter__images__laptop--selected').show();
    },
    function() {
        $('.top-matter__images__laptop').show(); 
        $('.top-matter__images__laptop--selected').hide(); 
    });

    // phone hover glow
    $('.top-matter__images__mobile').hover(function() {
        $('.top-matter__images__mobile').hide(); 
        $('.top-matter__images__mobile--selected').show();
    },
    function() {
        $('.top-matter__images__mobile').show(); 
        $('.top-matter__images__mobile--selected').hide(); 
    });

    // chips hover glow
    $('.top-matter__images__chips').hover(function() {
        $('.top-matter__images__chips').hide(); 
        $('.top-matter__images__chips--selected').show();
    },
    function() {
        $('.top-matter__images__chips').show(); 
        $('.top-matter__images__chips--selected').hide(); 
    });

    // scroll
    $(".main-matter__introduction__call-to-action").click(function() {
        $('html, body').animate({
            scrollTop: $(".main-matter__introduction__highlights").offset().top
        }, 2000);
    });
});