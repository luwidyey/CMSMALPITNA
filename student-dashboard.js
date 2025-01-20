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

