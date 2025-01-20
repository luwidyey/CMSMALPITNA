// Content data for each section
const contentData = {
    dashboard: `
        <div class="content-header">
        <h2>Dashboard</h2>
    </div>
    <div class="content-body">
        <div class="card-container">
            <!-- Total Students Card -->
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h3>Total Students</h3>
                <p>123</p>
            </div>
            
            <!-- CS Students Card -->
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-user-graduate"></i>
                </div>
                <h3>CS Students</h3>
                <p>70</p>
            </div>
            
            <!-- IT Students Card -->
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <h3>IT Students</h3>
                <p>53</p>
            </div>
            
            <!-- Instructors Card -->
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Instructors</h3>
                <p>15</p>
            </div>
        </div>

        
        <!-- Student Distribution Chart -->
        <div class="chart-container">
            <h3>Student Distribution</h3>
            <canvas id="studentsChart"></canvas>
        </div>
    `,
    students: `
        <div class="content-header">
            <h2>Students</h2>
        </div>
        <div class="content-body">
            <p>Details about enrolled students will be displayed here.</p>
        </div>
    `,
    instructors: `
        <div class="content-header">
            <h2>Instructors</h2>
        </div>
        <div class="content-body">
            <p>Instructors.</p>
        </div>
    `,
    reports: `
        <div class="content-header">
            <h2>Reports</h2>
        </div>
        <div class="content-body">
            <p>Reports and insights will be available here.</p>
        </div>
    `
};

// Function to update the main content area
function updateContent(contentKey) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = contentData[contentKey];
}

// Function to toggle the sidebar (if needed)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('expanded');
}

// Function to handle active state for sidebar links
function setActiveLink(activeLink) {
    // Remove the active class from all links
    document.querySelectorAll(".sidebar ul li").forEach((li) => {
        li.classList.remove("active");
    });

    // Add the active class to the parent <li> of the clicked link
    activeLink.parentElement.classList.add("active");
}

// Add click event listeners to all sidebar links
document.querySelectorAll(".sidebar ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const contentKey = link.getAttribute("data-content");
        
        // Update content
        updateContent(contentKey);

        // Set the active link
        setActiveLink(link);
    });
});

// Default view: Set "Dashboard" as active and load its content
document.addEventListener("DOMContentLoaded", () => {
    const defaultLink = document.querySelector('.sidebar ul li a[data-content="dashboard"]');
    if (defaultLink) {
        setActiveLink(defaultLink);
        updateContent("dashboard");
    }
});

// Function to update the main content area
function updateContent(contentKey) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = contentData[contentKey];

    // Initialize the Student Distribution chart if the dashboard is loaded
    if (contentKey === "dashboard") {
        const studentsCtx = document.getElementById('studentsChart').getContext('2d');
        new Chart(studentsCtx, {
            type: 'bar', // Change chart type to "bar"
            data: {
                labels: ['CS Students', 'IT Students', 'Total Students'],
                datasets: [{
                    label: 'Number of Students',
                    data: [70, 53, 123],
                    backgroundColor: ['#4caf50', '#56c27c', '#38a169'],
                    hoverBackgroundColor: ['#388e3c', '#45b36b', '#2e7d32'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false // Hide legend for simplicity
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.raw} Students`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Categories',
                            font: {
                                size: 14
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Number of Students',
                            font: {
                                size: 14
                            }
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
