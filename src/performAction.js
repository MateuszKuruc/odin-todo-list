import { projectList } from "./createItems";
import { currentProjectId } from "./createItems";
import { currentTaskId } from "./createItems";
import { generalTaskList } from "./createItems";
import { Project } from "./createItems";
import { Task } from "./createItems";
import { createMain, toggleForm } from "./websiteBase";
import { taskPriorityInput } from "./createItems";

const testTask = new Task("pranie", "osobno biale i czarne", "medium");
const testTask2 = new Task("obiad", "pizza giuseppe", "high");
const testProject = new Project("mati bambati");
testTask2.id = testTask.id + 1;
// testProject.addTask(testTask2);
// console.log(testProject);

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      // console.log(newProject);
      // console.log(projectList);
      displayProjectList();
      inputProject.value = "";
      currentProjectId = newProject.id;
      // console.log(currentProjectId);
      return newProject;
    }
  });
}

export function createTask() {
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");

  getPriorityChoice();

  if (
    taskTitleInput.value != "" &&
    taskTitleInput.value.length != 0 &&
    currentProjectId === null
  ) {
    const newTask = new Task(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskPriorityInput
    );

    displayAllTasks();
    toggleForm();
    console.log(newTask);

    return newTask;
  } else if (currentProjectId != null) {
    const newTask = new Task(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskPriorityInput
    );
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

    const taskPriorityDisplay = document.createElement("h3");
    taskPriorityDisplay.classList.add("taskPriorityInput");
    taskPriorityDisplay.innerHTML = `Priority: ${task.priority}`;

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("taskDelete");
    taskDelete.innerHTML = "Delete task";

    taskDelete.addEventListener("click", () => {
      const projectContainingTask = findProjectContainingTask(task);

      if (projectContainingTask !== null) {
        const index = projectContainingTask.taskList.findIndex(
          (item) => item.id === task.id
        );

        if (index !== -1) {
          projectContainingTask.taskList.splice(index, 1);
        }
      }

      task.removeTask(generalTaskList);
      displayAllTasks();
    });

    taskElement.appendChild(taskTitleDisplay);
    taskElement.appendChild(taskDescriptionDisplay);
    taskElement.appendChild(taskPriorityDisplay);
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
    // console.log('sprawdz aktualna liste', currentProjectTaskList);

    currentProjectTaskList.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("taskElement");

      const taskTitleDisplay = document.createElement("h2");
      taskTitleDisplay.classList.add("taskTitleDisplay");
      taskTitleDisplay.innerHTML = task.title;

      const taskDescriptionDisplay = document.createElement("p");
      taskDescriptionDisplay.classList.add("taskDescriptionDisplay");
      taskDescriptionDisplay.innerHTML = task.description;

      const taskPriorityDisplay = document.createElement("h3");
      taskPriorityDisplay.classList.add("taskPriorityInput");
      taskPriorityDisplay.innerHTML = `Priority: ${task.priority}`;

      const taskDelete = document.createElement("button");
      taskDelete.classList.add("taskDelete");
      taskDelete.innerHTML = "Delete task";

      taskDelete.addEventListener("click", () => {
        task.removeTask(currentProjectTaskList);
        task.removeTask(generalTaskList);
        displayProjectTasks();
        // console.log(currentProjectTaskList);
      });

      taskElement.appendChild(taskTitleDisplay);
      taskElement.appendChild(taskDescriptionDisplay);
      taskElement.appendChild(taskPriorityDisplay);
      taskElement.appendChild(taskDelete);
      projectTasksContainer.appendChild(taskElement);
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
      // console.log(currentProjectId);
      // console.log(project.taskList);
      displayProjectTasks();
    });

    projectDelete.addEventListener("click", () => {
      project.removeProject(projectList);
      displayProjectList();
      // console.log(projectList);
    });

    projectElement.appendChild(projectName);
    projectElement.appendChild(projectDelete);
    projectsContainer.appendChild(projectElement);
  });
}

function findProjectContainingTask(task) {
  return projectList.find((project) => project.taskList.includes(task)) || null;
}

export function getPriorityChoice() {
  document.getElementsByName("priority").forEach((radio) => {
    if (radio.checked) {
      taskPriorityInput = radio.value;
    }
  });
}
