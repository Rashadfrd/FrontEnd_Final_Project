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


function myFunction() {
    if (document.body.scrollTop > 53 || document.documentElement.scrollTop > 53) {
        // $("#header").show(500);
        $("#header").show();
        // $("#header-2").hide();
      } 
      else{
        // $("#header-2").show(0);
        $("#header").hide();
      }
}