// javascript Animate onscroll Start
$(document).ready(function () {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
});
$(document).ready(function () {
    pagenum = 1;

    function AutoRotate() {
        var myele = null;
        var allElements = document.getElementsByTagName('label');
        for (var i = 0, n = allElements.length; i < n; i++) {
            var myfor = allElements[i].getAttribute('for');
            if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
                allElements[i].click();
                break;
            }
        }
        if (pagenum == 4) {
            pagenum = 1;
        } else {
            pagenum++;
        }
    }
    setInterval(AutoRotate, 5000);
});
// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {
    // When arrow is clicked

    $('body, html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
$(function() {

  var speed = 0.7;
  var ease = Elastic.easeInOut.config(1.2, 0.5);
  var demoDelay = 0;

  $('.social-icon').each(function() {
    var tl = new TimelineLite({  }),
      $this = $(this),
      $circle = $this.find('.si-circle'),
      $splash = $this.find('.si-splash'),
      $icon = $this.find('.si-icon'),
      $gradient = $this.find('.si-gradient'),
      color = $circle.css('fill');
    
    // tl.pause(); // turn on
    
    $this.css('opacity', 1);

    // Morph and animate colors
    if($this.hasClass('w-gradient')) {
       tl.to($circle, speed, {
        morphSVG: $splash,
        ease: ease
      }, 0)

      $gradient.find('stop').each(function(i) {
        $(this).attr('stop-color', '#989898');
      }, 0);

      tl.to($gradient.find('stop:nth-child(1)'), speed, {
        attr:  {offset:'0%'}, stopColor: '#FBBC6E',
        ease: ease
      }, 0)
      .to($gradient.find('stop:nth-child(2)'), speed, {
        attr:  {offset:'50%'}, stopColor: '#D8456A',
        ease: ease
      }, 0)
      .to($gradient.find('stop:nth-child(3)'), speed, {
        attr:  {offset:'100%'}, stopColor: '#4459A9',
        ease: ease
      }, 0)

    } else {
      $circle.attr("fill",'#989898');

      tl.to($circle, speed, {
        morphSVG: $splash,
        css: {
          fill: color,
        },
        ease: ease
      }, 0)
    }


    // Animate icon
    tl.to($icon, speed + .1, {
      css: {
        scale: 1.2,
        transformOrigin: "center center",
      },
      ease: Back.easeInOut.config(1)
    }, 0);
  
   
    

    // On hover play timeline
    $(this).hover(function() {
      tl.play();
    }, function() {
      var currentTime = tl.time();
      tl.reverse(currentTime);
    });
    
    
    // for demo
    setTimeout(function() {
      tl.play();
    }, demoDelay);
    setTimeout(function() {
      tl.reverse();
    }, demoDelay + 1000);
    demoDelay = demoDelay + 100;
    // END demo
    

  });
  
  
  
  
  


});

