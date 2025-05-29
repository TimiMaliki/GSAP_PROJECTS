const hamburgerMenu = document.querySelector(".menuBar")
const navLinks = document.querySelector(".nav-links")


// -------------- HAMBURGERMENU --------------

hamburgerMenu.addEventListener("click" , ()=>{
  navLinks.classList.toggle("active")
})

// -------------- ANIMATION --------------

const els = ['#hero-container  .animate span', '.work-section .animate span' , "#brand .animate span" , "#footer .animate span"]

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


const imageAnimation = document.querySelector("#image-container .over-lay")

gsap.to(imageAnimation , {
    scrollTrigger : {
        trigger : "#image-container",
        start : "top 90%",
        end : "bottom bottom",
        scrub : 1,
    },

    width : "86vw"

})


const recentProject = document.querySelectorAll(".items")
const projectTrigger = document.querySelector("#recent-project-container  .grid .items")

recentProject.forEach((project)=>{
    gsap.fromTo(project,{
        opacity : 0,
        y : 100
    }, {
        opacity : 1,
        y : 0,
        duration : 1,
        stagger : 0.2,
        scrollTrigger : {
            trigger : projectTrigger,
            start : "top 70%",
            end : "bottom 70%",
            toggleActions : "play none none none",
        }
    })
})




// -------------- CLONINING THE IMAGE SLIDE ANIMATION --------------

var copy = document.querySelector(".logos-slide").cloneNode(true)
document.querySelector(".logos").appendChild(copy)


// -------------- SMOOTH SCROLLING --------------


// Initialize Lenis
const lenis = new Lenis({
   duration : 6
  });
  
 
 

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);