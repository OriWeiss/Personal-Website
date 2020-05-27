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

    var haveDisplayedTech = false;
    var haveDisplayedWork = false;
    var haveDisplayedEduc = false;

    $("#tech-title").css({display: "none"});
    $("#work-title").css({display: "none"});
    $("#educ-title").css({display: "none"});

    
   $(window).scroll(function () {

        if (!haveDisplayedTech && isInViewport(document.querySelector('#tech-title')) ) {
            haveDisplayedTech = true;
        // Wrap every letter in a span
        
            
                $("#tech-title").css({ display: "block" });
                
                    // Wrap every letter in a span
                    var textWrapperTech = document.querySelector('.ml11 .letters-tech');
                    textWrapperTech.innerHTML = textWrapperTech.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter-tech'>$&</span>");
                    
                    anime.timeline({loop: 1})
                      .add({
                        targets: '.ml11 .line-tech',
                        scaleY: [0,1],
                        opacity: [0.5,1],
                        easing: "easeOutExpo",
                        duration: 700
                      })
                      .add({
                        targets: '.ml11 .line-tech',
                        translateX: [0, document.querySelector('.ml11 .letters-tech').getBoundingClientRect().width + 10],
                        easing: "easeOutExpo",
                        duration: 700,
                        delay: 100
                      }).add({
                        targets: '.ml11 .letter-tech',
                        opacity: [0,1],
                        easing: "easeOutExpo",
                        duration: 600,
                        offset: '-=775',
                        delay: (el, i) => 34 * (i+1)
                      }).add({
                        targets: '.ml11',
                        opacity: 1,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      });

            
        }
        else if (!haveDisplayedWork && isInViewport(document.querySelector("#intern-title")))  {
            haveDisplayedWork = true;
        // Wrap every letter in a span
        
            
                $("#work-title").css({ display: "block" });
                
                    // Wrap every letter in a span
                    var textWrapperWork = document.querySelector('.ml11 .letters-work');
                    textWrapperWork.innerHTML = textWrapperWork.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter-work'>$&</span>");
                    
                    anime.timeline({loop: 1})
                      .add({
                        targets: '.ml11 .line-work',
                        scaleY: [0,1],
                        opacity: [0.5,1],
                        easing: "easeOutExpo",
                        duration: 700
                      })
                      .add({
                        targets: '.ml11 .line-work',
                        translateX: [0, document.querySelector('.ml11 .letters-work').getBoundingClientRect().width + 10],
                        easing: "easeOutExpo",
                        duration: 700,
                        delay: 100
                      }).add({
                        targets: '.ml11 .letter-work',
                        opacity: [0,1],
                        easing: "easeOutExpo",
                        duration: 600,
                        offset: '-=775',
                        delay: (el, i) => 34 * (i+1)
                      }).add({
                        targets: '.ml11',
                        opacity: 1,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      });

            
        }
        else if (!haveDisplayedEduc &&  isInViewport(document.querySelector('.education-degree'))) {
            haveDisplayedEduc = true;
        // Wrap every letter in a span
        
            
                $("#educ-title").css({ display: "block" });
                
                    // Wrap every letter in a span
                    var textWrapperEduc = document.querySelector('.ml11 .letters-educ');
                    textWrapperEduc.innerHTML = textWrapperEduc.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter-educ'>$&</span>");
                    
                    anime.timeline({loop: 1})
                      .add({
                        targets: '.ml11 .line-educ',
                        scaleY: [0,1],
                        opacity: [0.5,1],
                        easing: "easeOutExpo",
                        duration: 700
                      })
                      .add({
                        targets: '.ml11 .line-educ',
                        translateX: [0, document.querySelector('.ml11 .letters-educ').getBoundingClientRect().width + 10],
                        easing: "easeOutExpo",
                        duration: 700,
                        delay: 100
                      }).add({
                        targets: '.ml11 .letter-educ',
                        opacity: [0,1],
                        easing: "easeOutExpo",
                        duration: 600,
                        offset: '-=775',
                        delay: (el, i) => 34 * (i+1)
                      }).add({
                        targets: '.ml11',
                        opacity: 1,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      });

            
        }

    });
});