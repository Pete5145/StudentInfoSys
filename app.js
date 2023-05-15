let homeTable = document.getElementById("home-table");
let homeTBody = document.getElementById("home-tbody");
let courseTBody = document.getElementById("course-body");
//fetch students api
window.addEventListener("DOMContentLoaded", () => {
       fetchCourses();
       fetchAllStudents();
         
});

function fetchCourses() {
     fetch("https://localhost:7173/api/v1/studentInfoSys/courses")
       .then((response) => response.json())
       .then((data) => {
         for (let i = 0; i < data.length; i++) {
           let tr = document.createElement("tr");
           tr.innerHTML = `<th>${data[i].id}</th>
                    <td>${data[i].name}</td>
                    <td>${data[i].description}</td>
                    <td>${data[i].schedule}</td>`;
           courseTBody.appendChild(tr);
         }
       });
}

function fetchAllStudents() {
     fetch("https://localhost:7173/api/v1/studentInfoSys/students")
       .then((response) => response.json())
       .then((data) => {
         for (let i = 0; i < data.length; i++) {
           let tr = document.createElement("tr");
           tr.innerHTML = `<th>${data[i].id}</th>
                    <td>${data[i].name}</td>
                    <td>${data[i].emailAddress}</td>
                    <td>${data[i].contactInformation}</td>`;
           homeTBody.appendChild(tr);
         }
       }); 
}