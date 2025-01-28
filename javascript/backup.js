// menu for mobile
const menu = document.getElementById("menu");
//menu functions
const openMenu = () => {
  menu.style.top = 0 + "px";
};
const closeMenu = () => {
  menu.style.top = "-" + menu.offsetHeight + "px";
};
//set menu position
window.addEventListener("load", () => {
  var width = window.innerWidth;
  if (width >= 1024) return;
  closeMenu();
});
//close menu when clicking on window
window.addEventListener("click", (e) => {
  if (!document.getElementById("menu").contains(e.target) && !document.getElementById("menuBar").contains(e.target)) {
    closeMenu();
  }
});

// navbar dropdowns
let dropdownActivators = document.querySelectorAll(".dropdown-activator");

const toggleDropDown = (dropdown) => {
  if (dropdown.querySelector(".dropdown").classList.contains("flex")) {
    dropdown.querySelector(".dropdown").classList.replace("flex", "hidden");
  } else {
    dropdown.querySelector(".dropdown").classList.replace("hidden", "flex");
  }
};

dropdownActivators.forEach((activator) => {
  activator.addEventListener("click", () => {
    //show or hide nav dropdowns when clicked
    toggleDropDown(activator);
    //set grey background color for dropdown-header if the dropdown is active
    if (activator.querySelector(".dropdown-header").classList.contains("lg:bg-none")) {
      activator.querySelector(".dropdown-header").classList.replace("lg:bg-none", "lg:bg-grey-light");
    } else {
      activator.querySelector(".dropdown-header").classList.replace("lg:bg-grey-light", "lg:bg-none");
    }
  });
  //close nav dropdown if user clicks on window
  //doesn't apply on mobile
  window.addEventListener("click", (e) => {
    var width = window.innerWidth;
    if (width < 1024) return;
    if (!activator.querySelector(".dropdown-header").contains(e.target) && !activator.querySelector(".dropdown").contains(e.target)) {
      if (activator.querySelector(".dropdown").classList.contains("flex")) {
        activator.querySelector(".dropdown").classList.replace("flex", "hidden");
        activator.querySelector(".dropdown-header").classList.replace("lg:bg-grey-light", "lg:bg-none");
      }
    }
  });
});
