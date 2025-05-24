

document.addEventListener("DOMContentLoaded", ()=> {

    gsap.registerPlugin(ScrollTrigger) 


    //HERO GSAP EFFECTS
    const upSale  = document.querySelector('.sale-text')
    const upSaleTrigger = document.querySelector(".upsale-trigger")
     const saleBtn = document.querySelector(".sale-btn")
    const dropDownBtn = document.querySelectorAll(".dropdowns")

   

 gsap.from(upSale , {
        duration : 2,
        x : 300 ,
        rotation : -90,
        opacity : 0,
        delay:1,
        ease : "elastic.out(1, 1)",
        scrollTrigger : {
            trigger : upSaleTrigger,
            markers : true,
            start: "top 25%"
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
            markers : true,
            start: "top 25%"
        }
    })

    // gsap.from(dropDownBtn , {
    //     duration : 2,
    //     opacity : 0,
    //     y : 200,
    //     stagger : {
    //         each : 0.3,
    //         from : "start"
    //     }

    // })


 
})




   




       //FEATURED VEHICLES GSAP EFFECTS
    // const f1 = document.querySelector('.f1')
    // const f2 = document.querySelector('.f2')
    // const f3 = document.querySelector('.f3')

    // const f_One_timeLine = gsap.timeline()

    // f_One_timeLine.from(f1,{
    //     duration : 2,
    //     opacity : 0,
    //     x : -100
    // })

    // f_One_timeLine.from(f2,{
    //     duration : 2,
    //     opacity : 0,
    //     scale : 0.5,
    //     y : 50
    // })
    // f_One_timeLine.from(f3,{
    //     duration : 2,
    //     opacity : 0,
    //     x : 100
    // })