// Main JavaScript file for 67GG website

document.addEventListener('DOMContentLoaded', function() {
    console.log('67GG website loaded');
    
    // Initialize owner cards hover effects
    initializeOwnerCards();
});

function initializeOwnerCards() {
    const ownerCards = document.querySelectorAll('.owner-card');
    
    ownerCards.forEach(card => {
        const gifUrl = card.dataset.gif;
        const gifImg = card.querySelector('.owner-gif');
        
        if (gifUrl && gifImg) {
            gifImg.src = gifUrl;
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}