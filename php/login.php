<?php
session_start(); // Start session for login management
// Database connection
$host = "localhost";
$user = "root";
$password = ""; // Use your MySQL password
$dbname = "signup_db";

$conn = new mysqli($host, $user, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $password = $_POST['password']; // Raw password to verify

    // Query the database
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the hashed password
        if (password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['username'] = $user['username'];
            $_SESSION['first_name'] = $user['first_name']; // Store the first name in the session
            $_SESSION['unique_id'] = $user['unique_id']; // Assuming unique_id is part of the users table

            // Update user status
            $status = "Active now";
            $unique_id = $user['unique_id'];
            $sql2 = "UPDATE users SET status = '$status' WHERE unique_id = '$unique_id'";

            if ($conn->query($sql2)) {
                echo "success";
            } else {
                echo "Something went wrong. Please try again!";
            }
        } else {
            echo "Email or Password is Incorrect!";
        }
    } else {
        echo "All input fields are required!";
    }

    $result->free(); // Free result set
}

$conn->close();
?>
