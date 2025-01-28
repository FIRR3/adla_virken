bar.addEventListener("click", () => {
  const bar = document.getElementById("bar");
  const menu = document.getElementById("menu");

  //dropdown menu
  menu.classList.contains("max-lg:h-0") ? menu.classList.replace("max-lg:h-0", "max-lg:h-auto") : menu.classList.replace("max-lg:h-auto", "max-lg:h-0");
  menu.classList.contains("max-lg:overflow-hidden") ? menu.classList.replace("max-lg:overflow-hidden", "max-lg:overflow-auto") : menu.classList.replace("max-lg:overflow-auto", "max-lg:overflow-hidden");

  //change from bar to "x" on active menu
  bar.querySelector("i").classList.contains("fa-bars") ? bar.querySelector("i").classList.replace("fa-bars", "fa-xmark") : bar.querySelector("i").classList.replace("fa-xmark", "fa-bars");
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
    activator.querySelector(".dropdown-header").classList.toggle("lg:bg-grey-light");
  });
  //close nav dropdown if user clicks on window
  //doesn't apply on mobile
  window.addEventListener("click", (e) => {
    if (!activator.querySelector(".dropdown-header").contains(e.target) && !activator.querySelector(".dropdown").contains(e.target)) {
      if (activator.querySelector(".dropdown").classList.contains("flex")) {
        activator.querySelector(".dropdown").classList.replace("flex", "hidden");
        activator.querySelector(".dropdown-header").classList.toggle("lg:bg-grey-light");
      }
    }
  });
});
