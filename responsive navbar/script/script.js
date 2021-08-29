const hamburger = document.querySelector(".click-here");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", showMenu);

function showMenu() {
  if (navMenu.style.left === "0px") {
    navMenu.style.left = "105%";
    console.log("work");
  } else {
    navMenu.style.left = "0";
    console.log("work");
  }
}
