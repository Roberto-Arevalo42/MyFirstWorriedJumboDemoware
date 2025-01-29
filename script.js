// Create and style the "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '16px';
backToTopButton.style.color = 'white';
backToTopButton.style.backgroundColor = '#00adb5';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

// Show/Hide button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show button after scrolling down 200px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
