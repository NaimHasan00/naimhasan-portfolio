// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// hamburg changing, tap to change in mobile oc
const heroPhotoWrap = document.querySelector('.hero-photo-wrap');
const heroPhoto = document.getElementById('hero-photo');

const pics = [
  'photos for pic/naim aura.jpg',
  'photos for pic/naim aura 2.jpg',
];
let picIndex = 0;
// k pola, ja por, ar koto code korbi 
heroPhotoWrap.addEventListener('click', () => {
  picIndex = (picIndex + 1) % pics.length;
  heroPhoto.style.opacity = 0;
  setTimeout(() => {
    heroPhoto.src = pics[picIndex];
    heroPhoto.style.opacity = 1;
  }, 200);
});

