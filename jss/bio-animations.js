$(function () {


    $('#stairs-img').css({ display: "none" });
    $('#facts-desc').css({ display: "none" });
    
   $(window).scroll(function () {
    var hT = $('.facts').offset().top,
        hH = $('.facts').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('#stairs-img').css({ display: "block" });
        $('#stairs-img').addClass("animated bounceIn");
        $('#facts-desc').css({ display: "block" });
        $('#facts-desc').addClass("animated bounceIn");
    }
});
});