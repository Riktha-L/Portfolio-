// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
      duration: 1000,
      once: true,
      offset: 100
  });

  // Initialize Typed.js
  const typedElement = document.querySelector('.typing-text');
  if (typedElement) {
      new Typed('.typing-text', {
          strings: [
              'Front-End Developer',
              'UI/UX Designer',
              'Problem Solver'
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          loop: true
      });
  }

  // Custom cursor
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
      document.addEventListener('mousemove', (e) => {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
      });

      // Add hover effect to clickable elements
      document.querySelectorAll('a, button').forEach(element => {
          element.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
          element.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
      });
  }

  // Scroll progress bar
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
      window.addEventListener('scroll', () => {
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = (window.scrollY / height) * 100;
          scrollProgress.style.width = `${progress}%`;
      });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
              navbar.querySelectorAll('a').forEach(link => {
                  link.style.color = '#1e293b'; // Dark text for scrolled state
              });
          } else {
              navbar.classList.remove('scrolled');
              navbar.querySelectorAll('a').forEach(link => {
                  link.style.color = '#ffffff'; // White text for top state
              });
          }
      });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
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

  // Counter animation for stats
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Animation speed in milliseconds

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
          if (count < target) {
              count += increment;
              counter.innerText = Math.ceil(count);
              setTimeout(updateCount, 1);
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  };

  // Trigger counter animation when stats section is in view
  const observeCounters = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observeCounters.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  counters.forEach(counter => observeCounters.observe(counter));

  // Skill bars animation
  const skillBars = document.querySelectorAll('.skill-progress');
  const observeSkills = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const percentage = entry.target.getAttribute('data-percentage');
              entry.target.style.transform = `scaleX(${percentage / 100})`;
              observeSkills.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observeSkills.observe(bar));

  // Contact form handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          // Basic form validation
          const formData = new FormData(contactForm);
          const data = Object.fromEntries(formData);
          
          if (!data.name || !data.email || !data.message) {
              showNotification('Please fill in all fields', 'error');
              return;
          }

          try {
              // Here you would typically send the form data to your server
              console.log('Form submitted:', data);
              showNotification('Message sent successfully!', 'success');
              contactForm.reset();
          } catch (error) {
              showNotification('Failed to send message. Please try again.', 'error');
          }
      });
  }

  // Notification system
  function showNotification(message, type = 'success') {
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.textContent = message;
      
      document.body.appendChild(notification);
      
      // Trigger fade in
      setTimeout(() => notification.classList.add('show'), 100);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => notification.remove(), 300);
      }, 3000);
  }

  // Project filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filterValue = button.getAttribute('data-filter');

          projects.forEach(project => {
              if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                  project.style.display = 'block';
                  setTimeout(() => project.style.opacity = '1', 50);
              } else {
                  project.style.opacity = '0';
                  setTimeout(() => project.style.display = 'none', 500);
              }
          });
      });
  });

  // Mobile menu toggle
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('active');
          menuButton.classList.toggle('active');
      });
  }
});

// Helper function for parallax effect
function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  if (item) {
      item.style.transform = `translateY(${distance * speed}px)`;
  }
}

// Parallax effect on scroll
window.addEventListener('scroll', () => {
  parallax('.hero-content', window.scrollY, 0.5);
  parallax('.hero-image', window.scrollY, 0.3);
});

// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 1000);
  }
});