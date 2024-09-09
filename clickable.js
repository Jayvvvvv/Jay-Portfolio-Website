// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');

    // Toggle the navigation menu on hamburger click
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the navigation menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});
