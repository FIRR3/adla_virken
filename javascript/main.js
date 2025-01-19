// menu for mobile
const menu = document.getElementById("menu")

window.addEventListener("load", () =>{
  menu.style.top = '-' + menu.offsetHeight + 'px';
})

const openMenu = () =>{
  menu.style.top = 0 + 'px';
}
const closeMenu = () =>{
  menu.style.top = '-' + menu.offsetHeight + 'px';
}

// navbar dropdowns
let dropdownActivators = document.querySelectorAll(".dropdownActivator");

dropdownActivators.forEach(activator =>{
  activator.addEventListener("click", () =>{
    if(activator.querySelector(".dropdown").classList.contains("flex")){
      activator.querySelector(".dropdown").classList.replace("flex", "hidden")
    }
    else{
      activator.querySelector(".dropdown").classList.replace("hidden", "flex")
    }
  })
})