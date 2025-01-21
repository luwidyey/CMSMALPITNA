<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$students_query = "SELECT COUNT(*) AS total FROM users WHERE role = 'student'";
$teachers_query = "SELECT COUNT(*) AS total FROM users WHERE role = 'teacher'";

$students_result = $conn->query($students_query);
$teachers_result = $conn->query($teachers_query);

$total_students = $students_result->fetch_assoc()['total'] ?? 0;
$total_teachers = $teachers_result->fetch_assoc()['total'] ?? 0;

echo json_encode([
    'total_students' => $total_students,
    'total_instructors' => $total_teachers
]);

$conn->close();
?>
