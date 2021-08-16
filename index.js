// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("myNavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    console.log("window.pageYOffset: " + window.pageYOffset);
    console.log("sticky: " + sticky);
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function toggleResponsive() {
  var x = document.getElementById("myNavbar");
  if (x.className.includes("navbar")) {
    x.classList.add("responsive");
  } else {
    x.classList.add("navbar");
  }
}
