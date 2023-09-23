// Get the button element
const goToTopButton = document.getElementById('goToTopButton');

// Show the button when the user scrolls down 200 pixels
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});
