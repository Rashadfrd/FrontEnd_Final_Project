window.onscroll = function(){myFunction()};
let content = document.querySelector(".content")

function myFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        // $("#header").show(500);
        $("#header").slideDown()
        // $("#header-2").hide();
      } 
      else{
        // $("#header-2").show(0);
        $("#header").hide();
      }
}