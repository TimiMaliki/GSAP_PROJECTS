
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin)


//   Brand name Animation
 const brand = document.querySelector('.brand')

gsap.fromTo(brand,{
      y : -270,
      scale : 5,
}, {
    y : 0, 
    duration : 1,
    scale : 1,
    color : "#fff",
    scrollTrigger : {
        trigger : brand,
        end : "bottom top",
        invalidateOrRefresh : true,
        scrub : 2,
        ease : "expoScale(0.5,7,none)",
       
    }
})

//  slide container
 const slide = document.querySelector(".slide")
 const slide1 = document.querySelector(".slide-1")
 const slide2 = document.querySelector(".slide-2")
 const slide3 = document.querySelector(".slide-3")
 const slide4 = document.querySelector(".slide-4")

 const SlideTl = gsap.timeline({
    scrollTrigger : {
        trigger : slide,
         // markers: true,
        start :"top 20%",
        scrub : 2,
        ease : "power2.out"
    }})

    SlideTl.to(slide1,{
        y : 220,
    })
    SlideTl.to(slide2,{
        y : 220,
    })
    SlideTl.to(slide3,{
        y : 220,
    })
    SlideTl.to(slide4,{
        y : 220,
    })

 });
