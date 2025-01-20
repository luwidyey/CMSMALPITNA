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

$message = ""; // Variable to hold success or error messages

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $program = $conn->real_escape_string($_POST['program']);
    $semester = $conn->real_escape_string($_POST['semester']);
    $academicYear = $conn->real_escape_string($_POST['academic-year']);
    $courseTitle = $conn->real_escape_string($_POST['course-title']);
    $courseCode = $conn->real_escape_string($_POST['course-code']);
    $courseDescription = $conn->real_escape_string($_POST['course-description']);
    $preRequisites = $conn->real_escape_string($_POST['pre-requisites']);
    $creditUnits = (int) $_POST['credit-units'];
    $lecture = isset($_POST['lecture']) ? 'Lecture' : '';
    $laboratory = isset($_POST['laboratory']) ? 'Laboratory' : '';
    $section = $conn->real_escape_string($_POST['section']);
    $schedule = $conn->real_escape_string($_POST['schedule']);
    $policies = $conn->real_escape_string($_POST['policies']);
    $references = $conn->real_escape_string($_POST['references']);
    $coreValues = $conn->real_escape_string($_POST['core-values']);
    $goal = $conn->real_escape_string($_POST['goal']);
    $objectivesDept = $conn->real_escape_string($_POST['objective-dept']);
    $revisionNumber = (int) $_POST['revision-number'];
    $revisionDate = $conn->real_escape_string($_POST['revision-date']);
    $implementationDate = $conn->real_escape_string($_POST['implementation-date']);
    $revisionHighlights = $conn->real_escape_string($_POST['revision-highlights']);
    $programObjective = $conn->real_escape_string($_POST['program-objective']);
    // New fields
    $courseRequirements = $conn->real_escape_string($_POST['course-requirements']);
    $gradingSystem = $conn->real_escape_string($_POST['grading-system']);
    $weekNo = (int) $_POST['week-no'];
    $ilo = $conn->real_escape_string($_POST['ilo']);
    $topic = $conn->real_escape_string($_POST['topic']);
    $tla = $conn->real_escape_string($_POST['tla']);
    $deliveryMode = $conn->real_escape_string($_POST['delivery-mode']);
    $resourcesNeeded = $conn->real_escape_string($_POST['resources-needed']);
    $oba = $conn->real_escape_string($_POST['oba']);
    $dueDate = $conn->real_escape_string($_POST['due-date']);
    $text_1 = $conn->real_escape_string($_POST['text-1']);
    $text_2 = $conn->real_escape_string($_POST['text-2']);
    $text_3 = $conn->real_escape_string($_POST['text-3']);
    $text_4 = $conn->real_escape_string($_POST['text-4']);
    $text_5 = $conn->real_escape_string($_POST['text-5']);
    $text_6 = $conn->real_escape_string($_POST['text-6']);
    // Add new checkbox fields for options (outcomes)
    $option1_1 = isset($_POST['option1-1']) ? 1 : 0;
    $option2_1 = isset($_POST['option2-1']) ? 1 : 0;
    $option3_1 = isset($_POST['option3-1']) ? 1 : 0;
    $option4_1 = isset($_POST['option4-1']) ? 1 : 0;
    $option5_1 = isset($_POST['option5-1']) ? 1 : 0;

    $option1_2 = isset($_POST['option1-2']) ? 1 : 0;
    $option2_2 = isset($_POST['option2-2']) ? 1 : 0;
    $option3_2 = isset($_POST['option3-2']) ? 1 : 0;
    $option4_2 = isset($_POST['option4-2']) ? 1 : 0;
    $option5_2 = isset($_POST['option5-2']) ? 1 : 0;

    $option1_3 = isset($_POST['option1-3']) ? 1 : 0;
    $option2_3 = isset($_POST['option2-3']) ? 1 : 0;
    $option3_3 = isset($_POST['option3-3']) ? 1 : 0;
    $option4_3 = isset($_POST['option4-3']) ? 1 : 0;
    $option5_3 = isset($_POST['option5-3']) ? 1 : 0;

    $option1_4 = isset($_POST['option1-4']) ? 1 : 0;
    $option2_4 = isset($_POST['option2-4']) ? 1 : 0;
    $option3_4 = isset($_POST['option3-4']) ? 1 : 0;
    $option4_4 = isset($_POST['option4-4']) ? 1 : 0;
    $option5_4 = isset($_POST['option5-4']) ? 1 : 0;

    $option1_5 = isset($_POST['option1-5']) ? 1 : 0;
    $option2_5 = isset($_POST['option2-5']) ? 1 : 0;
    $option3_5 = isset($_POST['option3-5']) ? 1 : 0;
    $option4_5 = isset($_POST['option4-5']) ? 1 : 0;
    $option5_5 = isset($_POST['option5-5']) ? 1 : 0;

    $option1_6 = isset($_POST['option1-6']) ? 1 : 0;
    $option2_6 = isset($_POST['option2-6']) ? 1 : 0;
    $option3_6 = isset($_POST['option3-6']) ? 1 : 0;
    $option4_6 = isset($_POST['option4-6']) ? 1 : 0;
    $option5_6 = isset($_POST['option5-6']) ? 1 : 0;


    // Combine lecture and laboratory (if both selected)
    $courseDetails = trim("$lecture, $laboratory", ', ');

    // Convert short program values to full values
    $programValue = '';
    if ($program == 'bscs') {
        $programValue = 'Bachelor of Science in Computer Science';
    } else if ($program == 'it') {
        $programValue = 'Bachelor of Science in Information Technology';
    }

    // Insert data into the syllabus table
    $sql = "INSERT INTO syllabus (
            program, semester, academic_year, core_values, course_title, course_code, 
            course_description, credit_units, goals, objectives_dept, pre_requisites, policies, `references`, 
            section, schedule, revision_number, revision_date, implementation_date, revision_highlights, program_objective, resources_needed, grading_system, course_requirements, week_no, ilo, topic, tla, delivery_mode, oba, due_date,
            text_1, text_2, text_3, text_4, text_5, text_6,
            option1_3, option2_3, option3_3, option4_3, option5_3,
            option1_4, option2_4, option3_4, option4_4, option5_4,
            option1_5, option2_5, option3_5, option4_5, option5_5,
            option1_6, option2_6, option3_6, option4_6, option5_6
        ) VALUES (
            '$programValue', '$semester', '$academicYear', '$coreValues', '$courseTitle', '$courseCode',
            '$courseDescription', '$creditUnits', '$goal', '$objectivesDept', '$preRequisites', '$policies', '$references', 
            '$section', '$schedule', '$revisionNumber', '$revisionDate', '$implementationDate', '$revisionHighlights', '$programObjective', '$resourcesNeeded', '$gradingSystem', '$courseRequirements', '$weekNo', '$ilo', '$topic', '$tla', '$deliveryMode', '$oba', '$dueDate', 
            '$text_1', '$text_2','$text_3', '$text_4', '$text_5', '$text_6',
            '$option1_3', '$option2_3', '$option3_3', '$option4_3', '$option5_3',
            '$option1_4', '$option2_4', '$option3_4', '$option4_4', '$option5_4',
            '$option1_5', '$option2_5', '$option3_5', '$option4_5', '$option5_5',
            '$option1_6', '$option2_6', '$option3_6', '$option4_6', '$option5_6'
        )";

    if ($conn->query($sql) === TRUE) {
        $message = "Syllabus added successfully!";
        echo "<script>
                setTimeout(function() {
                    window.location.href = 'teacher-dashboard.php';
                }, 3000);
            </script>";
    } else {
        $message = "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection