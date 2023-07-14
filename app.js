// var menubar = document.querySelector("#menu-bar");
// var navbarList = document.querySelector(".navbar-list");

// navbarList.style.top = "-450px";

// menubar.onclick = function () {
//   if (navbarList.style.top == "-450px") {
//     navbarList.style.top = "50px";
//   } else navbarList.style.top = "-450px";
// };

var menuBar = document.querySelector("#menu-bar");
var navbarList = document.querySelector(".navbar-list");

navbarList.style.top = "-450px";

menuBar.onclick = function () {
  if (parseInt(navbarList.style.top) === -450) {
    navbarList.style.top = "50px";
  } else {
    navbarList.style.top = "-450px";
  }
};
