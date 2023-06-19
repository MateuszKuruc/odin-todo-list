export default startWebsite;
import github from "./img/github.svg";
import { createTask, getPriorityChoice } from "./performAction";
import { currentProjectId } from "./createItems";

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

  const allTasks = document.createElement("button");
  allTasks.classList.add("allTasks");
  allTasks.innerHTML = "All Tasks";

  const todayTasks = document.createElement("button");
  todayTasks.classList.add("todayTasks");
  todayTasks.innerHTML = "Today";

  const projects = document.createElement("div");
  projects.classList.add("projects");

  const projectsTitle = document.createElement("h2");
  projectsTitle.innerHTML = "Projects";

  const inputProject = document.createElement("input");
  inputProject.classList.add("inputProject");
  inputProject.type = "text";
  inputProject.placeholder = "Enter project name";

  const addProject = document.createElement("button");
  addProject.classList.add("addProject");
  addProject.innerHTML = "Add Project";

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");

  const taskForm = document.createElement("div");
  taskForm.classList.add("taskForm");
  // taskForm.classList.add("hidden");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.classList.add("taskTitleInput");
  taskTitleInput.type = "text";
  taskTitleInput.id = 'taskTtitleInput';
  taskTitleInput.placeholder = "* Task name";

  const labelTitle = document.createElement('label');
  labelTitle.htmlFor = 'taskTtitleInput';
  labelTitle.innerHTML = 'Name';

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.classList.add("taskDescriptionInput");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.id = 'taskDescriptionInput';
  taskDescriptionInput.placeholder = "Task description";

  const labelDescription = document.createElement('label');
  labelDescription.htmlFor = 'taskDescriptionInput';
  labelDescription.innerHTML = 'Description';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('dueDateInput');
  dueDateInput.type = 'date';
  dueDateInput.name = 'dueDate';
  dueDateInput.id = 'dueDate';
  dueDateInput.value = new Date();
  dueDateInput.min = new Date();
  // dueDateInput.max = '2023-06-30';

  const labelDate = document.createElement('label');
  labelDate.htmlFor = 'dueDate';
  labelDate.innerHTML = 'Due date';

  const taskButton = document.createElement("button");
  taskButton.classList.add("taskButton");
  taskButton.innerHTML = "Add task";
  taskButton.addEventListener("click", toggleForm);

  const createNewTask = document.createElement("button");
  createNewTask.classList.add("createNewTask");
  createNewTask.innerHTML = "Create task";
  createNewTask.addEventListener("click", createTask);

  const cancelTask = document.createElement("button");
  cancelTask.classList.add("cancelTask");
  cancelTask.innerHTML = "Cancel";
  cancelTask.addEventListener("click", toggleForm);

  const projectTasksContainer = document.createElement("div");
  projectTasksContainer.classList.add("projectTasksContainer");

  const radiobox = document.createElement("div");
  // radiobox.id = 'radiobox';

  const radioDescription = document.createElement("label");
  // radioDescription.htmlFor = 'radiobox';
  radioDescription.innerHTML = "Priority";

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.id = "radio1";
  radio1.name = "priority";
  radio1.value = "low";
  radio1.classList.add('radioButtons');

  const label1 = document.createElement("label");
  label1.htmlFor = "radio1";
  label1.innerHTML = "Low";

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.id = "radio2";
  radio2.name = "priority";
  radio2.value = "medium";
  radio2.checked = "true";
  radio2.classList.add('radioButtons');

  const label2 = document.createElement("label");
  label2.htmlFor = "radio2";
  label2.innerHTML = "Medium";

  const radio3 = document.createElement("input");
  radio3.type = "radio";
  radio3.id = "radio3";
  radio3.name = "priority";
  radio3.value = "high";
  radio3.classList.add('radioButtons');

  const label3 = document.createElement("label");
  label3.htmlFor = "radio3";
  label3.innerHTML = "High";

  // radiobox.appendChild(radioDescription);

  radiobox.appendChild(radio1);
  radiobox.appendChild(label1);

  radiobox.appendChild(radio2);
  radiobox.appendChild(label2);

  radiobox.appendChild(radio3);
  radiobox.appendChild(label3);

  taskForm.appendChild(labelTitle);
  taskForm.appendChild(taskTitleInput);
  taskForm.appendChild(labelDescription);
  taskForm.appendChild(taskDescriptionInput);
  taskForm.appendChild(labelDate);
  taskForm.appendChild(dueDateInput);
  taskForm.appendChild(radioDescription);

  taskForm.appendChild(radiobox);

  taskForm.appendChild(createNewTask);
  taskForm.appendChild(cancelTask);

  mainDisplay.appendChild(taskButton);
  mainDisplay.appendChild(taskForm);
  mainDisplay.appendChild(projectTasksContainer);

  projects.appendChild(projectsContainer);

  projects.appendChild(projectsTitle);
  projects.appendChild(inputProject);
  projects.appendChild(addProject);

  sidebar.appendChild(home);
  sidebar.appendChild(projects);
  home.appendChild(homeTitle);
  home.appendChild(allTasks);
  home.appendChild(todayTasks);

  main.appendChild(sidebar);
  main.appendChild(mainDisplay);

  todayTasks.addEventListener("click", () => {
    // console.log(radiobox);
  });

  return main;
}

export function toggleForm() {
  const taskForm = document.querySelector(".taskForm");
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");

  const radioButtons = document.getElementsByName('priority');
  radioButtons.forEach(radio => {
    radio.checked = false;
    radioButtons[1].checked = true;
    })
  

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";

  taskForm.classList.toggle("hidden");
}

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
