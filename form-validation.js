document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your User ID
  emailjs.init("narcWMzlbOcVBAIFm"); // Replace with your actual User ID from EmailJS dashboard

  // Select the contact form
  const contactForm = document.querySelector('.contact-form');

  // Add submit event listener
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Basic form validation
      if (!validateForm()) {
          return;
      }

      // Disable submit button to prevent multiple submissions
      const submitButton = contactForm.querySelector('.submit-button');
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Collect form data
      const formData = {
          name: document.getElementById('name').value.trim(),
          email: document.getElementById('email').value.trim(),
          subject: document.getElementById('subject').value.trim() || 'Portfolio Contact Form',
          message: document.getElementById('message').value.trim()
      };

      // Send email using EmailJS
      emailjs.send(
        "service_3ycta4m",   // EmailJS Service ID
          "template_7atwd6z", // EmailJS Template ID
          {
              from_name: formData.name,
              from_email: formData.email,
              to_email: 'riktha.l2022ai-ml@sece.ac.in', // Your receiving email
              subject: formData.subject,
              message: formData.message
          }
      ).then(
          function(response) {
              // Success handling
              showNotification('Message sent successfully!', 'success');
              contactForm.reset();
              submitButton.disabled = false;
              submitButton.textContent = 'Send Message';
          },
          function(error) {
              // Error handling
              console.error('Email send error:', error);
              showNotification('Failed to send message. Please try again.', 'error');
              submitButton.disabled = false;
              submitButton.textContent = 'Send Message';
          }
      );
  });

  // Form validation function
  function validateForm() {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let isValid = true;

      // Clear previous errors
      clearValidationErrors();

      // Name validation
      if (name.value.trim() === '') {
          showError(name, 'Name is required');
          isValid = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === '') {
          showError(email, 'Email is required');
          isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
          showError(email, 'Invalid email format');
          isValid = false;
      }

      // Message validation
      if (message.value.trim() === '') {
          showError(message, 'Message is required');
          isValid = false;
      }

      return isValid;
  }

  // Error handling functions
  function showError(inputElement, message) {
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      
      inputElement.classList.add('input-error');
      inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
  }

  function clearValidationErrors() {
      const existingErrors = document.querySelectorAll('.error-message');
      existingErrors.forEach(error => error.remove());

      const errorInputs = document.querySelectorAll('.input-error');
      errorInputs.forEach(input => input.classList.remove('input-error'));
  }

  // Notification function
  function showNotification(message, type) {
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.textContent = message;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
          document.body.removeChild(notification);
      }, 3000);
  }
});