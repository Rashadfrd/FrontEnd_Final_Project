window.onscroll = function(){myFunction()};
let leftBtn = document.querySelector(".leftbtn");
let rightBtn = document.querySelector(".rightbtn");
let delivery = document.querySelector(".delivery");
let buying = document.querySelector(".buying");
let personalSession = document.querySelector(".personal-session");
let giftVoucher = document.querySelector(".gift-voucher");
let deliveryImg = document.querySelector(".delivery-img")
let buyingImg = document.querySelector(".buying-img")
let personalSessionImg = document.querySelector(".personal-img")
let giftVoucherImg = document.querySelector(".gift-voucher-img")
let allcards = document.querySelectorAll(".cards")
let buttonn = document.querySelectorAll(".addbutton");
let natural = document.querySelector(".natural");
let smile = document.querySelector(".smile");
let butterfly = document.querySelector(".butterfly");
let branding = document.querySelector(".branding");
let brand = document.querySelector(".brand");
let naturalImg = document.querySelector(".natural-img");
let smileImg = document.querySelector(".smile-img");
let butterflyImg = document.querySelector(".butterfly-img");
let brandingImg = document.querySelector(".branding-img");
let brandImg = document.querySelector(".brand-img");



let result = localStorage.getItem("basket");
let basket;

if (!result) {
  localStorage.setItem("basket",JSON.stringify([]));
}


buttonn.forEach((btn)=>{
  btn.addEventListener("click",function () {

    basket = JSON.parse(localStorage.getItem("basket")) || [];
    let id = this.getAttribute("data-id");
    let price = this.parentElement.parentElement.querySelector(".cards-price").innerText;
    let name = this.parentElement.parentElement.querySelector(".cards-brandname").innerText;
    let imgSrc = this.parentElement.parentElement.querySelector("img").src;
    let imgDatas = imgSrc.split("/");
    let img = imgDatas[imgDatas.length-1]

    let existed = basket.find((value) => {
      return value.id == id;
    })
    if (!existed) {
      let item = {id, img, name, price, count: 1 };
      basket.push(item);
    } else {
      existed.count++
    }
    localStorage.setItem("basket",JSON.stringify(basket));
    GetCount();
  });
});
GetCount();
function GetCount() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let count = basket.reduce((count, value) =>{
    return (count += value.count);
  },0);
  let basketCounter = document.querySelector(".basket-counter");
  basketCounter.innerText = count;
}




delivery.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  deliveryImg.style.animationName = "mouseEnter";
})
delivery.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  deliveryImg.style.animationName = "mouseLeave";
})

buying.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  buyingImg.style.animationName = "mouseEnter";
})
buying.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  buyingImg.style.animationName = "mouseLeave";
})

personalSession.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  personalSessionImg.style.animationName = "mouseEnter";
})
personalSession.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  personalSessionImg.style.animationName = "mouseLeave";
})

giftVoucher.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  giftVoucherImg.style.animationName = "mouseEnter";
})
giftVoucher.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  giftVoucherImg.style.animationName = "mouseLeave";
})

natural.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  naturalImg.style.animationName = "mouseEnter";
})
natural.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  naturalImg.style.animationName = "mouseLeave";
})

smile.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  smileImg.style.animationName = "mouseEnter";
})
smile.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  smileImg.style.animationName = "mouseLeave";
})

brand.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  brandImg.style.animationName = "mouseEnter";
})
brand.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  brandImg.style.animationName = "mouseLeave";
})

butterfly.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  butterflyImg.style.animationName = "mouseEnter";
})
butterfly.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  butterflyImg.style.animationName = "mouseLeave";
})

branding.addEventListener("mouseenter",function (e) {
  e.stopPropagation();
  brandingImg.style.animationName = "mouseEnter";
})
branding.addEventListener("mouseleave",function (e) {
  e.stopPropagation();
  brandingImg.style.animationName = "mouseLeave";
})

function myFunction() {
  if (document.body.scrollTop < 60 || document.documentElement.scrollTop > 60) {
    $("#header").css("height","0");    
  }
    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
        // $("#header").show(500);
        $("#header").css("position","sticky");
        $("#header").css("top","0");
        $("#header").css("height","80px");    
        $("#header").css("background-color","white" );
        $(".links").css("color","black");
        $(".scroller").css("opacity","1");

      } 
      else{
        $("#header").css("background-color","transparent" );
        $("#header").css("position","absolute");
        $("#header").css("top","0");
        $(".links").css("color","white")
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

$('.owl-one').owlCarousel({
  margin:10,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})

$('.owl-three').owlCarousel({
  margin:10,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          loop:true
      },
      600:{
          items:1,
          loop:true
      },
      1000:{
          items:1,
          loop:true
      }
  }
})

$('.owl-two').owlCarousel({
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

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
  $('.user-dropdown').slideUp(500);
})



// const accordion = document.getElementsByClassName(".hm");

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active")
//   })
// }

// allcards.forEach((card) => {
//   card.addEventListener("mouseenter",function () {
//     buttonn.forEach((button)=>{
//       button.style.display = "block"
//     })
//   })
  
//   card.addEventListener("mouseleave",function () {
//     buttonn.forEach((button)=>{
//       button.style.display = "none"
//     })
//   })
// })

