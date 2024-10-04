const socialIcons = document.querySelector('.social-icons');

socialIcons.addEventListener('scroll', () => {
  const scrollLeft = socialIcons.scrollLeft;
  const scrollWidth = socialIcons.scrollWidth;
  const clientWidth = socialIcons.clientWidth;

  if (scrollLeft === 0) {
    // Left arrow
    socialIcons.previousElementSibling.style.width = '50px';
  } else if (scrollLeft + clientWidth === scrollWidth) {
    // Right arrow
    socialIcons.nextElementSibling.style.width = '50px';
  } else {
    // Current image
    socialIcons.previousElementSibling.style.width = '70%';
    socialIcons.nextElementSibling.style.width = '70%';
  }
});