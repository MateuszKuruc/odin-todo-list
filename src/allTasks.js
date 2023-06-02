import { taskList } from "./tasks";
import { projectList } from "./tasks";
import { Task } from "./tasks";
import { createMain } from "./website";

export function loadAllTasks() {
  const mainDisplay = document.querySelector(".mainDisplay");
  mainDisplay.innerHTML = "";

  const taskForm = document.createElement("div");
  taskForm.classList.add("taskForm");
  taskForm.classList.add('hidden');

  const taskTitle = document.createElement("input");
  taskTitle.classList.add("taskTitle");
  taskTitle.type = "text";
  taskTitle.placeholder = "Task name";

  const taskDescription = document.createElement("input");
  taskDescription.classList.add("taskDescription");
  taskDescription.type = "text";
  taskDescription.placeholder = "Task description";

  const taskButton = document.createElement("button");
  taskButton.innerHTML = "Create task";
  taskButton.addEventListener("click", createTask);

  taskForm.appendChild(taskTitle);
  taskForm.appendChild(taskDescription);
  taskForm.appendChild(taskButton);

  mainDisplay.appendChild(taskForm);

  const addNewTask = document.createElement("button");
  addNewTask.innerHTML = "Add new task";
  addNewTask.addEventListener('click', () => {
    toggleForm(taskForm);  
    addNewTask.innerHTML = 'Cancel';
    addNewTask.addEventListener('click', () => {
        addNewTask.innerHTML = 'Add new task'
    })
  });

  taskList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add('taskElement');

    const taskName = document.createElement('h3');
    taskName.classList.add('taskName');
    taskName.innerHTML = task.title;

    const taskDesc = document.createElement('h4');
    taskDesc.innerHTML = task.description;

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskDesc);

    mainDisplay.appendChild(taskElement);
  });

  mainDisplay.appendChild(addNewTask);

  return mainDisplay;
}

function toggleForm(taskForm) {
    taskForm.classList.toggle('hidden');
}

// function createTaskForm() {
//   const mainDisplay = document.querySelector(".mainDisplay");
//   const taskForm = document.createElement("div");
//   taskForm.classList.add("taskForm");

//   const taskTitle = document.createElement("input");
//   taskTitle.classList.add("taskTitle");
//   taskTitle.type = "text";
//   taskTitle.placeholder = "Task name";

//   const taskDescription = document.createElement("input");
//   taskDescription.classList.add("taskDescription");
//   taskDescription.type = "text";
//   taskDescription.placeholder = "Task description";

//   const taskButton = document.createElement("button");
//   taskButton.innerHTML = "Create task";
//   taskButton.addEventListener("click", createTask);

//   taskForm.appendChild(taskTitle);
//   taskForm.appendChild(taskDescription);
//   taskForm.appendChild(taskButton);

//   mainDisplay.appendChild(taskForm);

//   return mainDisplay;
// }

export function createTask() {

  console.log("bobobo");
  const taskForm = document.querySelector(".taskForm");
  const taskTitle = document.querySelector(".taskTitle");
  const taskDescription = document.querySelector(".taskDescription");

  if (taskTitle.value != "") {
    console.log("oh, it is not empty");
    const newTask = new Task(taskTitle.value, taskDescription.value);
    console.log(newTask);
    taskList.push(newTask);
    loadAllTasks();
    taskTitle.value = '';
    taskDescription.value = '';
  }

  // if (taskTitle.value != && taskTitle.value.length > 0) {

  // }
}
