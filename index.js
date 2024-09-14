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

 // JavaScript to animate the counters
 const counters = document.querySelectorAll('.counter');
      
 counters.forEach(counter => {
   const target = +counter.getAttribute('data-target'); // Get the target number
   let current = 0;
   const increment = target / 100; // Adjust for speed

   const updateCounter = () => {
     if (current < target) {
       current += increment; // Increment the current value
       counter.innerText = Math.ceil(current); // Display the current value
       requestAnimationFrame(updateCounter); // Continue the animation
     } else {
       counter.innerText = target; // Ensure the final target value is shown
     }
   };

   // Start counting for each counter
   updateCounter();
 });

 document.getElementById("playButton").addEventListener("click", function() {
var video = document.getElementById("myVideo");

if (video.paused) {
video.play().catch(error => {
 console.log('Error playing the video:', error);
});
} else {
video.pause();
}
});
    