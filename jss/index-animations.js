


$(function () {

    var finishedIntro = false;
    slideTimer = setInterval(function() {
    $('.cd-intro').slideUp(); 
    }, 3500); 


    var haveDisplayed = false;
    
   $(window).scroll(function () {
        var hT = $('.fun-facts').offset().top,
            hH = $('.fun-facts').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT - wH), wS);
        if (!haveDisplayed && wS > (hT + hH - wH) ) {
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
                  duration: 3000
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





