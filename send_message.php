<?php
session_start();
$host = "localhost";
$user = "root";
$password = "";
$dbname = "signup_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Unauthorized"]);
    exit;
}

$thread_id = intval($_POST['thread_id']);
$sender_id = intval($_SESSION['user_id']);
$recipient_id = intval($_POST['recipient_id']);
$body = trim($_POST['body']);

if (empty($body)) {
    echo json_encode(["status" => "error", "message" => "Message body cannot be empty"]);
    exit;
}

$sql = "INSERT INTO messages (thread_id, sender_id, recipient_id, body) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiis", $thread_id, $sender_id, $recipient_id, $body);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send message"]);
}

$stmt->close();
$conn->close();
?>
