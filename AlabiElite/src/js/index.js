

document.addEventListener("DOMContentLoaded", ()=> {

    //NAV_BAR GSAP EFFECTS
    const loginBtn = document.querySelector('.login-btn')
    const upSale  = document.querySelector('.sale-text')
    const saleBtn = document.querySelector(".sale-btn")

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


})

