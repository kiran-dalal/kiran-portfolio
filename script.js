// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    
    // Perform form validation here (e.g., check for empty fields)
    
    // Do something with the form data (e.g., send it to a server-side script)
    
    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    
    // Show a success message or perform other actions
    alert('Form submitted successfully!');
  });
  