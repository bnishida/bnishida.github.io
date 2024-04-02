// JavaScript code to add active class to the current page link
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});
