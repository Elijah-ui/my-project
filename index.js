// When the login button is clicked
document.getElementById('js-button.button').addEventListener('click', async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login' })  // Send only the action or status
    });
  
    const result = await response.json();
    alert(result.message);  // Show response from the server
  });
  
  // When the sign up button is clicked
  document.getElementById('js-button2.button').addEventListener('click', async () => {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'signup' })
    });
  
    const result = await response.json();
    alert(result.message);  // Show response from the server
  });
  
  // When the book appointment button is clicked
  document.getElementById('book-button').addEventListener('click', async () => {
    const response = await fetch('/bookAppointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'bookAppointment' })
    });
  
    const result = await response.json();
    alert(result.message);  // Show response from the server
  });
   // When the find doctor button is clicked
   document.getElementById('find-dr-btn').addEventListener('click', async () => {
    const response = await fetch('/bookAppointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'bookAppointment' })
    });
  
    const result = await response.json();
    alert(result.message);  // Show response from the server
  });

  // When the register button is clicked
document.getElementById('submitBtn').addEventListener('click', async () => {
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'register' })
    });
  
    const result = await response.json();
    alert(result.message);  // Show response from the server
  });

























    // Smooth scrolling to sections when navbar links are clicked
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Play/Pause video on button click
    const playButton = document.getElementById('playButtton');
    const video = document.querySelector('video');
    
    if (playButton && video) {
        playButton.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                this.querySelector('.button-text').textContent = 'Pause Video';
            } else {
                video.pause();
                this.querySelector('.button-text').textContent = 'Play Video';
            }
        });
    }
    