

document.addEventListener("DOMContentLoaded", ()=> {

    //HERO GSAP EFFECTS
    const upSale  = document.querySelector('.sale-text')
    const saleBtn = document.querySelector(".sale-btn")
    const dropDownBtn = document.querySelectorAll(".dropdowns")

    gsap.from(upSale , {
        duration : 2,
        x : 300 ,
        rotation : -90,
        opacity : 0,
        delay:1,
        ease : "elastic.out(1, 1)"
    })

    gsap.from (saleBtn , {
        duration : 2,
        x : -300 ,
        rotation : -90,
        opacity : 0,
        delay:2,
        ease : "elastic.out(1, 1)"
    })

    gsap.from(dropDownBtn , {
        duration : 2,
        y : 200,
        stagger : 0.3

    })
})

