function styleEvenRows() {
    let rows = document.querySelectorAll("tr");
    rows.forEach((row, index) => {
        row.style.backgroundColor = (index % 2 === 0) ? "#d9d9d9" : "white";
    });
    };

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") return;

    let table = document.getElementById("taskList");
    let row = table.insertRow();

    let doneCell = row.insertCell(0);
    let taskCell = row.insertCell(1);
    let deleteCell = row.insertCell(2);

    doneCell.innerHTML = '<input type="checkbox" onclick="markDone(this)">';
    taskCell.textContent = task;
    deleteCell.innerHTML =
        '<button class="delete" onclick="deleteTask(this)">Delete</button>';

    input.value = "";
    styleEvenRows()
}

function markDone(checkbox) {
    let taskCell = checkbox.parentElement.nextElementSibling;
    taskCell.classList.toggle("completed", checkbox.checked);
}

function deleteTask(span) {
    let row = span.closest("tr");
    row.remove();
    styleEvenRows()
}