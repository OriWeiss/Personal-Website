$(function () {
    $('#travelImg').css({ display: "none" });
    $('.travel .desc').css({ display: "none" });
    $(window).scroll(function () {
        var hT = $('.travel').offset().top,
            hH = $('.travel').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT - wH), wS);
        if (wS > (hT + hH - wH)) {
            $('#travelImg').css({ display: "block" });
            $('#travelImg').addClass("animated slideInRight");
            $('.travel .desc').css({ display: "block" });
            $('.travel .desc').addClass("animated slideInLeft");
        }
    });

    $('#cern').css({ display: "none" });
    $('#csclub').css({ display: "none" });
    $(window).scroll(function () {
        var hT = $('.proj-desc').offset().top,
            hH = $('.proj-desc').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT - wH), wS);
        if (wS > (hT + hH - wH)) {
            $('#cern').css({ display: "block" });
            $('#cern').addClass("animated rotateInUpRight");
            $('#csclub').css({ display: "block" });
            $('#csclub').addClass("animated rotateInUpLeft");
        }
    });
});