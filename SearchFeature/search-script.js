document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/BadGalRiirii/HTML5-ACTS/main/courses.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(data => {
            const courses = data.courses;
            const tableBody = document.querySelector("#courses-list tbody");

            for (let year in courses) {
                for (let semester in courses[year]) {
                    courses[year][semester].forEach(course => {
                        const row = `
                            <tr>
                                <td>${year}</td>
                                <td>${semester}</td>
                                <td>${course.code}</td>
                                <td>${course.description}</td>
                                <td>${course.credit}</td>
                            </tr>
                        `;
                        tableBody.innerHTML += row;
                    });
                }
            }

            // Add event listener to search input
            const searchInput = document.getElementById("search");
            searchInput.addEventListener("input", searchCourses);
        })
        .catch(error => console.error("Error fetching courses:", error));
});

function searchCourses() {
    const searchInput = document.getElementById("search").value.trim().toLowerCase();
    const tableRows = document.querySelectorAll("#courses-list tbody tr");

    tableRows.forEach(row => {
        const description = row.textContent.toLowerCase()
        if (description.includes(searchInput) || searchInput === "") {
            row.style.display = ""; // Show row
        } else {
            row.style.display = "none"; // Hide row
        }
    });
}
