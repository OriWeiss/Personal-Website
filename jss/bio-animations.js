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
 
    var haveDisplayedTravel = false;
    var haveDisplayedMotor = false;
    $("#travel-wrapper").css({display: "none"});
    $("#motor-wrapper").css({ display: "none" });

    
    $(window).scroll(function () {
   

    
 
 
/**Travel header animation */
if (!haveDisplayedTravel && screen.width > 750 && isInViewport(document.querySelector('#travel-wrapper')) ) {
      haveDisplayedTravel = true;
        // Wrap every letter in a span

    $("#travel-wrapper").css({ display: "block" });


    var textWrapperTravel = document.querySelector('.ml14 .letters-travel');
    textWrapperTravel.innerHTML = textWrapperTravel.textContent.replace(/\S/g, "<span class='letter-travel'>$&</span>");

    anime.timeline({loop: 1})
    .add({
        targets: '.ml14 .line-travel',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 1500
    }).add({
        targets: '.ml14 .letter-travel',
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

   


if (!haveDisplayedMotor && screen.width > 750 && isInViewport(document.querySelector('#motor-activ')) ) {
    haveDisplayedMotor = true;
      // Wrap every letter in a span

  $("#motor-wrapper").css({ display: "block" });


  var textWrapperMotor = document.querySelector('.ml14 .letters-motor');
  textWrapperMotor.innerHTML = textWrapperMotor.textContent.replace(/\S/g, "<span class='letter-motor'>$&</span>");

  anime.timeline({loop: 1})
  .add({
      targets: '.ml14 .line-motor',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeInOutExpo",
      duration: 1500
  }).add({
      targets: '.ml14 .letter-motor',
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

/* Making Black Holes & CS Club Animation*/
if ($(window).width() > 750){
    $('#cern').css({ display: "none" });
    $('#csclub').css({ display: "none" });
    $(window).scroll(function () {
 
        if (isInViewport(document.querySelector('.proj-desc'))) {
            $('#cern').css({ display: "block" });
            $('#cern').addClass("animated rotateInUpRight");
            $('#csclub').css({ display: "block" });
            $('#csclub').addClass("animated rotateInUpLeft");
        }
    });
    }



/*Header animation*/
anime.timeline({loop: 1})
.add({
  targets: '.ml5 .line-heading',
  opacity: [0.5,1],
  scaleX: [0, 1],
  easing: "easeInOutExpo",
  duration: 700
}).add({
  targets: '.ml5 .line-heading',
  duration: 600,
  easing: "easeOutExpo",
  translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
}).add({
  targets: '.ml5 .ampersand',
  opacity: [0,1],
  scaleY: [0.5, 1],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600'
}).add({
  targets: '.ml5 .letters-left',
  opacity: [0,1],
  translateX: ["0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=300'
}).add({
  targets: '.ml5 .letters-right',
  opacity: [0,1],
  translateX: ["-0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600'
}).add({
  targets: '.ml5',
  opacity: 1,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

});