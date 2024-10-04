const gallery = document.getElementById('gallery');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const scrollAmount = 300; // Adjust as needed

leftArrow.addEventListener('click', () => {
    gallery.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
