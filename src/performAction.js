import { projectList } from "./createItems";
import { currentProjectId } from "./createItems";
import { generalTaskList } from "./createItems";
import { Project } from "./createItems";
import { Task } from "./createItems";


const testProject = new Project('mati bambati');
testProject.addTask('jedzonko');
// projectList.push('mati');

const testTask = new Task('pranie', 'osobno biale i czarne');
console.log(testTask, 'test Task');
console.log(generalTaskList, 'generalTaskList');

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      console.log(newProject);
      console.log(projectList);
      displayProjects();
      inputProject.value = "";
      currentProjectId = newProject.id;
      console.log(currentProjectId);
      return newProject;
    }
  });
}

function createTasks() {
  toggleForm();
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");
  const taskButton = document.querySelector(".taskButton");

  if (taskTitleInput.value != "" && taskTitleInput.value.length != 0) {
    const newTask = new Task(taskTitleInput.value, taskDescriptionInput.value);
    console.log(generalTaskList);

    console.log("creating task");
    displayAllTasks();
    return newTask;
  }
}

function controlTaskDisplay() {
  const allTasks = document.querySelector('.allTasks');
  allTasks.addEventListener('click', displayAllTasks)

  const todayTasks = document.querySelector('.todayTasks');
}

function displayAllTasks() {
  const projectTasksContainer = document.querySelector('.projectTasksContainer');
   generalTaskList.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('taskElement');

    const taskTitleDisplay = document.createElement('h2');
    taskTitleDisplay.classList.add('taskTitleDisplay');

    const taskDescriptionDisplay = document.createElement('p');
    taskDescriptionDisplay.classList.add('taskDescriptionDisplay');


    taskElement.appendChild(taskTitleDisplay);
    taskElement.appendChild(taskDescriptionDisplay);
    projectTasksContainer.appendChild(taskElement);
    
   })
}

export function displayProjects() {

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
      displayProjectDetails();
    });


    projectDelete.addEventListener('click', () => {
      project.removeProject(projectList);
      displayProjects();
      console.log(projectList);
    })

    projectElement.appendChild(projectName);
    projectElement.appendChild(projectDelete);
    projectsContainer.appendChild(projectElement);
  });
}

function displayProjectDetails() {
  console.log('displaying project details');
  const mainDisplay = document.querySelector(".mainDisplay");
  mainDisplay.innerHTML = "";



  // add code below to display all tasks within the project

  const taskForm = document.createElement("div");
  taskForm.classList.add("taskForm");
  // taskForm.classList.add("hidden");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.classList.add("taskTitleInput");
  taskTitleInput.type = "text";
  taskTitleInput.placeholder = "* Task name";

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.classList.add("taskDescriptionInput");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.placeholder = "Task description";

  const taskButton = document.createElement("button");
  taskButton.classList.add("taskButton");
  taskButton.innerHTML = "Add task";
  taskButton.addEventListener("click", toggleForm);

  const createNewTask = document.createElement("button");
  createNewTask.classList.add("createNewTask");
  createNewTask.innerHTML = "Create task";
  createNewTask.addEventListener("click", createTasks);

  const cancelTask = document.createElement("button");
  cancelTask.classList.add("cancelTask");
  cancelTask.innerHTML = "Cancel";
  cancelTask.addEventListener("click", toggleForm);

  const projectTasksContainer = document.createElement('div');
  projectTasksContainer.classList.add('projectTasksContainer');

  taskForm.appendChild(taskTitleInput);
  taskForm.appendChild(taskDescriptionInput);
  taskForm.appendChild(createNewTask);
  taskForm.appendChild(cancelTask);

  mainDisplay.appendChild(taskButton);
  mainDisplay.appendChild(taskForm);
  mainDisplay.appendChild(projectTasksContainer)
}



function toggleForm() {
  const taskForm = document.querySelector(".taskForm");
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";

  taskForm.classList.toggle("hidden");
}

// create task element

// const taskElement = document.createElement('div');
//     taskElement.classList.add('taskElement');

//     const taskName = document.createElement("h3");
//         taskName.classList.add("taskName");
//         taskName.innerHTML = task.title;

//         const taskDesc = document.createElement("p");
//         taskDesc.innerHTML = task.description;

//         const taskDelete = document.createElement("button");
//         taskDelete.classList.add("taskDelete");
//         taskDelete.innerHTML = "Delete";

//   }

//   // toggle form hidden + clear form +
//   // change new task button to 'cancel' and back
//   const addNewTask = document.createElement("button");
//   addNewTask.classList.add('addNewTask');
//   addNewTask.innerHTML = "Add new task";
//   addNewTask.addEventListener("click", () => {
//     toggleForm(taskForm);
//     addNewTask.innerHTML = "Cancel";
//     addNewTask.addEventListener("click", () => {
//       addNewTask.innerHTML = "Add new task";
//       taskTitleInput.value = "";
//       taskDescriptionInput.value = "";
//     });
//   });
//   mainDisplay.appendChild(addNewTask);

//   taskList.forEach((task) => {
//     const taskElement = document.createElement("div");
//     taskElement.classList.add("taskElement");

//     const taskName = document.createElement("h3");
//     taskName.classList.add("taskName");
//     taskName.innerHTML = task.title;

//     const taskDesc = document.createElement("p");
//     taskDesc.innerHTML = task.description;

//     const taskDelete = document.createElement("button");
//     taskDelete.classList.add("taskDelete");
//     taskDelete.innerHTML = "Delete";

//     taskDelete.addEventListener("click", () => {
//       removeTask(task.id);
//     });

//     taskElement.appendChild(taskName);
//     taskElement.appendChild(taskDesc);
//     taskElement.appendChild(taskDelete);

//     mainDisplay.appendChild(taskElement);
//   });

//   return mainDisplay;
// }

// export function getCurrentProjectId() {
//   return currentProjectId;
// }

// export function getCurrentProject() {
//   const projectId = getCurrentProjectId();
//   if (projectId) {
//     const currentProject = projectList.find((project) => project.id === projectId);
//     return currentProject;
//   }
//   return null;
// }
