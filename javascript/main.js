const bar = document.getElementById("bar");
const menu = document.getElementById("menu");
bar.addEventListener("click", () =>{
  console.log("hey")
  if(menu.classList.contains("max-lg:h-0")){
    menu.classList.replace("max-lg:h-0", "max-lg:min-h-32")
  }
})