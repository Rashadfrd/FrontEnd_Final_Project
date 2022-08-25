window.onscroll = function(){myFunction()};



$(".img-discount").mouseenter(function () {
    $(".box").show(300)
})

$(".img-discount").mouseleave(function () {
    $(".box").hide(300)
})



function myFunction() {

    if (document.body.scrollTop == 220 || document.documentElement.scrollTop == 220) {
        $("#header").css("height","0");    
      }

      if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
          $("#header").css("position","sticky");
          $("#header").css("top","0");
          $("#header").css("height","80px");    
          $("#header").css("background-color","white" );
          $(".scroller").css("opacity","1");
        } 
        else{
          $("#header").css("position","static");
          $(".scroller").css("opacity","0");
        }
  }


  $('.menu-open').click(function () {
    $('.slider').css("width","300px")
    $('.links-ul').show(100);
    $('.slider-row').show(100);
  })
  
  
  $('.menu-close').click(function () {
    $('.slider').css("width","0px")
    $('.links-ul').hide(100);
    $('.slider-row').hide(100);
  
  })

  $('.scroller').on("click",function(){
    $(window).scrollTop(0);
  });


$('.drone').hover(function () {
    $('.drone-dropdown').slideDown(100);
  },
  function() {
    $('.drone-dropdown').slideUp(100);
  });
  
  $('.accesories').hover(function () {
    $('.accesories-dropdown').slideDown(100);
  },
  function() {
    $('.accesories-dropdown').slideUp(100);
  });
  
  $('.row__other-features__search').click(function (e) {
    e.stopPropagation();
    $('.user-dropdown').slideUp(500)
    $('.search-dropdown').slideToggle(500)
  })
  $('.row__other-features__user').click(function (e) {
    e.stopPropagation();
    $('.search-dropdown').slideUp(500);
    $('.user-dropdown').slideToggle(500)
  })
  
  $('body').click(function () {
    $('.search-dropdown').slideUp(500);
    $('.user-dropdown').slideUp(500)
  })

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        390:{
            items:2,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})