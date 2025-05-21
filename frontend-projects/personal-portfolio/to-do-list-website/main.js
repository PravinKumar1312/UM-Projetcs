// Get reference to the input and ul
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const completedTaskList = document.getElementById("completedTaskList");

//Store tasks in an array
let tasks = [];

// Get tasks from Local Storage
window.addEventListener("load", () => {
  tasks = JSON.parse(localStorage.getItem("todoListTasks")) || [];
  displayTasks();
});

// Save tasks to Local Storage
function saveTasksToLocalStorage() {
  localStorage.setItem("todoListTasks", JSON.stringify(tasks));
}

//Didplay tasks
function displayTasks() {
  taskList.innerHTML = "";
  completedTaskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" ${
      task.done ? "checked" : ""
    } onClick="markDone(${index}) " >
    <span>${task.text}</span>
    <button class="del-btn" onClick="deleteTask(${index})" > Delete </button>
    `;
    li.classList.add("todo-item");

    if (task.done) {
      completedTaskList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });
}
displayTasks();

//Add task
function addTask(taskText) {
  const newTask = { text: taskText, done: false };
  tasks.push(newTask);
  displayTasks();
  saveTasksToLocalStorage();
}

// Mark done

function markDone(index) {
  tasks[index].done = !tasks[index].done;
  displayTasks();
}

//Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
  saveTasksToLocalStorage();
}

// Add tasks on click
document.getElementById("addButton").addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTask(taskText);
  taskInput.value = "";
});

// Add tasks on enter
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    addTask(taskText);
    taskInput.value = "";
  }
});
