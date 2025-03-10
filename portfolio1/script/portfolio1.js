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

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that should scroll to sections
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate header height (if you have a fixed header)
                const headerHeight = document.querySelector('header').offsetHeight || 0;
                
                // Get position of the target element
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                
                // Scroll with offset for header height and additional space
                window.scrollTo({
                    top: targetPosition - headerHeight - 20, // 20px additional space
                    behavior: 'smooth'
                });
            }
        });
    });
});

