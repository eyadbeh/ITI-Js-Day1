//1-
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let auto = document.getElementById("auto");
let stop = document.getElementById("stop");
let img = document.images[0];
let count = 1;
let slideInterval = null;

nextBtn.onclick = () => {
    count++;
    if (count > 4) count = 1;
    img.src = `images/${count}.jpg`;
};

prevBtn.onclick = () => {
    count--;
    if (count < 1) count = 4;
    img.src = `images/${count}.jpg`;
};

auto.onclick = () => {
    if (slideInterval === null) {
        slideInterval = setInterval(() => {
            count++;
            if (count > 4) count = 1;
            img.src = `images/${count}.jpg`;
        }, 1000);
    }
};

stop.onclick = () => {
    clearInterval(slideInterval);
    slideInterval = null;
};


//2-
let form = document.getElementById("studentForm");
let nameInput = document.getElementById("studentName");
let gradeInput = document.getElementById("studentGrade");
let nameError = document.getElementById("nameError");
let gradeError = document.getElementById("gradeError");
let tableBody = document.getElementById("studentTable").querySelector("tbody");
deptError = document.getElementById("deptError");

form.onsubmit = function (event) {
    event.preventDefault();

    let deptSelected = document.querySelector('input[name="dept"]:checked');

    let name = nameInput.value.trim();
    let grade = gradeInput.value.trim();

    if (!deptSelected) {
        deptError.textContent = "* Please select a department";
        return;
    }

    function capitalizeName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    name = capitalizeName(name);

    nameError.textContent = "";
    gradeError.textContent = "";
    deptError.textContent = "";

    if (name === "") {
        nameError.textContent = "* Student name can't be empty";
        return;
    }

    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        nameError.textContent = "* Student name must contain only letters";
        return;
    }

    let existingNames = [...tableBody.querySelectorAll("tr td:first-child")].map(td => td.textContent);
    if (existingNames.includes(name)) {
        nameError.textContent = "* Student name already exists";
        return;
    }

    if (grade === "") {
        gradeError.textContent = "* Student grade can't be empty";
        return;
    }

    let numGrade = Number(grade);
    if (isNaN(numGrade)) {
        gradeError.textContent = "* Student grade must be a number";
        return;
    }

    if (numGrade < 0 || numGrade > 100) {
        gradeError.textContent = "* Student grade must be between 0 and 100.";
        return;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${name}</td>
        <td>${deptSelected.value}</td>
        <td>${grade}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;
    tableBody.appendChild(tr);

    nameInput.value = "";
    gradeInput.value = "";
    document.querySelectorAll('input[name="dept"]').forEach(radio => radio.checked = false);
};

let filterSelect = document.getElementById("filterSelect");
filterSelect.onchange = function () {
    let rows = tableBody.querySelectorAll("tr");
    let filterValue = filterSelect.value;

    rows.forEach(row => {
        let grade = Number(row.cells[2].textContent);

        if (filterValue === "all") {
            row.style.display = "";
        } else if (filterValue === "success") {
            row.style.display = grade >= 60 ? "" : "none";
        } else if (filterValue === "fail") {
            row.style.display = grade < 60 ? "" : "none";
        }
    });
};

let sortSelect = document.getElementById("sortSelect");
sortSelect.onchange = function () {
    let rows = Array.from(tableBody.querySelectorAll("tr"));

    if (this.value === "name") {
        rows.sort((a, b) => {
            let nameA = a.cells[0].textContent;
            let nameB = b.cells[0].textContent;
            return nameA.localeCompare(nameB);
        });
    } else if (this.value === "grade") {
        rows.sort((b, a) => {
            let gradeA = Number(a.cells[2].textContent);
            let gradeB = Number(b.cells[2].textContent);
            return gradeA - gradeB;
        });
    }

    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
};