<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login-student.php");
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

// Fetch user data
$username = $_SESSION['username'];
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);
$user = $result->fetch_assoc();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_FILES['profile_picture']) && $_FILES['profile_picture']['error'] === UPLOAD_ERR_OK) {
        $target_dir = "uploads/";
        $file_extension = pathinfo($_FILES["profile_picture"]["name"], PATHINFO_EXTENSION);
        $unique_filename = $target_dir . $username . "_" . time() . "." . $file_extension;

        if (move_uploaded_file($_FILES["profile_picture"]["tmp_name"], $unique_filename)) {
            $update_image_sql = "UPDATE users SET profile_picture = '$unique_filename' WHERE username = '$username'";
            $conn->query($update_image_sql);
        }
    }

    // Update other user details
    $new_username = $conn->real_escape_string($_POST['username']);
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $birth_date = $_POST['birth_date'];
    $contact = $conn->real_escape_string($_POST['contact']);
    $civil_status = $conn->real_escape_string($_POST['civil_status']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = !empty($_POST['password']) ? password_hash($_POST['password'], PASSWORD_DEFAULT) : $user['password'];

    $update_sql = "UPDATE users 
                   SET username = '$new_username',
                       first_name = '$first_name',
                       last_name = '$last_name',
                       birth_date = '$birth_date',
                       contact = '$contact',
                       civil_status = '$civil_status',
                       email = '$email',
                       password = '$password'
                   WHERE username = '$username'";

    if ($conn->query($update_sql) === TRUE) {
        $_SESSION['username'] = $new_username;
        echo "<script>alert('Details updated successfully!');</script>";
        echo "<script>window.location.href = 'myaccount.php';</script>";
    } else {
        echo "<script>alert('Error updating details.');</script>";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Account</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="myacount.css">
</head>
<body>
    <div class="container">
        <h1>My Account</h1>

        <div class="details-container">
            <div class="current-details">
                <h2>Current Details</h2>
                <div class="profile-image">
                    <?php 
                    $profileImage = !empty($user['profile_picture']) && file_exists($user['profile_picture']) 
                        ? htmlspecialchars($user['profile_picture']) 
                        : 'default.png';
                    ?>
                    <img src="<?php echo $profileImage; ?>" alt="Profile Picture">
                </div>
                <p><strong>Username:</strong> <?php echo htmlspecialchars($user['username']); ?></p>
                <p><strong>First Name:</strong> <?php echo htmlspecialchars($user['first_name']); ?></p>
                <p><strong>Last Name:</strong> <?php echo htmlspecialchars($user['last_name']); ?></p>
                <p><strong>Birth Date:</strong> <?php echo htmlspecialchars($user['birth_date']); ?></p>
                <p><strong>Contact:</strong> <?php echo htmlspecialchars($user['contact']); ?></p>
                <p><strong>Civil Status:</strong> <?php echo htmlspecialchars($user['civil_status']); ?></p>
                <p><strong>Email:</strong> <?php echo htmlspecialchars($user['email']); ?></p>
                <p><strong>Role:</strong> <?php echo htmlspecialchars($user['role']); ?></p>
            </div>

            <div class="update-form">
    <h2>Update Details</h2>
    <form action="myaccount.php" method="POST" enctype="multipart/form-data">
    <div class="form-group">
        <label for="profile_picture">Profile Picture:</label>
        <div class="profile-image-update">
            <img src="<?php echo $profileImage; ?>" alt="Profile Preview">
            <div class="file-upload-container">
                <input type="file" name="profile_picture" id="profile_picture">
                <button type="submit" name="upload_image">Upload</button>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>
    </div>
    <div class="form-group">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" value="<?php echo htmlspecialchars($user['first_name']); ?>" required>
    </div>
    <div class="form-group">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value="<?php echo htmlspecialchars($user['last_name']); ?>" required>
    </div>
    <div class="form-group">
        <label for="birth_date">Birth Date:</label>
        <input type="date" id="birth_date" name="birth_date" value="<?php echo htmlspecialchars($user['birth_date']); ?>" required>
    </div>
    <div class="form-group">
        <label for="contact">Contact:</label>
        <input type="text" id="contact" name="contact" value="<?php echo htmlspecialchars($user['contact']); ?>" required>
    </div>
    <div class="form-group">
        <label for="civil_status">Civil Status:</label>
        <select id="civil_status" name="civil_status" required>
            <option value="Single" <?php if ($user['civil_status'] === "Single") echo "selected"; ?>>Single</option>
            <option value="Married" <?php if ($user['civil_status'] === "Married") echo "selected"; ?>>Married</option>
            <option value="Other" <?php if ($user['civil_status'] === "Other") echo "selected"; ?>>Other</option>
        </select>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <small>Leave blank if you do not want to change your password.</small>
    </div>
    <button type="submit">Update Details</button>
</form>

</div>

        </div>

        <div class="back-link">
            <a href="student-dashboard.php">Back to Dashboard</a>
        </div>
    </div>
</body>
</html>
