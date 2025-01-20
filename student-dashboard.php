<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username']) || $_SESSION['role'] !== 'student') {
    header("Location: login-student.html");
    exit();
}


// Database connection
$host = "localhost";  
$user = "root";
$password = "";
$dbname = "signup_db";
$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user's details
$username = $_SESSION['username'];
$sql = "SELECT first_name, profile_picture FROM users WHERE username = '$username'";
$result = $conn->query($sql);
$user = $result->fetch_assoc();

// Fallback to default profile picture if none is set
$profile_picture = !empty($user['profile_picture']) && file_exists($user['profile_picture']) 
    ? htmlspecialchars($user['profile_picture']) 
    : 'default.png';

// Store the first name in the session for display
$_SESSION['first_name'] = $user['first_name'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="student-dashboard.css">
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
                <button class="dropbtn"><?php echo htmlspecialchars($_SESSION['first_name']); ?> <i class="material-icons">arrow_drop_down</i></button>
                <div class="dropdown-content">
                    <a href="myaccount.php">My Account</a>
                    <a href="logout.php">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <span class="material-icons profile-icon">account_circle</span>
            <p><?php echo htmlspecialchars($_SESSION['first_name']); ?></p>    
        </div>
        <ul>
            <li><a href="#" data-content="dashboard"><i class="material-icons">dashboard</i> <span>Dashboard</span></a></li>
            <li><a href="#" data-content="assessment"><i class="material-icons">people</i> <span>Assessment</span></a></li>
            <li><a href="#" data-content="message"><i class="material-icons">assignment</i> <span>Message</span></a></li>
        </ul>
    </div>

    <!-- Main Content -->
    <div id="main-content" class="content">
        <div class="content-header">
            <h2>Dashboard</h2>
        </div>
        <div class="content-body">
            <div class="welcome-section">
                <div class="welcome-text">
                    <!-- Real-time date -->
                    <h3 id="current-date"></h3>
                    <h1>Welcome Back, <?php echo htmlspecialchars($_SESSION['first_name']); ?>!</h1>
                    <p>Always stay updated in your student portal.</p>
                </div>
                <div class="welcome-image">
                    <img src="<?php echo $profile_picture; ?>" alt="Student Profile Picture">
                </div>
            </div>
            <div class="enrolled-courses">
                <div class="enrolled-header">
                    <h3>Enrolled Courses</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="course-cards-container">
                    <div class="course-card">
                        <div class="course-icon">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <div class="course-content">
                            <h4>Object-Oriented Programming</h4>
                            <button class="view-button">View</button>
                        </div>
                    </div>
                    <div class="course-card">
                        <div class="course-icon">
                            <i class="fas fa-database"></             i>
                        </div>
                        <div class="course-content">
                            <h4>Fundamentals of Database Systems</h4>
                            <button class="view-button">View</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Daily Notice Section -->
            <div class="daily-notice">
                <div class="notice-header">
                    <h3>Daily Notice</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="notice-items">
                    <div class="notice-item">
                        <h4>Prelim payment due</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#">See more</a>
                    </div>
                    <div class="notice-item">
                        <h4>Exam schedule</h4>
                        <p>Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <a href="#">See more</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <script>
        // Pass profile picture to JS
        const profilePicture = "<?php echo $profile_picture; ?>";

        // Function to update the current date in real time
        function updateDateTime() {
            const dateElement = document.getElementById('current-date');
            const now = new Date();

            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            };
            
            dateElement.textContent = now.toLocaleDateString('en-US', options);
        }

        // Update the date every second
        setInterval(updateDateTime, 1000);

        // Initialize the date when the page loads
        document.addEventListener('DOMContentLoaded', updateDateTime);
    </script>

    <script src="student-dashboard.js"></script>
</body>
</html>
