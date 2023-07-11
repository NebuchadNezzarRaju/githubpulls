// JavaScript code for form validation
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validate the form fields
      var nameField = document.getElementById('name');
      var emailField = document.getElementById('email');
      var messageField = document.getElementById('message');
      var isValid = true;
  
      if (nameField.value.trim() === '') {
        isValid = false;
        showError(nameField, 'Name is required');
      } else {
        removeError(nameField);
      }
  
      if (emailField.value.trim() === '') {
        isValid = false;
        showError(emailField, 'Email is required');
      } else if (!validateEmail(emailField.value.trim())) {
        isValid = false;
        showError(emailField, 'Please enter a valid email address');
      } else {
        removeError(emailField);
      }
  
      if (messageField.value.trim() === '') {
        isValid = false;
        showError(messageField, 'Message is required');
      } else {
        removeError(messageField);
      }
  
      // Submit the form if all fields are valid
      if (isValid) {
        form.submit();
      }
    });
  
    function showError(field, message) {
      var errorContainer = field.nextElementSibling;
      if (errorContainer) {
        errorContainer.textContent = message;
      } else {
        errorContainer = document.createElement('span');
        errorContainer.className = 'error-message';
        errorContainer.textContent = message;
        field.parentNode.appendChild(errorContainer);
      }
      field.classList.add('error');
    }
  
    function removeError(field) {
      var errorContainer = field.nextElementSibling;
      if (errorContainer && errorContainer.classList.contains('error-message')) {
        field.parentNode.removeChild(errorContainer);
      }
      field.classList.remove('error');
    }
  
    function validateEmail(email) {
      // Use a regular expression to validate email format
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  