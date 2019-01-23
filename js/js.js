window.onscroll = function() {myFunction()};       

var header = document.getElementById("header");
var nav = document.getElementsByTagName("a");

function myFunction() {
  if (window.pageYOffset > 100) {
    header.style.background = "#fff";
    header.classList.add("header");
    nav.style.color = "#111";
  } else {
    header.style.background = "transparent";
    header.classList.remove("header");
  }
}


