

document.addEventListener("DOMContentLoaded", ()=> {

    gsap.registerPlugin(ScrollTrigger) 


    //HERO GSAP EFFECTS
    const upSale  = document.querySelector('.sale-text')
    const upSaleTrigger = document.querySelector(".upsale-trigger")
     const saleBtn = document.querySelector(".sale-btn")
    const dropDownBtn = document.querySelectorAll(".dropdowns")
    const dropDownTrigger = document.querySelectorAll(".drops-trigger")


   

 gsap.from(upSale , {
        duration : 2,
        x : 300 ,
        rotation : -90,
        opacity : 0,
        delay:1,
        ease : "elastic.out(1, 1)",
        scrollTrigger : {
            trigger : upSaleTrigger,
            // markers : true,
            start: "top 25%",
            end : "bottom 35%",
            toggleActions : "restart  pause reverse reset"
        }
    })


        gsap.from (saleBtn , {
        duration : 2,
        x : -300 ,
        rotation : -90,
        opacity : 0,
        delay:2,
        ease : "elastic.out(1, 1)",
        scrollTrigger : {
            trigger : upSaleTrigger,
            // markers : true,
            start: "top 25%",
            end : "bottom 35%",
            toggleActions : "restart  pause reverse reset"
        }
    })

    gsap.from(dropDownBtn , {
        duration : 2,
        opacity : 0,
        y : 200,
        stagger : {
            each : 0.3,
            from : "start"
        },
        scrollTrigger : {
            trigger : dropDownTrigger,
            // markers : true,
            start : "top 25%"
        }

    })

    // FEATURED VEHICLES GSAP EFFECTS
    const f1 = document.querySelector('.f1')
    const f2 = document.querySelector('.f2')
    const f3 = document.querySelector('.f3')
    const f_trigger = document.querySelector(".Featured-Vehicle-trigger")
    const f_trigger_1 = document.querySelector(".Featured-Vehicle-trigger-f1")
    const f_trigger_2 = document.querySelector(".Featured-Vehicle-trigger-f2")
    const  viewBtn = document.querySelector(".viewBtn")
    const viewTrigger = document.querySelector(".view-now ")



// Animate f1
gsap.from(f1, {
  duration: 1.5,
  opacity: 0,
  x: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: f_trigger,
    start: "top 25%",
  }
});

// Animate f2
gsap.from(f2, {
  duration: 1.5,
  opacity: 0,
  scale: 0.8,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: f_trigger_1,
    start: "top 25%",
  }
});

// Animate f3
gsap.from(f3, {
  duration: 1.5,
  opacity: 0,
  x: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger:f_trigger_2,
    start: "top 25%",
  }
});

gsap.from(viewBtn, {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    scrollTrigger: {
      trigger:viewTrigger,
      start: "top 25%",
    }
  });

 
 // AUCTION VEHICLES GSAP EFFECTS

 const aucTrigger = document.querySelector(".aut-trigger")
 const AucText = document.querySelectorAll(".d1")
 


 gsap.from(AucText , {
    duration : 2,
    opacity : 0,
    y : 100,
    scale: 2.5,
    stagger : {
        each : 0.3,
        from : "start"
    },
    scrollTrigger : {
        trigger : aucTrigger,
        scrub : true,
        pin : true
    }

})


// PROGRESS BAR
const progressBar = document.querySelector(".bar")
const body  = document.querySelector("body")

gsap.to(progressBar , {
    width : "100%",
    duration : 1,
    ease : "power1.inOut",
    scrollTrigger : {
      trigger : body,
      start: "top 0%",
      end : "bottom 100%",
      scrub: true,
    }
})

// CURSOR MOVEMENT
const cursor  = document.querySelector(".cursor-follower")
const navLinks  = document.querySelectorAll(".nav-link")

document.addEventListener("mouseover" , (e)=>{
    cursor.classList.remove("hide")
    gsap.to(cursor,{
        duration: 0.4,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
    })
})

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", ()=>{
           cursor.classList.add("active")   
    })

    link.addEventListener("mouseleave", ()=>{
        cursor.classList.remove("active")
 })
})




   




})