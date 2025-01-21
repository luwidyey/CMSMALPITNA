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

// Query to fetch users with role = 'teacher'
$sql = "SELECT id, username, first_name, last_name, email FROM users WHERE role = 'teacher'";
$result = $conn->query($sql);

$teachers = []; // Change variable name from $instructors to $teachers

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $teachers[] = $row;
    }
}

// Return JSON response
echo json_encode($teachers);

$conn->close();
?>
