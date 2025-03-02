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