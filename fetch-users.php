<?php
$host = "localhost";
$username = "root"; // Change if needed
$password = ""; // Change if needed
$dbname = "signup_db";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch users with role = 'student'
$sql = "SELECT id, username, first_name, last_name, email FROM users WHERE role = 'student'";
$result = $conn->query($sql);

$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Return JSON response
echo json_encode($users);

$conn->close();
?>