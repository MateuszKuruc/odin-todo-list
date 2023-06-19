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
testProject.taskList.push(testTask2);

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      displayProjectList();
      inputProject.value = "";
      currentProjectId = newProject.id;
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

function createTaskDisplay(task) {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );

  const taskElement = document.createElement("div");
  taskElement.classList.add("taskElement");

  const taskTitleDisplay = document.createElement("input");
  taskTitleDisplay.type = "text";
  taskTitleDisplay.classList.add("taskTitleDisplay");
  taskTitleDisplay.value = task.title;
  taskTitleDisplay.readOnly = true;

  const taskDescriptionDisplay = document.createElement("input");
  taskDescriptionDisplay.type = "text";
  taskDescriptionDisplay.classList.add("taskDescriptionDisplay");
  taskDescriptionDisplay.value = task.description;
  taskDescriptionDisplay.readOnly = true;

  const taskPriorityDisplay = document.createElement("h3");
  taskPriorityDisplay.classList.add("taskPriorityInput");
  taskPriorityDisplay.innerHTML = `Priority: ${task.priority}`;

  const taskEdit = document.createElement("button");
  taskEdit.classList.add("taskEdit");
  taskEdit.innerHTML = "Edit";

  taskEdit.addEventListener("click", () => {
    if (taskEdit.innerHTML === 'Edit') {
    taskDescriptionDisplay.removeAttribute("readOnly");
    taskEdit.innerHTML = "Save";
  } else if (taskEdit.innerHTML === "Save") {
        taskDescriptionDisplay.setAttribute("readonly", "readonly");
        task.description = taskDescriptionDisplay.value;
        taskEdit.innerHTML = "Edit";
    }
  });

  if (currentProjectId === null) {
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
    taskElement.appendChild(taskEdit);
    taskElement.appendChild(taskDelete);
    projectTasksContainer.appendChild(taskElement);
  } else if (currentProjectId !== null) {
    const taskDelete = document.createElement("button");
    taskDelete.classList.add("taskDelete");
    taskDelete.innerHTML = "Delete task";

    taskDelete.addEventListener("click", () => {
      const currentProject = Project.findProjectById(currentProjectId);
      const currentProjectTaskList = currentProject.taskList;

      task.removeTask(currentProjectTaskList);
      task.removeTask(generalTaskList);
      displayProjectTasks();
    });
    taskElement.appendChild(taskTitleDisplay);
    taskElement.appendChild(taskDescriptionDisplay);
    taskElement.appendChild(taskPriorityDisplay);
    taskElement.appendChild(taskEdit);
    taskElement.appendChild(taskDelete);
    projectTasksContainer.appendChild(taskElement);
  }
}

function displayAllTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";
  currentProjectId = null;

  generalTaskList.forEach((task) => {
    createTaskDisplay(task);
  });
}

function displayProjectTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";

  const currentProject = Project.findProjectById(currentProjectId);
  const currentProjectTaskList = currentProject.taskList;

  currentProjectTaskList.forEach((task) => {
    createTaskDisplay(task);
  });
}

export function displayProjectList() {
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
      displayProjectTasks();
    });

    projectDelete.addEventListener("click", () => {
      const currentTaskList = project.taskList;
      currentTaskList.forEach((task) => {
        const index = generalTaskList.findIndex((item) => item.id === task.id);
        if (index !== -1) {
          generalTaskList.splice(index, 1);
        }
      })
      
      project.removeProject(projectList);
      displayProjectList();
      displayAllTasks();
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