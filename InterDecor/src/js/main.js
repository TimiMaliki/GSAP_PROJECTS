
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin)


//   Brand name Animation
 const brand = document.querySelector('.brand')

gsap.fromTo(brand,{
      y : -570,
      scale : 5,
}, {
    y : 0, 
    scale : 1,
    duration : 1,
    color : "#fff",
    scrollTrigger : {
        trigger : brand,
        end : "bottom top",
        invalidateOrRefresh : true,
        scrub : 2,
        ease : "expoScale(0.5,7,none)",
       
    }
})

 });
