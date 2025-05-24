

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
    const f_trigger_3 = document.querySelector(".Featured-Vehicle-trigger-f3")

    const f_One_timeLine = gsap.timeline()

    f_One_timeLine.from(f1,{
        duration : 2,
        opacity : 0,
        x : -100,
        ease : "power2.out",
        scrollTrigger : {
            trigger : f_trigger,
            start : "top center"
        }
    })

    f_One_timeLine.from(f2,{
        duration : 2,
        opacity : 0,
        scale : 0.5,
        y : 150, 
        ease :"power2.out",scrollTrigger : {
            trigger : f_trigger,
            start : "top center"
        }
    })
    f_One_timeLine.from(f3,{
        duration : 2,
        opacity : 0,
        x : 100, 
        ease : "power2.out",scrollTrigger : {
            trigger : f_trigger,
            start : "top center"
        }
    })

 
})




   




    