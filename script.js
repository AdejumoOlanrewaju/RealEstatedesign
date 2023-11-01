let hamburgerMenu = document.querySelector(".hamburger")
let linksMenu = document.querySelector(".menu")
let closeMenu = document.querySelector(".close-menu")
let overlay = document.querySelector(".overlay")
hamburgerMenu.addEventListener("click", () => {
  linksMenu.classList.add("open")
  document.body.style.overflowY = "hidden"
  overlay.style.display = "block"
})

closeMenu.addEventListener("click", () => {
  linksMenu.classList.remove("open");
  document.body.style.overflowY = "auto"
  overlay.style.display = "none"

})
/**
 * <svg
xmlns="http://www.w3.org/2000/svg"
x="0px" y="0px"
width="50" height="50"
viewBox="0 0 172 172"
style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg>
 */
// let fs = require('fs')

// fs.readdir((err, files) => {
//   if(err){
//     console.log(err)
//   }
//   console.log(files)
// })


// function handleClick(){
//   linksMenu.style.transform = "translate(100%)"
//   linksMenu.style.display = "none"
// }

// if(closeMenu){
//   closeMenu.addEventListener("click", handleClick)
// }else {
//   closeMenu.removeEventListener("click", handleClick)
// }

// console.log(closeMenu)
