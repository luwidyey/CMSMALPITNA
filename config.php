<?php
$host = "localhost";
$user = "root";
$password = "";  // Use your MySQL password if set
$dbname = "signup_db";  // Make sure this matches your actual database name

// Create a database connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set character encoding to avoid issues with special characters
$conn->set_charset("utf8");
?>