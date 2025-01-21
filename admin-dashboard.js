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
                <p id="total-students">Loading...</p>
            </div>
            
            <!-- Instructors Card -->
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Instructors</h3>
                <p id="total-instructors">Loading...</p>
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
       <div class="custom-table-container">
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id='contentData'>
                
                </tbody>
            </table>
        </div>
    `,
    instructors: `
        <div class="content-header">
           <h2>Instructors</h2>
        </div>
       <div class="custom-table-container">
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id='contentData-teacher'>
                
                </tbody>
            </table>
        </div>
    `,
};

// Function to update the main content area
function updateContent(contentKey) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = contentData[contentKey];

    

    // Initialize the Student Distribution chart if the dashboard is loaded
    if (contentKey === "dashboard") {
        loadDashboardData();
    }
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



// Function to load data dynamically into the dashboard
async function loadDashboardData() {
    try {
        const response = await fetch('fetch-dashboard-data.php'); // PHP script to fetch data dynamically
        const data = await response.json();

        // Update Total Students and Instructors
        document.getElementById('total-students').textContent = data.total_students;
        document.getElementById('total-instructors').textContent = data.total_instructors;

        // Initialize Chart.js
        const studentsCtx = document.getElementById('studentsChart').getContext('2d');
        new Chart(studentsCtx, {
            type: 'bar',
            data: {
                labels: ['Total Students', 'Instructors'],
                datasets: [{
                    label: 'Numbers',
                    data: [data.total_students, data.total_instructors],
                    backgroundColor: ['#4caf50', '#38a169'],
                    hoverBackgroundColor: ['#388e3c', '#2e7d32'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.raw}`;
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
                            text: 'Numbers',
                            font: {
                                size: 14
                            }
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

// Function to fetch and display users in the table
async function loadStudentsData() {
    try {
        const response = await fetch('fetch-users.php'); // Fetch data from PHP script
        const users = await response.json();

        const tbody = document.getElementById('contentData');
        tbody.innerHTML = ""; // Clear previous content

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>
            `;
            tbody.appendChild(row);
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const userId = e.target.getAttribute('data-id');
                if (confirm("Are you sure you want to delete this user?")) {
                    await deleteUser(userId);
                    loadStudentsData(); // Refresh table after deletion
                }
            });
        });

    } catch (error) {
        console.error('Error fetching student data:', error);
    }
}

// Function to delete a user (AJAX)
async function deleteUser(userId) {
    try {
        const response = await fetch('delete-student.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: userId })
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

// Load students data when "Students" section is clicked
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.sidebar ul li a[data-content="students"]').addEventListener("click", () => {
        loadStudentsData();
    });
});

// Function to fetch and display teachers in the table
async function loadTeachersData() {
    try {
        const response = await fetch('fetch-teachers.php'); // Fetch data from PHP script
        const teachers = await response.json();

        const tbody = document.getElementById('contentData-teacher');
        tbody.innerHTML = ""; // Clear previous content

        teachers.forEach(teacher => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${teacher.id}</td>
                <td>${teacher.username}</td>
                <td>${teacher.first_name}</td>
                <td>${teacher.last_name}</td>
                <td>${teacher.email}</td>
                <td><button class="delete-btn" data-id="${teacher.id}">Delete</button></td>
            `;
            tbody.appendChild(row);
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const teacherId = e.target.getAttribute('data-id');
                if (confirm("Are you sure you want to delete this teacher?")) {
                    await deleteTeacher(teacherId);
                    loadTeachersData(); // Refresh table after deletion
                }
            });
        });

    } catch (error) {
        console.error('Error fetching teacher data:', error);
    }
}

// Function to delete a teacher (AJAX)
async function deleteTeacher(teacherId) {
    try {
        const response = await fetch('delete-teachers.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: teacherId })
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error deleting teacher:', error);
    }
}

// Load teachers data when "instructors" section is clicked
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.sidebar ul li a[data-content="instructors"]').addEventListener("click", () => {
        loadTeachersData();
    });
});