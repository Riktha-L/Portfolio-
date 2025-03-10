
    // Wait for page to load
    window.addEventListener('load', function() {
        console.log("Navigation script started");
        
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-links a');
        
        // Add the CSS for active state
        const style = document.createElement('style');
        style.textContent = '.nav-links a.active { color: #8DC9F2 !important; font-weight: bold; }';
        document.head.appendChild(style);
        
        // Function to update active link
        function updateActiveLink() {
            const scrollPos = window.scrollY;
            
            // Check each section's position
            document.querySelectorAll('section[id]').forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                // If we're scrolled into this section
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to the current section's link
                    document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
                    console.log(`Activated: ${sectionId}`);
                }
            });
        }
        
        // Initial check
        updateActiveLink();
        
        // Add scroll listener
        window.addEventListener('scroll', updateActiveLink);
    });
