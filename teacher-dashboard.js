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
                    <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <div class="create-syllabus-btn-container">
                        <button id="create-syllabus-btn">Create Syllabus</button>
                    </div>       
                </div>
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
    <tbody>
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
            <h2>Instructor</h2>
        </div>
        <div class="content-body">
            <p>Details about enrolled students will be displayed here.</p>
        </div>
    `,
    message: `
        <div class="content-header">
            <h2>Message</h2>
        </div>
        <div class="content-body">
            <p>Instructors.</p>
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