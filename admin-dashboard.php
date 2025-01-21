<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data
$total_students_query = "SELECT COUNT(*) AS total FROM users WHERE role = 'student'";
$instructors_query = "SELECT COUNT(*) AS total FROM users WHERE role = 'teacher'";

// Get the results
$total_students_result = $conn->query($total_students_query);
$instructors_result = $conn->query($instructors_query);

if ($total_students_result && $instructors_result) {
    $total_students = $total_students_result->fetch_assoc()['total'] ?? 0;
    $instructors = $instructors_result->fetch_assoc()['total'] ?? 0;
} else {
    $total_students = 0;
    $instructors = 0;
}

// Close the connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="admin-dashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <!-- Navbar -->
    <div class="navbar">
        <div class="navbar-left">
            <img src="image.png" alt="AcademiCore Logo" class="logo">
            <h1>Academi<span class="core">Core</span></h1>
        </div>
        <div class="navbar-right">
            <span class="material-icons profile-icon">account_circle</span>
            <div class="dropdown">
                <button class="dropbtn">admin <i class="material-icons">arrow_drop_down</i></button>
                <div class="dropdown-content">
                    <a href="#">My Account</a>
                    <a href="login-admin.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    <div class="sidebar">
        <div class="sidebar-header">
            <span class="material-icons profile-icon">account_circle</span>
            <p>Admin</p>
        </div>
        <ul>
            <li><a href="#" data-content="dashboard"><i class="material-icons">dashboard</i> <span>Dashboard</span></a>
            </li>
            <li><a href="#" data-content="students"><i class="material-icons">people</i> <span>Students</span></a></li>
            <li><a href="#" data-content="instructors"><i class="material-icons">assignment</i>
                    <span>Instructors</span></a></li>
        </ul>
    </div>

    <div id="main-content" class="content">
        <div class="content-header">
            <h2>Dashboard</h2>
        </div>
        <div class="content-body">
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h3>Total Students</h3>
                <p><?php echo $total_students; ?></p>
            </div>
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Instructors</h3>
                <p><?php echo $instructors; ?></p>
            </div>
        </div>
    </div>

    <script src="admin-dashboard.js"></script>
</body>

</html>