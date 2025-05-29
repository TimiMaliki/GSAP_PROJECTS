const hamburgerMenu = document.querySelector(".menuBar")
const navLinks = document.querySelector(".nav-links")


// -------------- HAMBURGERMENU --------------

hamburgerMenu.addEventListener("click" , ()=>{
  navLinks.classList.toggle("active")
})

// -------------- ANIMATION --------------

const els = ['#hero-container  .animate span', "#work-section .animate span" , "#brand .animate span"]

els.forEach((el)=>{
        gsap.from(el , {
            y : 300,
            rotation : 15,
            duration : 4,
            ease : 'power3.out',

            scrollTrigger : {
                trigger : el,
                start : "top 120%",
                end : "bottom 90%",
                toggleActions : "play none none none",
            }


        })
})

