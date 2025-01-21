// Content data for each section
const contentData = {
    dashboard: `
        <div class="content-header">
            <h2>Dashboard</h2>
        </div>
        <div class="content-body">
            <div class="welcome-section">
                <div class="welcome-text">
                    <h3 id="current-date"></h3>
                    <h1>Welcome Back, Student!</h1>
                    <p>Always stay updated in your student portal.</p>
                </div>
                <div class="welcome-image">
                    <img src="${profilePicture}" alt="Student Profile Picture">
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
                            <i class="fas fa-database"></i>
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
    `,
    syllabi: `
        <div class="content-header">
            <h2>Syllabus</h2>
        </div>
        <div class="content-body">
            <div class="syllabi-header">
                <div class="search-container">
                    <input type="text" id="syllabi-search" placeholder="Search..." />
                    <button id="syllabi-search-btn"><i class="material-icons">search</i></button>
                    </div>       
                </div>
            </div>
        </div>
         <!-- Custom Table -->
        <div class="custom-table-container">
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Semester</th>
                        <th>Academic Year</th>
                        <th>Program</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id='contentData'>
                
                </tbody>
            </table>
        </div>
        <!-- View Syllabus Modal -->
<div id="viewSyllabusModal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <!-- Content for viewing a syllabus will be dynamically injected -->
    </div>
</div>  

    `,
    assessment: `
        <div class="content-header">
            <h2>Assessment</h2>
        </div>
        <div class="content-body">
            <p>Details about assessments will be displayed here.</p>
        </div>
    `,
    message: `
   <div class="content-header">
            <h2>Message</h2>
        </div>
        <div class="content-body message-content">
            <div class="welcome-message">
                <h1>Welcome to the Message!</h1>
                <p>Connect and chat with everyone in our community instantly. Say hello and start a conversation!</p>
                <a href="loginchat.php" class="message-button" onclick="openInNewWindow('loginchat.php'); return false;">Go Now</a>
            </div>
        </div>
`,
};

function updateContent(contentKey) {
    const mainContent = document.getElementById("main-content");
    if (contentData[contentKey]) {
        mainContent.innerHTML = contentData[contentKey];

        // Reinitialize the real-time date after content is updated
        updateDateTime();

        // Initialize additional features for specific content
        if (contentKey === "message") {
            initializeMessaging();
        }
    } else {
        console.error(`Content key "${contentKey}" not found in contentData.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for sidebar links
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // Prevent default link behavior
            const contentKey = link.getAttribute("data-content");
            
            // Update content and reinitialize date
            updateContent(contentKey);
        });
    });

    // Default content (on page load)
    updateContent("dashboard");  // Load the dashboard by default
});

function openInNewWindow(url) {
    window.open(url, "loginc", "width=800,height=600");
}

function openInNewWindow(url) {
    window.open(url, "_blank", "width=800,height=600");
}
function fetchData() {
    fetch('getSyllabus.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('contentData');
            tbody.innerHTML = '';

            // Loop through data and create table rows
            data.forEach(item => {
                const row = document.createElement('tr');
                row.dataset.rowId = item.id; // Use database id as the unique identifier

                row.innerHTML = `
                    <td>${item.course_code}</td>
                    <td>${item.course_title}</td>
                    <td>${item.semester}</td>
                    <td>${item.academic_year}</td>
                    <td>${item.program}</td>
                    <td>
                        <button class="action-btn view" data-id="${item.id}">View</button>
                    </td>
                `;
                tbody.appendChild(row);
            });

             // Attach event listeners for view buttons
             document.querySelectorAll('.action-btn.view').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id; // Get the id from the button
                    viewSyllabus(id); // Call the viewSyllabus function
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

////////////// showing data in tbody
function updateContent(contentKey) {
    const mainContent = document.getElementById("main-content");
    if (contentData[contentKey]) {
        mainContent.innerHTML = contentData[contentKey];
        
        if (contentKey === "syllabi") {
            fetchData(); // Fetch data for the syllabus section
        }

        // Attach event listeners again after content update
        attachCreateSyllabusButtonListener();
        attachModalCloseListener();
        attachTabListeners();
    } else {
        console.error(`Content key "${contentKey}" not found in contentData.`);
    }
}

function viewSyllabus(id) {
    fetch(`getSyllabusDetails.php?id=${id}`)
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Populate modal with syllabus data
                const data = result.data;
                const modalContent = document.querySelector('#viewSyllabusModal .modal-content');
                modalContent.innerHTML = `
                     <span class="close-btn">&times;</span>
                     <!-- General Information Section -->
                    <div class="syllabus-section">
                        <h3>Program Details</h3>
                        <p><strong>Program:</strong> ${data.program}</p>
                        <p><strong>Semester:</strong> ${data.semester}</p>
                        <p><strong>Academic Year:</strong> ${data.academic_year}</p>
                    </div>

                    <!-- Course Information and Details -->
                    <div class="syllabus-section">
                        <h3>Course Details</h3>
                        <p><strong>Course Title:</strong> ${data.course_title}</p>
                        <p><strong>Course Code:</strong> ${data.course_code}</p>
                        <p><strong>Course Description:</strong> ${data.course_description}</p>
                        <p><strong>Credit Units:</strong> ${data.credit_units}</p>
                        <p><strong>Pre-requisites:</strong> ${data.pre_requisites}</p>
                        <p><strong>Lecture/Laboratory:</strong> 
                            ${data.lecture ? `<span class="checkbox checked">✔ Lecture</span>` : ''}
                            ${data.laboratory ? `<span class="checkbox checked">✔ Laboratory</span>` : ''}
                        </p>
                        <p><strong>Section:</strong> ${data.section}</p>
                        <p><strong>Schedule:</strong> ${data.schedule}</p>
                    </div>
                    
                    <!-- University Information -->
                    <div class="syllabus-section">
                        <h3>University Information</h3>
                        <p><strong>Core Values:</strong> ${data.core_values}</p>
                        <p><strong>Goals of College/Campus:</strong> ${data.goals}</p>
                        <p><strong>Objectives of the Department:</strong> ${data.objectives_dept}</p>

                    <!-- Program Objective Section -->
                    <div class="syllabus-section">
                        <p><strong>Program Educational Objectives</strong>${data.program_objective}</p>
                        <h3>Program/Student Outcomes</h3>
                        <h5>The student should:</h5>
                        <p>${data.text_1}, ${data.text_2}, ${data.text_3}, ${data.text_4}, ${data.text_5}, ${data.text_6}</p>
                        <p><strong>Program Educational Objectives Code:</strong></p>
                        <ul>
                            <li>${data.option1_1}, ${data.option1_2}, ${data.option1_3}, ${data.option1_4}, ${data.option1_5}, ${data.option1_6}</li>
                            <li>${data.option2_1}, ${data.option2_2}, ${data.option2_3}, ${data.option2_4}, ${data.option2_5}, ${data.option2_6}</li>
                            <li>${data.option3_1}, ${data.option3_2}, ${data.option3_3}, ${data.option3_4}, ${data.option3_5}, ${data.option3_6}</li>
                            <li>${data.option4_1}, ${data.option4_2}, ${data.option4_3}, ${data.option4_4}, ${data.option4_5}, ${data.option4_6}</li>
                            <li>${data.option5_1}, ${data.option5_2}, ${data.option5_3}, ${data.option5_4}, ${data.option5_5}, ${data.option5_6}</li>
                        </ul>
                    </div>
                    <!-- Schedule Details Section -->
                    <div class="syllabus-section">
                        <h3>Course Coverage</h3>
                        <p><strong>Week No:</strong> ${data.week_no}</p>
                        <p><strong>Intended Learning Outcomes (ILO):</strong> ${data.ilo}</p>
                        <p><strong>Topic:</strong> ${data.topic}</p>
                        <p><strong>Teaching and Learning Activities (TLA):</strong> ${data.tla}</p>
                        <p><strong>Mode of Delivery:</strong> ${data.delivery_mode}</p>
                        <p><strong>Resources Needed:</strong> ${data.resources_needed}</p>
                        <p><strong>Outcomes-based Assessment (OBA):</strong> ${data.oba}</p>
                        <p><strong>Due Date of Submission of Outputs:</strong> ${data.due_date}</p>
                    </div>

                    <!-- Additional Information Section -->
                    <div class="syllabus-section">
                        <h3>Details</h3>
                        <p><strong>Course Requirements:</strong> ${data.course_requirements}</p>
                        <p><strong>Grading System:</strong> ${data.grading_system}</p>
                    </div>
                    <!-- Additional Information Section -->
                    <div class="syllabus-section">
                        <h3>Policies</h3>
                        <p><strong>Policies:</strong> ${data.policies}</p>
                    </div>
                    <div class="syllabus-section">
                        <h3>References</h3>
                        <p><strong>References:</strong> ${data.references}</p>
                    </div>
                    <div class="syllabus-section">
                        <h3>History</h3>
                        <p><strong>Revision Number:</strong> ${data.revision_number}</p>
                        <p><strong>Revision Date:</strong> ${data.revision_date}</p>
                        <p><strong>Implementation Date:</strong> ${data.implementation_date}</p>
                        <p><strong>Revision Highlights:</strong> ${data.revision_highlights}</p>
                    </div>
                `;

                // Show the "View" modal
                const modal = document.getElementById('viewSyllabusModal');
                modal.style.display = 'block';

                // Attach close event
                const closeButton = modal.querySelector('.close-btn');
                closeButton.addEventListener('click', () => {
                    modal.style.display = 'none';
                });
            } else {
                alert(`Failed to load syllabus details: ${result.error}`);
            }
        })
        .catch(error => {
            console.error('Error fetching syllabus details:', error);
            alert('An error occurred while fetching syllabus details.');
        });
}

