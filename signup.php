<?php
// Database connection
$host = "localhost";
$user = "root";
$password = ""; // Use your MySQL password
$dbname = "signup_db";

$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = ""; // Variable to hold success or error messages

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $birth_date = $_POST['birth_date'];
    $contact = $conn->real_escape_string($_POST['contact']); // Add contact
    $civil_status = $conn->real_escape_string($_POST['civil_status']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure password hashing
    $role = $conn->real_escape_string($_POST['role']);
    $random_id = rand(time(), 10000000);
    // Insert data into the database
    $sql = "INSERT INTO users (unique_id, username, first_name, last_name, birth_date, contact, civil_status, email, password, role) 
            VALUES ('$random_id','$username', '$first_name', '$last_name', '$birth_date', '$contact', '$civil_status', '$email', '$password', '$role')";

    if ($conn->query($sql) === TRUE) {
        $message = "Signup successful! Redirecting to the landing page...";
        echo "<script>
            setTimeout(function() {
                window.location.href = 'landing-page.html';
            }, 3000);
        </script>";
    } else {
        $message = "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>