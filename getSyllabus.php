<?php
// Database connection
$host = "localhost";
$user = "root";
$password = ""; // Use your MySQL password
$dbname = "syllabus_db";

$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data query
$sql = "SELECT course_code, course_title, semester, academic_year, implementation_date, revision_date FROM syllabus ";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    // Fetch all rows into the $data array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);

// Close connection
$conn->close();
?>