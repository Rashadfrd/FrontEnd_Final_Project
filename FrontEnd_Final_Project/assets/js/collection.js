$(".img-discount").mouseenter(function () {
    $(".box").show(300)
})

$(".img-discount").mouseleave(function () {
    $(".box").hide(300)
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
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})