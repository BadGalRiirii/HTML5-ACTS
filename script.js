document.addEventListener("DOMContentLoaded", () => {
  fetch("https://raw.githubusercontent.com/BadGalRiirii/HTML5-ACTS/main/courses.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector("#courses-list tbody");
      const courses = data.courses;

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
