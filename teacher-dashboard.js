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
                    <h1>Welcome Back, Instructor!</h1>
                    <p>Always stay updated in your portal.</p>
                </div>
                 <div class="welcome-image">
                    <img src="${profilePicture}" alt="Student Profile Picture">
                </div>
            </div>
        <!-- Daily Notice Section -->
        <div class="daily-notice">
            <div class="notice-header">
                <h3>University Updates</h3>
                <div class="notice-item">
                    <h4>Finals Week Exam</h4>
                    <p>January 20 - 25, 2025</p>
                </div>
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
                    <button id="syllabi-search-btn" data-action="search"><i class="material-icons">search</i></button>
                    <div class="create-syllabus-btn-container">
                        <button id="create-syllabus-btn">Create Syllabus</button>
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

        <!-- Modal Structure for Create Syllabus -->
        <div id="createSyllabusModal" class="modal" style="display: none;">
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <h2>Create Syllabus</h2>
    <div class="tabs">
      <button class="tab-link active" data-tab="outline">Outline</button>
      <button class="tab-link" data-tab="university-info">University Information</button>
      <button class="tab-link" data-tab="objectives">Objectives</button>
      <button class="tab-link" data-tab="details">Details</button>
      <button class="tab-link" data-tab="policies">Policies</button>
      <button class="tab-link" data-tab="references">References</button>
      <button class="tab-link" data-tab="history">History</button>
    </div>
        <form id="syllabus-form" class="syllabus" action="syllabus.php" method="POST">
      <!-- Outline Tab Content -->
      <h1>Departmet of Computer Studies</h1>
      <div class="tab-content active" id="outline">
  <!-- Program Details -->
  <fieldset>
    <legend>Program Details</legend>
    <label for="program">Program</label>
    <select id="program" name="program" required>
      <option value="bscs">Bachelor of Science in Computer Science</option>
      <option value="it">Bachelor of Science in Information Technology</option>
    </select>

    <label for="semester">Semester</label>
    <select id="semester" name="semester" required>
      <option value="first">First Semester</option>
      <option value="second">Second Semester</option>
    </select>

    <label for="academic-year">Academic Year</label>
    <input type="text" id="academic-year" name="academic-year" placeholder="e.g., 2024-2025" required />
  </fieldset>

  <!-- Course Information -->
  <fieldset>
    <legend>Course Information</legend>
    <label for="course-title">Course Title</label>
    <input type="text" id="course-title" name="course-title" required />

    <label for="course-code">Course Code</label>
    <input type="text" id="course-code" name="course-code" required />

    <label for="course-description">Course Description</label>
    <textarea id="course-description" name="course-description" required></textarea>
  </fieldset>

  <!-- Course Details -->
  <fieldset>
    <legend>Course Details</legend>

    <label for="pre-requisites">Pre-requisites</label>
    <input type="text" id="pre-requisites" name="pre-requisites" required />

    <label for="credit-units">Credit Units</label>
    <input type="text" id="credit-units" name="credit-units" required />

    <div class="checkbox-group">
      <input type="checkbox" id="lecture" name="lecture" value="lecture" />
      <label for="lecture">Lecture</label><br />
      <input type="checkbox" id="laboratory" name="laboratory" value="laboratory" />
      <label for="laboratory">Laboratory</label>
    </div>

    <label for="section">Section</label>
    <input type="text" id="section" name="section" required />

    <label for="schedule">Schedule</label>
    <input type="text" id="schedule" name="schedule" placeholder="e.g., Mon/Wed 10:00-12:00" required />
  </fieldset>
      </div>


      <!-- Empty Content for Other Tabs -->
      <div class="tab-content" id="university-info">
      <fieldset>
    <legend>University Information</legend>
    
    <label for="core-values">Core Values</label>
    <textarea id="core-values" name="core-values" required></textarea>

    <label for="goal">Goals of College/Campus</label>
    <textarea id="goal" name="goal" required></textarea>

    <label for="objective-dept">Objectives of the Department</label>
    <textarea id="objective-dept" name="objective-dept" required></textarea>

  </fieldset>
      </div>



      <div class="tab-content" id="objectives">
      <label for="program-objective">Program Educational Objectives (based on the program CMO)</label>
    <textarea id="program-objective" name="program-objective" required></textarea>
        <table>
    <thead>
      <tr>
        <th style="font-size: 15px;" >Program/Student Outcomes (based on the program CMO)</th>
        <th colspan="5" style="font-size: 15px;">Program Educational Objectives Code (based on the program CMO)</th>
      </tr>
      <tr>
        <th style="font-size: 12px;">The students should:</th>
        <th style="font-size: 12px;">1</th>
        <th style="font-size: 12px;">2</th>
        <th style="font-size: 12px;">3</th>
        <th style="font-size: 12px;">4</th>
        <th style="font-size: 12px;">5</th>
      </tr>
    </thead>
    <tbody id="contentData">    
      <tr>
        <td><textarea id="text-1" name="text-1" ></textarea></td>
    <td><input type="checkbox" id="option1-1" name="option1-1"></td>
    <td><input type="checkbox" id="option2-1" name="option2-1"></td>
    <td><input type="checkbox" id="option3-1" name="option3-1"></td>
    <td><input type="checkbox" id="option4-1" name="option4-1"></td>
    <td><input type="checkbox" id="option5-1" name="option5-1"></td>
  </tr>
  <tr>
    <td><textarea id="text-2" name="text-2" ></textarea></td>
    <td><input type="checkbox" id="option1-2" name="option1-2"></td>
    <td><input type="checkbox" id="option2-2" name="option2-2"></td>
    <td><input type="checkbox" id="option3-2" name="option3-2"></td>
    <td><input type="checkbox" id="option4-2" name="option4-2"></td>
    <td><input type="checkbox" id="option5-2" name="option5-2"></td>
  </tr>
  <tr>
    <td><textarea id="text-3" name="text-3" ></textarea></td>
    <td><input type="checkbox" id="option1-3" name="option1-3"></td>
    <td><input type="checkbox" id="option2-3" name="option2-3"></td>
    <td><input type="checkbox" id="option3-3" name="option3-3"></td>
    <td><input type="checkbox" id="option4-3" name="option4-3"></td>
    <td><input type="checkbox" id="option5-3" name="option5-3"></td>
  </tr>
  <tr>
    <td><textarea id="text-4" name="text-4" ></textarea></td>
    <td><input type="checkbox" id="option1-4" name="option1-4"></td>
    <td><input type="checkbox" id="option2-4" name="option2-4"></td>
    <td><input type="checkbox" id="option3-4" name="option3-4"></td>
    <td><input type="checkbox" id="option4-4" name="option4-4"></td>
    <td><input type="checkbox" id="option5-4" name="option5-4"></td>
  </tr>
  <tr>
    <td><textarea id="text-5" name="text-5" ></textarea></td>
    <td><input type="checkbox" id="option1-5" name="option1-5"></td>
    <td><input type="checkbox" id="option2-5" name="option2-5"></td>
    <td><input type="checkbox" id="option3-5" name="option3-5"></td>
    <td><input type="checkbox" id="option4-5" name="option4-5"></td>
    <td><input type="checkbox" id="option5-5" name="option5-5"></td>
  </tr>
  <tr>
    <td><textarea id="text-6" name="text-6" ></textarea></td>
    <td><input type="checkbox" id="option1-6" name="option1-6"></td>
    <td><input type="checkbox" id="option2-6" name="option2-6"></td>
    <td><input type="checkbox" id="option3-6" name="option3-6"></td>
    <td><input type="checkbox" id="option4-6" name="option4-6"></td>
    <td><input type="checkbox" id="option5-6" name="option5-6"></td>
      </tr>
    </tbody>
  </table>

  <fieldset>
    <legend>Course Coverage</legend>
    
    <label for="week-no">Week No.</label>
    <input type="number" id="week-no" name="week-no" required />

    <label for="ilo">Intended Learning Outcomes (ILO)</label>
    <textarea id="ilo" name="ilo" required></textarea>

    <label for="topic">Topic</label>
    <textarea id="topic" name="topic" required></textarea>

    <label for="tla">Teaching and Learning Activities (TLA)</label>
    <textarea id="tla" name="tla" required></textarea>

    <label for="delivery-mode">Mode of Delivery</label>
    <textarea id="delivery-mode" name="delivery-mode" required></textarea>

    <label for="resources-needed">Resources Needed</label>
    <textarea id="resources-needed" name="resources-needed" required></textarea>

    <label for="oba">Outcomes-base d Assessment (OBA)</label>
    <textarea id="oba" name="oba" required></textarea>

    <label for="due-date">Due Date of Submission of Outputs</label>
    <input type="date" id="due-date" name="due-date" required />

    </fieldset>
      </div>

       
      <div class="tab-content" id="details">
        <label for="course-requirements">Course Requirements</label>
        <textarea id="course-requirements" name="course-requirements" required></textarea>

        <label for="grading-system">Grading System</label>
        <textarea id="grading-system" name="grading-system" required></textarea>
      </div>

      <div class="tab-content" id="policies">
         <label for="policies">Policies</label>
    <textarea id="policies" name="policies" required></textarea>
      </div>
      <div class="tab-content" id="references">
       <label for="references">References</label>
    <textarea id="references" name="references" required></textarea>
      </div>
      <div class="tab-content" id="history">
      <fieldset>
    <legend>Revision History</legend>

    <label for="revision-number">Revision Number</label>
    <input type="number" id="revision-number" name="revision-number" required />

    <label for="revision-date">Date of Revision</label>
    <input type="date" id="revision-date" name="revision-date" required />

    <label for="implementation-date">Date of Implementation</label>
    <input type="date" id="implementation-date" name="implementation-date" required />

    <label for="revision-highlights">Highlights of Revision</label>
     <textarea id="revision-highlights" name="revision-highlights" required></textarea>


    </fieldset>
      </div>
         <button type="submit">Submit</button>
    </form>
    `,
    assessment: `
        <div class="content-header">
            <h2>Quizzes/Assessments/Exams</h2>
        </div>
        <div class="content-body">
            <p>Details about different types of assessment will be here.</p>
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

// Function to update the main content area
function updateContent(contentKey) {
    const mainContent = document.getElementById("main-content");
    if (contentData[contentKey]) {
        mainContent.innerHTML = contentData[contentKey];

        // Attach event listeners again after content update
        attachCreateSyllabusButtonListener();
        attachModalCloseListener();
        attachTabListeners();
    } else {
        console.error(`Content key "${contentKey}" not found in contentData.`);
    }
}

// Event listeners for sidebar navigation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // Prevent default link behavior
            const contentKey = link.getAttribute("data-content");
            updateContent(contentKey);
        });
    });

    // Default content on page load
    updateContent("dashboard");
});

// Function to open the modal
function openCreateSyllabusModal() {
    const modal = document.getElementById("createSyllabusModal");
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeCreateSyllabusModal() {
    const modal = document.getElementById("createSyllabusModal");
    modal.style.display = "none"; // Hide the modal
}

// Attach event listener to the "Create Syllabus" button
function attachCreateSyllabusButtonListener() {
    document.addEventListener("click", (e) => {
        if (e.target && e.target.id === "create-syllabus-btn") {
            e.preventDefault();
            console.log("Create Syllabus button clicked!");
            openCreateSyllabusModal();
        }
    });
}

// Attach event listener to close button in modal
function attachModalCloseListener() {
    document.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("close-btn")) {
            closeCreateSyllabusModal();
        }

        // Close modal if user clicks anywhere outside the modal
        const modal = document.getElementById("createSyllabusModal");
        if (event.target === modal) {
            closeCreateSyllabusModal();
        }
    });
}

// Function to handle tab switching inside the modal
function attachTabListeners() {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("data-tab");

            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add 'active' class to the clicked tab and corresponding content
            tab.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
}

// Real-time date update
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
                        <button class="action-btn edit">Edit</button>
                        <button class="action-btn delete" data-id="${item.id}">Delete</button>
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

            // Attach event listeners for delete buttons
            document.querySelectorAll('.action-btn.delete').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id; // Get the id from the button
                    deleteRow(id);
                });
            });
            attachSearchFunctionality();
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
function deleteRow(id) {
    const errorMessage = document.getElementById('error-message');
    if (!confirm("Are you sure you want to delete this row?")) {
        return;
    }

    fetch('deleteSyllabus.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${id}`
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                document.querySelector(`tr[data-row-id="${id}"]`).remove();
                alert('Row deleted successfully.');
                errorMessage.style.display = 'none';
            } else {
                errorMessage.textContent = `Failed to delete row: ${result.error}`;
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            errorMessage.textContent = 'An error occurred while trying to delete the row.';
            errorMessage.style.display = 'block';
            console.error('Error:', error);
        });
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

function attachCreateSyllabusButtonListener() {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'create-syllabus-btn') {
            const modal = document.getElementById('createSyllabusModal');
            modal.style.display = 'block'; // Show the "Create Syllabus" modal

            // Attach close event
            const closeButton = modal.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
    });
}


function openInNewWindow(url) {
    window.open(url, "loginc", "width=800,height=600");
}

function openInNewWindow(url) {
    window.open(url, "_blank", "width=800,height=600");
}

function attachSearchFunctionality() {
    const searchInput = document.getElementById('syllabi-search');
    const searchButton = document.getElementById('syllabi-search-btn');
    const tableRows = document.querySelectorAll('#contentData tr');
    const tbody = document.getElementById('contentData');

    if (!searchButton || !searchInput) {
        console.error("Search button or input field not found.");
        return;
    }

    // Add event listener to the search button
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        let hasResults = false;

        tableRows.forEach(row => {
            const courseCode = row.cells[0].textContent.toLowerCase().trim();
            const courseTitle = row.cells[1].textContent.toLowerCase().trim();
            const semester = row.cells[2].textContent.toLowerCase().trim();
            const academicYear = row.cells[3].textContent.toLowerCase().trim();
            const program = row.cells[4]?.textContent.toLowerCase().trim(); // Normalize program field

            if (
                courseCode.includes(query) ||
                courseTitle.includes(query) ||
                semester.includes(query) ||
                academicYear.includes(query) ||
                (program && program.includes(query)) // Check program field
            ) {
                row.style.display = ''; // Show matching rows
                hasResults = true;
            } else {
                row.style.display = 'none'; // Hide non-matching rows
            }
        });

        // Show "No results found" if no rows match
        if (!hasResults) {
            if (!document.getElementById('no-results-message')) {
                const noResultsRow = document.createElement('tr');
                noResultsRow.id = 'no-results-message';
                noResultsRow.innerHTML = `<td colspan="6" style="text-align: center;">No results found.</td>`;
                tbody.appendChild(noResultsRow);
            }
        } else {
            const noResultsMessage = document.getElementById('no-results-message');
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    });
}