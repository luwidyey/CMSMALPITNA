const toggleButtons = document.querySelectorAll('.toggle-buttons button');

  function toggleActive() {
  toggleButtons.forEach(button => button.classList.remove('active'));
  this.classList.add('active');
}

toggleButtons.forEach(button => {
  button.addEventListener('click', toggleActive);
});
 // Fetch the PHP-generated message
 const messageDiv = document.getElementById("message");
 const message = "<?php echo isset($message) ? $message : ''; ?>"; // PHP message

 // Display the message dynamically
 if (message.trim()) {
     messageDiv.textContent = message;

     // Add success or error styling
     if (message.toLowerCase().includes("error")) {
         messageDiv.classList.add("error");
     } else {
         messageDiv.innerHTML = '<span class="icon">✔️</span>' + message; // Add success icon
     }

     messageDiv.classList.add("show"); // Fade-in effect

     // Redirect if the message indicates success
     if (message.toLowerCase().includes("signup successful")) {
         let countdown = 3; // Time in seconds
         messageDiv.textContent = `Signup successful! Redirecting in ${countdown} seconds...`;

         const interval = setInterval(() => {
             countdown--;
             messageDiv.textContent = `Signup successful! Redirecting in ${countdown} seconds...`;

             if (countdown === 0) {
                 clearInterval(interval); // Stop countdown
                 window.location.href = "landing-page.html"; // Redirect
             }
         }, 1000); // Update every second
     }
 }