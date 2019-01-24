window.onscroll = function() {myFunction()};       

var header = document.getElementById("header");
var a = header.getElementsByTagName("a");

function myFunction() {
  if (window.pageYOffset > 10) {
    header.className = "scroll";
    a.className = "aScroll";
    
} else {
    header.className = "";
  }
}
/*
window.onscroll = () => {
  const nav = document.querySelector('#header');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

window.onscroll = () => {
  const headerA = document.querySelector('#header a');
  if(this.scrollY <= 10) headerA.className = ''; else headerA.className = 'scrolla';
};
*/