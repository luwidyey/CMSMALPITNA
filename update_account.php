<?php
session_start();
include 'config.php'; // Include your database connection script

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password']; // Optional: handle if password needs to be updated

    // Update the database
    $sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, username = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $first_name, $last_name, $email, $username, $_SESSION['user_id']);
    $stmt->execute();

    // Update session variables
    $_SESSION['username'] = $username;
    $_SESSION['first_name'] = $first_name;
    $_SESSION['last_name'] = $last_name;
    $_SESSION['email'] = $email;

    // Redirect to my account page with success message
    header("Location: myaccount.php?update=success");
    exit();
}
?>