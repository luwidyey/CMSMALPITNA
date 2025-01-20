<?php
session_start(); // Start the session

// Destroy the session to log the user out
session_unset();  // Remove all session variables
session_destroy(); // Destroy the session

// Redirect the user to the login page
header("Location: login-teacher.html");
exit();
?>
