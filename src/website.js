export default startWebsite;
import { loadAllTasks } from "./allTasks";
import github from "./img/github.svg";
import { createTask } from "./allTasks";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const siteName = document.createElement("h1");
  siteName.innerHTML = "To-do List";

  header.appendChild(siteName);

  return header;
}

export function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  const mainDisplay = document.createElement("div");
  mainDisplay.classList.add("mainDisplay");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const home = document.createElement("div");
  home.classList.add("home");

  const homeTitle = document.createElement("h2");
  homeTitle.innerHTML = "Home";
  home.appendChild(homeTitle);

  const allTasks = document.createElement("button");
  allTasks.classList.add("allTasks");
  allTasks.innerHTML = "All Tasks";
  allTasks.addEventListener("click", loadAllTasks);

  const todayTasks = document.createElement("button");
  todayTasks.classList.add("todayTasks");
  todayTasks.innerHTML = "Today";

  const projects = document.createElement("div");
  projects.classList.add("projects");

  const projectsTitle = document.createElement("h2");
  projectsTitle.innerHTML = "Projects";
  projects.appendChild(projectsTitle);

  const inputProject = document.createElement("input");
  inputProject.classList.add("inputProject");
  inputProject.type = "text";
  inputProject.placeholder = "Enter project name";
  projects.appendChild(inputProject);

  const addProject = document.createElement("button");
  addProject.classList.add("addProject");
  addProject.innerHTML = "Add Project";
  projects.appendChild(addProject);

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");
  projects.appendChild(projectsContainer);

//   const taskForm = document.createElement("div");
//   taskForm.classList.add("taskForm");
// //   taskForm.classList.add('hidden');

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

  sidebar.appendChild(home);
  home.appendChild(allTasks);
  home.appendChild(todayTasks);
  sidebar.appendChild(projects);

  main.appendChild(sidebar);
//   mainDisplay.appendChild(taskForm);
  main.appendChild(mainDisplay);

  return main;
}

// function createTaskForm() {
//     const mainDisplay = document.querySelector(".mainDisplay");
//     const taskForm = document.createElement("div");
//     taskForm.classList.add("taskForm");

//     const taskTitle = document.createElement("input");
//     taskTitle.classList.add("taskTitle");
//     taskTitle.type = "text";
//     taskTitle.placeholder = "Task name";

//     const taskDescription = document.createElement("input");
//     taskDescription.classList.add("taskDescription");
//     taskDescription.type = "text";
//     taskDescription.placeholder = "Task description";

//     const taskButton = document.createElement("button");
//     taskButton.innerHTML = "Create task";
//     taskButton.addEventListener("click", createTask);

//     taskForm.appendChild(taskTitle);
//     taskForm.appendChild(taskDescription);
//     taskForm.appendChild(taskButton);

//     mainDisplay.appendChild(taskForm);

//     return mainDisplay;
//   }

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const signature = document.createElement("h4");
  signature.innerHTML = "Mateusz Kuruc 2023";

  const githubImg = document.createElement("img");
  githubImg.src = github;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/MateuszKuruc?tab=repositories";
  githubLink.target = "blank";

  githubLink.appendChild(githubImg);

  footer.appendChild(signature);
  footer.appendChild(githubLink);

  return footer;
}

function startWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}
