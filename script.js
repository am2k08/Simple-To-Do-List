// script.js

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");

            const circle = document.createElement("span");
            circle.classList.add("circle");
            circle.addEventListener("click", () => {
                circle.classList.toggle("completed");
            });

            const span = document.createElement("span");
            span.textContent = taskText;

            const actions = document.createElement("span");
            actions.classList.add("actions");

            const editIcon = document.createElement("span");
            editIcon.textContent = "✏️";
            editIcon.classList.add("edit-task");
            editIcon.addEventListener("click", () => {
                editTask(span);
            });

            const deleteIcon = document.createElement("span");
            deleteIcon.textContent = "❌";
            deleteIcon.classList.add("delete-task");
            deleteIcon.addEventListener("click", () => {
                deleteTask(li);
            });

            actions.appendChild(editIcon);
            actions.appendChild(deleteIcon);

            li.appendChild(circle);
            li.appendChild(span);
            li.appendChild(actions);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    }

    function editTask(span) {
        const newTaskText = prompt("Edit your task:", span.textContent);
        if (newTaskText !== null) {
            span.textContent = newTaskText.trim();
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});
