import { projectList } from "./createItems";
import { currentProjectId } from "./createItems";
import { currentTaskId } from "./createItems";
import { generalTaskList } from "./createItems";
import { Project } from "./createItems";
import { Task } from "./createItems";
import { createMain, toggleForm } from "./websiteBase";
import { taskPriorityInput } from "./createItems";

import { format } from 'date-fns';


const testTask = new Task("pranie", "osobno biale i czarne", "medium", '2023/06/30');
const testTask2 = new Task("obiad", "pizza giuseppe", "high", '1994/10/02');
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
  const dueDateInput = document.querySelector('.dueDateInput');
  console.log(dueDateInput.value);
  
 

  getPriorityChoice();

  if (
    taskTitleInput.value != "" &&
    taskTitleInput.value.length != 0 &&
    currentProjectId === null
  ) {
    const newTask = new Task(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskPriorityInput,
      dueDateInput.value
      // formattedDueDateInput
    );

    displayAllTasks();
    toggleForm();

    return newTask;
  } else if (currentProjectId != null) {
    const newTask = new Task(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskPriorityInput,
      dueDateInput.value
      // formattedDueDateInput
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
  todayTasks.addEventListener('click', () => {
    displayTodayTasks();
  })
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

  const titleLabel = document.createElement('h3');
  titleLabel.innerHTML = 'Name';

  const taskDescriptionDisplay = document.createElement("input");
  taskDescriptionDisplay.type = "text";
  taskDescriptionDisplay.classList.add("taskDescriptionDisplay");
  taskDescriptionDisplay.value = task.description;
  taskDescriptionDisplay.readOnly = true;

  const taskDueDateDisplay = document.createElement('input');
  taskDueDateDisplay.type = 'text';
  taskDueDateDisplay.classList.add('taskDueDateDisplay');
  taskDueDateDisplay.value = format(new Date(task.dueDate), 'dd/MM/yyyy');
  taskDueDateDisplay.readOnly = true;

  const taskPriorityDisplay = document.createElement("h3");
  taskPriorityDisplay.classList.add("taskPriorityInput");
  taskPriorityDisplay.innerHTML = `Priority: ${task.priority}`;

  const taskEdit = document.createElement("button");
  taskEdit.classList.add("taskEdit");
  taskEdit.innerHTML = "Edit";

  taskEdit.addEventListener("click", () => {
    if (taskEdit.innerHTML === "Edit") {
      taskTitleDisplay.removeAttribute("readOnly");
      taskDescriptionDisplay.removeAttribute("readOnly");

      taskDueDateDisplay.removeAttribute('readonly');
      taskDueDateDisplay.type = 'date';
      taskDueDateDisplay.value = task.dueDate;
 
      taskEdit.innerHTML = "Save";
    } else if (taskEdit.innerHTML === "Save") {
      taskTitleDisplay.setAttribute("readonly", "readonly");
      taskDescriptionDisplay.setAttribute("readonly", "readonly");

      taskDueDateDisplay.setAttribute('readonly', 'readonly');
      taskDueDateDisplay.type = 'text';
      
      task.dueDate = taskDueDateDisplay.value;
      taskDueDateDisplay.value = format(new Date(task.dueDate), 'dd/MM/yyyy');

      task.title = taskTitleDisplay.value;
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
    
    
    
    const childrenToAppend = [
      titleLabel,
      taskTitleDisplay,
      taskDescriptionDisplay,
      taskDueDateDisplay,
      taskPriorityDisplay,
      taskEdit,
      taskDelete,
    ]

    childrenToAppend.forEach((child) => {
      taskElement.appendChild(child);
      projectTasksContainer.appendChild(taskElement);
    })

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

    const childrenToAppend = [
      titleLabel,
      taskTitleDisplay,
      taskDescriptionDisplay,
      taskDueDateDisplay,
      taskPriorityDisplay,
      taskEdit,
      taskDelete,
    ]

    childrenToAppend.forEach((child) => {
      taskElement.appendChild(child);
      projectTasksContainer.appendChild(taskElement);
    })
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

export function displayTodayTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";
  currentProjectId = null;

  const today = new Date();
  const formattedTodayDate = format(new Date(today), 'yyyy-MM-dd');

  generalTaskList.forEach((task) => {
    if (task.dueDate === formattedTodayDate) {
      console.log(task.dueDate);

console.log(task.dueDate, formattedTodayDate);
   
    createTaskDisplay(task);
}});
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
      });

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
