document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin);

  //   Brand name Animation
  const brand = document.querySelector(".brand");

  gsap.fromTo(
    brand,
    {
      y: -270,
      scale: 5,
    },
    {
      y: 0,
      duration: 1,
      scale: 1,
      color: "#fff",
      scrollTrigger: {
        trigger: brand,
        end: "bottom top",
        invalidateOrRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)",
      },
    }
  );

  //  slide container
  const slide = document.querySelector(".slide");
  const slide1 = document.querySelector(".slide-1");
  const slide2 = document.querySelector(".slide-2");
  const slide3 = document.querySelector(".slide-3");
  const slide4 = document.querySelector(".slide-4");

  const SlideTl = gsap.timeline({
    scrollTrigger: {
      trigger: slide,
      // markers: true,
      start: "top 20%",
      scrub: 2,
      ease: "power2.out",
    },
  });

  SlideTl.to(slide1, {
    y: 220,
  });
  SlideTl.to(slide2, {
    y: 220,
  });
  SlideTl.to(slide3, {
    y: 220,
  });
  SlideTl.to(slide4, {
    y: 220,
  });

  // images section container

  const imageSecOne = document.querySelector(".imageSecOne");
  const imageSecOneContainer = document.querySelector(".img-container");


  gsap.to(imageSecOne, {
    clipPath: "circle(1000% at 50% 50%)",
    scrollTrigger: {
      trigger: imageSecOneContainer,
    //   markers: true,
      start: "top top",
      end : "bottom bottom",
      scrub: 2,
      pin : true ,
      onEnter : () => {
        document.body.classList.add("lightTheme")
      },
      onLeaveBack: () => {
        document.body.classList.remove("lightTheme")
      },
      ease: "power2.out",
    },
  });


  /* Furniture images container */
  const gridItems  = document.querySelector(".grid-item")

  const gridWrapper = gsap.utils.toArray(gridItems)

  gridWrapper.forEach(wrapper => {
    const boxes = wrapper.querySelectorAll(".box")

    boxes.forEach((box) =>{
             gsap.from(box,{
                y : 500,
                duration : 1,
                scrollTrigger : {
                    trigger : box,
                    start : "top bottom",
                    end : "bottom top",
                    scrub : 4,
                }
             })
    })

  });


  /* change text of Furniture images container */

});
