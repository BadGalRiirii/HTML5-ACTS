<<<<<<< HEAD
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
=======
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
  
>>>>>>> f70d237d260f7b048de311d22199194b8561f998
