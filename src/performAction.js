import { projectList } from "./createItems";
import { currentProjectId } from "./createItems";
import { generalTaskList } from "./createItems";
import { Project } from "./createItems";
import { Task } from "./createItems";

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      // projectList.push(newProject);
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

function displayProjects() {

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

  taskForm.appendChild(taskTitle);
  taskForm.appendChild(taskDescription);
  taskForm.appendChild(createNewTask);
  taskForm.appendChild(cancelTask);

  mainDisplay.appendChild(taskButton);
  mainDisplay.appendChild(taskForm);
}

function createTasks() {
  toggleForm();
  const taskTitle = document.querySelector(".taskTitle");
  const taskDescription = document.querySelector(".taskDescription");
  const taskButton = document.querySelector(".taskButton");

  if (taskTitle.value != "" && taskTitle.value.length != 0) {
    const newTask = new Task(taskTitle.value, taskDescription.value);
    console.log(generalTaskList);

    console.log("creating task");

    return newTask;
  }
}

function toggleForm() {
  const taskForm = document.querySelector(".taskForm");
  const taskTitle = document.querySelector(".taskTitle");
  const taskDescription = document.querySelector(".taskDescription");

  taskTitle.value = "";
  taskDescription.value = "";

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
//       taskTitle.value = "";
//       taskDescription.value = "";
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
