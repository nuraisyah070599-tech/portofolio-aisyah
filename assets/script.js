const navbar = document.getElementById("main-navbar");
const toTop = document.getElementById("to-top");

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    navbar.classList.add("navbar-fixed");
    navbar.classList.remove("bg-transparent");

    toTop.style.display = "flex";
  } else {
    navbar.classList.remove("navbar-fixed");
    navbar.classList.add("bg-transparent");

    toTop.style.display = "none";
  }
};