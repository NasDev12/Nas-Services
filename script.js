// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Review Stars
const stars = document.querySelectorAll('.star');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        const rating = this.dataset.rating;
        highlightStars(rating);
    });

    star.addEventListener('mouseout', function() {
        highlightStars(currentRating);
    });

    star.addEventListener('click', function() {
        currentRating = this.dataset.rating;
        highlightStars(currentRating);
    });
});

function highlightStars(rating) {
    stars.forEach(star => {
        const starRating = star.dataset.rating;
        star.classList.toggle('active', starRating <= rating);
    });
}

// Review Form
const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    
    // Here you would typically send the review data to a server
    console.log('Review submitted:', {
        rating: currentRating,
        text: reviewText
    });

    // Reset form
    currentRating = 0;
    highlightStars(0);
    reviewForm.reset();
});

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the contact form data to a server
    console.log('Contact form submitted:', data);
    
    // Reset form
    contactForm.reset();
});