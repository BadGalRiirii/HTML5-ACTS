document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/BadGalRiirii/HTML5-ACTS/main/courses.json")
        .then(response => response.json())
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
        })
        .catch(error => console.error("Error fetching courses:", error));
});

function searchCourses() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const tableRows = document.querySelectorAll("#courses-list tbody tr");

    tableRows.forEach(row => {
        const description = row.children[3].textContent.toLowerCase();
        if (description.includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
