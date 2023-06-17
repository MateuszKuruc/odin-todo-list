import { projectList } from "./createItems";
import { currentProjectId } from "./createItems";
import { generalTaskList } from "./createItems";
import { Project } from "./createItems";
import { Task } from "./createItems";
import { createMain, toggleForm } from "./websiteBase";

const testTask = new Task("pranie", "osobno biale i czarne");
const testTask2 = new Task("obiad", "pizza giuseppe");
const testProject = new Project("mati bambati");
testProject.addTask(testTask2);
console.log(testProject);

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      console.log(newProject);
      console.log(projectList);
      displayProjectList();
      inputProject.value = "";
      currentProjectId = newProject.id;
      console.log(currentProjectId);
      return newProject;
    }
  });
}

export function createTask() {
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");
  // const taskButton = document.querySelector(".taskButton");

  if (
    taskTitleInput.value != "" &&
    taskTitleInput.value.length != 0 &&
    currentProjectId === null
  ) {
    const newTask = new Task(taskTitleInput.value, taskDescriptionInput.value);
    console.log(generalTaskList, "general list here");

    displayAllTasks();
    toggleForm();

    return newTask;
  } else if (currentProjectId != null) {
    const newTask = new Task(taskTitleInput.value, taskDescriptionInput.value);
    const project = Project.findProjectById(currentProjectId);

    project.addTask(newTask);
    displayProjectTasks();
    toggleForm();
  }
}

export function controlTaskDisplay() {
  const allTasks = document.querySelector(".allTasks");
  allTasks.addEventListener("click", displayAllTasks);

  const todayTasks = document.querySelector(".todayTasks");
}

function displayAllTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";
  currentProjectId = null;

  generalTaskList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskElement");

    const taskTitleDisplay = document.createElement("h2");
    taskTitleDisplay.classList.add("taskTitleDisplay");
    taskTitleDisplay.innerHTML = task.title;

    const taskDescriptionDisplay = document.createElement("p");
    taskDescriptionDisplay.classList.add("taskDescriptionDisplay");
    taskDescriptionDisplay.innerHTML = task.description;

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("taskDelete");
    taskDelete.innerHTML = "Delete task";

    taskDelete.addEventListener("click", () => {
      task.removeTask(generalTaskList);
      displayAllTasks();
      console.log(generalTaskList);
    });

    taskElement.appendChild(taskTitleDisplay);
    taskElement.appendChild(taskDescriptionDisplay);
    taskElement.appendChild(taskDelete);
    projectTasksContainer.appendChild(taskElement);
  });
}

function displayProjectTasks() {
  
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";

  const currentProject = Project.findProjectById(currentProjectId);
  if (currentProject) {
    const currentProjectTaskList = currentProject.taskList;
    console.log('sprawdz aktualna liste', currentProjectTaskList);

    currentProjectTaskList.forEach((task) => {
      if (generalTaskList.includes(task)) {
      
      const taskElement = document.createElement("div");
      taskElement.classList.add("taskElement");

      const taskTitleDisplay = document.createElement("h2");
      taskTitleDisplay.classList.add("taskTitleDisplay");
      taskTitleDisplay.innerHTML = task.title;

      const taskDescriptionDisplay = document.createElement("p");
      taskDescriptionDisplay.classList.add("taskDescriptionDisplay");
      taskDescriptionDisplay.innerHTML = task.description;

      const taskDelete = document.createElement("button");
      taskDelete.classList.add("taskDelete");
      taskDelete.innerHTML = "Delete task";

      taskElement.appendChild(taskTitleDisplay);
      taskElement.appendChild(taskDescriptionDisplay);
      taskElement.appendChild(taskDelete);
      projectTasksContainer.appendChild(taskElement);
      }
    });
  }
}

export function displayProjectList() {
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");
  const mainDisplay = document.querySelector(".mainDisplay");

  const taskButton = document.querySelector(".taskButton");

  const projectsContainer = document.querySelector(".projectsContainer");
  projectsContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const projectName = document.createElement("button");
    projectName.classList.add("projectName");
    projectName.innerHTML = project.name;

    const projectDelete = document.createElement("button");
    projectDelete.classList.add("projectDelete");
    projectDelete.innerHTML = "Delete";

    projectName.addEventListener("click", () => {
      currentProjectId = project.id;
      console.log(currentProjectId);
      console.log(project.taskList);
      displayProjectTasks();
    });

    projectDelete.addEventListener("click", () => {
      project.removeProject(projectList);
      displayProjectList();
      console.log(projectList);
    });

    projectElement.appendChild(projectName);
    projectElement.appendChild(projectDelete);
    projectsContainer.appendChild(projectElement);
  });
}
