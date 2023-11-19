let hamburgerMenu = document.querySelector(".hamburger")
let mobileMenu = document.querySelector(".mobile-menu")
let closeMenu = document.querySelector(".close-menu")
let overlay = document.querySelector(".overlay")
let nav = document.querySelector("nav")
let logo = document.querySelector(".logo")

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open")
  mobileMenu.style.overflowY = "auto"
  overlay.style.display = "block"
  document.body.style.overflowY = "hidden"
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.style.display = "none"
  document.body.style.overflowY = "auto"

})

document.body.addEventListener("click", (event) => {
  let closeBtnbool = event.target.closest(".close-menu")
  let openBtnbool = event.target.closest(".hamburger")
  if(closeBtnbool === null && openBtnbool === null){
    mobileMenu.classList.remove("open")
    overlay.style.display = "none"
    document.body.style.overflowY = "auto"
    console.log("not buttons")
  }

  
})

window.addEventListener("scroll", () => {
  if(scrollY > 0){
    nav.classList.add("sticky")
    nav.style.background = "white"

  }else{
    nav.classList.remove("sticky")
    nav.style.background = "transparent"
  }
})
