<?php
header('Content-Type: application/json');

// Database connection
$host = "localhost";
$user = "root";
$password = "";
$dbname = "syllabus_db";
$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = isset($_GET['id']) ? (int) $_GET['id'] : null;

    if (!$id || !is_numeric($id)) {
        echo json_encode(["success" => false, "error" => "Invalid or missing ID."]);
        exit;
    }

    $sql = "SELECT * FROM syllabus WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode(["success" => true, "data" => $result->fetch_assoc()]);
    } else {
        echo json_encode(["success" => false, "error" => "Syllabus not found."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid request method."]);
}

$conn->close();
?>