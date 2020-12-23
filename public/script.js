const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('open');
//   links.forEach((link) => {
//     link.classList.toggle('fade');
//   });
// });
