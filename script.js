let hamburgerMenu = document.querySelector(".hamburger")
let linksMenu = document.querySelector(".menu")
let closeMenu = document.querySelector(".close-menu")
let overlay = document.querySelector(".overlay")
let fs = require('fs')
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
fs.readdir((err, files) => {
  if(err){
    console.log(err)
  }
  console.log(files)
})


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
