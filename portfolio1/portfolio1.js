const image = document.querySelector('.portfolio-image');
    image.onerror = function() {
        console.error('Image failed to load:', image.src);
    };


 // Update copyright year automatically
 document.querySelector('.current-year').textContent = new Date().getFullYear();
    
 // Smooth scroll for all anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 
 // Back to top button visibility toggle
 const backToTopButton = document.querySelector('.back-to-top');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
         backToTopButton.classList.add('visible');
     } else {
         backToTopButton.classList.remove('visible');
     }
 });

 document.addEventListener('DOMContentLoaded', () => {
    // Select the "Contact Me" button
    const contactButton = document.querySelector('.gradient-button');
    
    // Add click event listener
    contactButton.addEventListener('click', (event) => {
        // Prevent default button behavior
        event.preventDefault();
        
        // Select the contact section
        const contactSection = document.getElementById('contact');
        
        // Scroll to the contact section smoothly
        contactSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});