<?php
session_start(); // Start session for login management

// Database connection
$host = "localhost";
$user = "root";
$password = ""; // Use your MySQL password
$dbname = "signup_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $password = $_POST['password']; // Raw password to verify
    $role = $conn->real_escape_string($_POST['role']); // Role from the form

    // Query the database
    $sql = "SELECT * FROM users WHERE username = '$username' AND role = '$role'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the hashed password
        if (password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['username'] = $user['username'];
            $_SESSION['first_name'] = $user['first_name']; // Store the first name in the session
            $_SESSION['role'] = $user['role'];

            // Redirect to the student dashboard
            if ($role === "student") {
                header("Location: student-dashboard.php");
                exit();
            }
            if ($role === "teacher") {
                header("Location: teacher-dashboard.php");
                exit();
            }
            
        } else {
            echo "<script>alert('Invalid password!'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Invalid username or role!'); window.history.back();</script>";
    }

    $conn->close();
}

