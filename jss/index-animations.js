var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


$(function () {

    slideTimer = setInterval(function() {
    $('.animation').slideUp(); $(".navbar").addClass("fixed-top");
    }, 3500);

    
    var haveDisplayed = false;
    /* Get to Know me Animation Mobile*/
   $(window).scroll(function () {
        if (!haveDisplayed && screen.width < 750 && isInViewport(document.querySelector('#stairs-img')) ) {
            haveDisplayed = true;
        // Wrap every letter in a span
        
            
                $(".facts h2").css({ display: "block" });
                
                    // Wrap every letter in a span
                var textWrapper = document.querySelector('.ml14 .letters');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                anime.timeline({
                    loop: 1,
                    /*opacity: 0*/
                })
                .add({
                  targets: '.ml14 .line',
                  scaleX: [0,1],
                  opacity: [0.5,1],
                  easing: "easeInOutExpo",
                  duration: 2000
                }).add({
                  targets: '.ml14 .letter',
                  opacity: [0,1],
                  translateX: [40,0],
                  translateZ: 0,
                  scaleX: [0.3, 1],
                  easing: "easeOutExpo",
                  duration: 800,
                  offset: '-=600',
                  delay: (el, i) => 150 + 25 * i
                }).add({
                  targets: '.ml14',
                  opacity: 1,
                  duration: 1000,
                  easing: "easeOutExpo",
                  delay: 1000
                });

            
        }

        /*Get to Know me Animation Desktop*/
        else if (!haveDisplayed && screen.width > 750 && isInViewport(document.querySelector('#facts-desc')) ) {
            haveDisplayed = true;
        // Wrap every letter in a span
        
            
                $(".facts h2").css({ display: "block" });
                
                    // Wrap every letter in a span
                var textWrapper = document.querySelector('.ml14 .letters');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                anime.timeline({
                    loop: 1,
                    /*opacity: 0*/
                })
                .add({
                  targets: '.ml14 .line',
                  scaleX: [0,1],
                  opacity: [0.5,1],
                  easing: "easeInOutExpo",
                  duration: 2000
                }).add({
                  targets: '.ml14 .letter',
                  opacity: [0,1],
                  translateX: [40,0],
                  translateZ: 0,
                  scaleX: [0.3, 1],
                  easing: "easeOutExpo",
                  duration: 800,
                  offset: '-=600',
                  delay: (el, i) => 150 + 25 * i
                }).add({
                  targets: '.ml14',
                  opacity: 1,
                  duration: 1000,
                  easing: "easeOutExpo",
                  delay: 1000
                });

            
        }



    });

    /*Software Engineer Animation */
    anime.timeline({loop: 2})
    .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.ml15',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });



});

$("#scroll-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#fun-facts").offset().top},
      'slow');
});



