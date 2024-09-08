// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle login and signup button clicks
    const loginButton = document.querySelector('.js-button');
    const signupButton = document.querySelector('.js-button2');
    
    loginButton.addEventListener('click', function() {
        alert('Log In button clicked');
    });

    signupButton.addEventListener('click', function() {
        alert('Sign Up button clicked');
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

    // Handle Sign Up form submission
    const homeSignupButton = document.querySelector('.home-signup');
    const homeInput = document.querySelector('.home-input');
    
    if (homeSignupButton && homeInput) {
        homeSignupButton.addEventListener('click', function() {
            const inputValue = homeInput.value;
            if (inputValue) {
                alert(You entered: ${inputValue});
            } else {
                alert('Please enter a value.');
            }
        });
    }

    // Example of showing an alert for Find Doctor button
    const findDoctorButton = document.querySelector('.find-dr');
    if (findDoctorButton) {
        findDoctorButton.addEventListener('click', function() {
            alert('Find Doctor Now button clicked');
        });
    }

    // Example of showing an alert for Submit Here button
    const submitHereButton = document.querySelector('.submit-here');
    if (submitHereButton) {
        submitHereButton.addEventListener('click', function() {
            alert('Submit Here button clicked');
        });
    }
});