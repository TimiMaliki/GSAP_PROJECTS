

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
        ease : "bounce.out"
    })

    gsap.from (saleBtn , {
        duration : 2,
        x : -300 ,
        rotation : -90,
        opacity : 0,
        ease : "bounce.out"
    })


})

