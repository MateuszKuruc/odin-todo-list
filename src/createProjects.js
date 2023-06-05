import { createTask } from "./createTasks";
import { removeTask } from "./createTasks";
import { toggleForm } from "./createTasks";

export let projectList = [];
export let taskList = [];

 export let currentProjectId = null;

export class Project {
  constructor(name) {
    this.id = generateId();
    this.name = name;
    this.taskList = [];
  }
}

export class Task {
  constructor(title, description) {
    this.id = generateId();
    this.title = title;
    this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;
  }
}

function generateId() {
  return Date.now().toString();
}

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      projectList.push(newProject);
      console.log(newProject);
      console.log(projectList);
      displayProjects();
      inputProject.value = "";

      currentProjectId = newProject.id;
      console.log(currentProjectId);

      newProject.taskList.push('pranie', 'koszulki i skarpety')
      console.log(newProject.taskList);

      return newProject;
    }
  });
}

function displayProjects() {
  const projectsContainer = document.querySelector(".projectsContainer");
  projectsContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const projectName = document.createElement("button");
    projectName.classList.add('projectName');
    projectName.innerHTML = project.name;

    projectName.addEventListener('click', loadProjectTasks);

    projectElement.appendChild(projectName);
    projectsContainer.appendChild(projectElement);
  });
}


// test modification
function loadProjectTasks() {
  console.log('test');
  const mainDisplay = document.querySelector(".mainDisplay");
  mainDisplay.innerHTML = "";

  const taskForm = document.createElement("div");
  taskForm.classList.add("taskForm");
  taskForm.classList.add("hidden");

  const taskTitle = document.createElement("input");
  taskTitle.classList.add("taskTitle");
  taskTitle.type = "text";
  taskTitle.placeholder = "* Task name";

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

  // toggle form hidden + clear form +
  // change new task button to 'cancel' and back
  const addNewTask = document.createElement("button");
  addNewTask.classList.add('addNewTask');
  addNewTask.innerHTML = "Add new task";
  addNewTask.addEventListener("click", () => {
    toggleForm(taskForm);
    addNewTask.innerHTML = "Cancel";
    addNewTask.addEventListener("click", () => {
      addNewTask.innerHTML = "Add new task";
      taskTitle.value = "";
      taskDescription.value = "";
    });
  });
  mainDisplay.appendChild(addNewTask);

  taskList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskElement");

    const taskName = document.createElement("h3");
    taskName.classList.add("taskName");
    taskName.innerHTML = task.title;

    const taskDesc = document.createElement("p");
    taskDesc.innerHTML = task.description;

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("taskDelete");
    taskDelete.innerHTML = "Delete";

    taskDelete.addEventListener("click", () => {
      removeTask(task.id);
    });

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskDesc);
    taskElement.appendChild(taskDelete);

    mainDisplay.appendChild(taskElement);
  });

  return mainDisplay;
}

export function getCurrentProjectId() {
  return currentProjectId;
}

export function getCurrentProject() {
  const projectId = getCurrentProjectId();
  if (projectId) {
    const currentProject = projectList.find((project) => project.id === projectId);
    return currentProject;
  }
  return null;
}

