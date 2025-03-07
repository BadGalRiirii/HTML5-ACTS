document.addEventListener("DOMContentLoaded", () => {
    fetch("courses.json")
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector("#courses-list tbody");
        data.courses.forEach(course => {
          const row = `
            <tr>
              <td>${course.year_level}</td>
              <td>${course.sem}</td>
              <td>${course.code}</td>
              <td>${course.description}</td>
              <td>${course.credit}</td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });
      })
      .catch(error => console.error("Error fetching courses:", error));
  });
  