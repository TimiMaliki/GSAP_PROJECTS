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
        document.body.classList.add("darkTheme")
      },
      onLeaveBack: () => {
        document.body.classList.remove("darkTheme")
      },
      ease: "power2.out",
    },
  });


  /* Furniture images container */
  const gridItems  = document.querySelectorAll(".grid-item")
  const gridWrapper = gsap.utils.toArray(gridItems)

  console.log(gridWrapper)

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
  const headingTag  = document.querySelector(".furniture-title h2")
  const container  = document.querySelector(".furniture-container")

  const h2_tL = gsap.timeline({
    scrollTrigger : {
      trigger : container,
      markers : true,
      start : "top 50%",
      end : "bottom 50%",
      scrub : true,
      ease : "ease",
      onEnter : () => {
        gsap.set(headingTag, {
          position : "fixed",
          bottom : "0",
          zIndex : -1000,
        })
      },
      onEnterBack : () => {
        gsap.set(headingTag, {
          position : "relative",
          bottom : "0",
        })
      }
    }
  })
  
    gridWrapper.forEach((wrapper , index )=> {
    ScrollTrigger.create({
      trigger : wrapper,
      start : "bottom-=20% bottom",
      end : "bottom top",
      onEnter : () => {
        updateHeading(index)
        if( index === 0){
          document.body.classList.remove("darkTheme")
        }
      },
      onEnterBack : () => {
        updateHeading(index)
        if( index === 0){
          document.body.classList.add("darkTheme")
        }
      }

    })

  });


  const updateHeading = (array)=>{
        const headingEl = ["Furniture","Door","Office","Tech"]
        headingTag.textContent = headingEl[array]
  }

  // initial text display

updateHeading(0)

});

