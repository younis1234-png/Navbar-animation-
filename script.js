const menuBars = document.getElementById("menu-bars")
const overlay = document.getElementById("overlay")
const nav1 = document.getElementById("nav-1")
const nav2 = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const nav4 = document.getElementById("nav-4")
const nav5 = document.getElementById("nav-5")

const navItems =[nav1, nav2, nav3, nav4, nav5]


// control navAnimation
function navAnimation(direction1, direction2){
 
    navItems.forEach((nav, index)=>{
        nav.classList.replace(`slide-${direction1}-${index + 1}`, `slide-${direction2}-${index + 1}` )
    })
}


// Toggle nav function 
function toggleNav(){
    // Toggle: menu Bars Open/close
    menuBars.classList.toggle("change") 
    // Toggle : Menu active
    overlay.classList.toggle("overlay-active")
    if(overlay.classList.contains("overlay-active")){
        // Animate in overlay 
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right")
        // Animate in - nav item
        navAnimation("out", "in")
    }else{
        // Animate out overlay
        overlay.classList.replace("overlay-slide-right","overlay-slide-left")
        //  Animate out
        navAnimation("in", "out")
    }

}


// Event Listener 
menuBars.addEventListener("click", toggleNav)

navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav)
})