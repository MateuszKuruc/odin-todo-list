import addproject from "./img/addproject.svg";
import calendar from "./img/calendar.svg";
import inbox from "./img/inbox1.svg";
import listofprojects from "./img/listofprojects.svg";
import project from "./img/project.svg";
import house from "./img/house.svg";
import today from "./img/star.svg";
import github from "./img/github.svg";
import {
  createTask,
  createProject,
  displayProjectList,
  controlTaskDisplay,
  displayAllTasks,
} from "./performAction";

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

  const homeImg = document.createElement("img");
  homeImg.src = house;

  const homeTitle = document.createElement("h2");
  homeTitle.innerHTML = "Home";

  const homeHead = document.createElement("div");
  homeHead.classList.add("homeHead");
  homeHead.appendChild(homeImg);
  homeHead.appendChild(homeTitle);

  const allTasks = document.createElement("button");
  allTasks.classList.add("allTasks");

  const allTasksText = document.createElement("h2");
  allTasksText.innerHTML = "Inbox";

  const allTasksImg = document.createElement("img");
  allTasksImg.src = inbox;
  allTasks.appendChild(allTasksImg);
  allTasks.appendChild(allTasksText);

  const todayTasks = document.createElement("button");
  todayTasks.classList.add("todayTasks");

  const todayTasksText = document.createElement("h2");
  todayTasksText.innerHTML = "Today";

  const todayTasksImg = document.createElement("img");
  todayTasksImg.src = today;
  todayTasks.appendChild(todayTasksImg);
  todayTasks.appendChild(todayTasksText);

  const weekTasks = document.createElement("button");
  weekTasks.classList.add("weekTasks");

  const weekTasksText = document.createElement("h2");
  weekTasksText.innerHTML = "Week";

  const weekTasksImg = document.createElement("img");
  weekTasksImg.src = calendar;
  weekTasks.appendChild(weekTasksImg);
  weekTasks.appendChild(weekTasksText);

  const projects = document.createElement("div");
  projects.classList.add("projects");

  const projectsImg = document.createElement("img");
  projectsImg.src = listofprojects;

  const projectHead = document.createElement("div");
  projectHead.classList.add("projectHead");

  const projectsTitle = document.createElement("h2");
  projectsTitle.innerHTML = "Projects";

  projectHead.appendChild(projectsImg);
  projectHead.appendChild(projectsTitle);

  const inputProject = document.createElement("input");
  inputProject.classList.add("inputProject");
  inputProject.type = "text";
  inputProject.placeholder = "Enter project name";

  const addProject = document.createElement("button");
  addProject.classList.add("addProject");
  addProject.innerHTML = "Add Project";

  const addProjectImg = document.createElement("img");
  addProjectImg.src = addproject;
  addProject.appendChild(addProjectImg);

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");

  const taskForm = document.createElement("div");
  taskForm.classList.add("taskForm");
  taskForm.classList.add("hidden");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.classList.add("taskTitleInput");
  taskTitleInput.type = "text";
  taskTitleInput.id = "taskTtitleInput";
  taskTitleInput.placeholder = "* Task name";

  const labelTitle = document.createElement("label");
  labelTitle.classList.add("labelTitle");
  labelTitle.htmlFor = "taskTtitleInput";
  labelTitle.innerHTML = "Name";

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.classList.add("taskDescriptionInput");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.id = "taskDescriptionInput";
  taskDescriptionInput.placeholder = "Task description";

  const labelDescription = document.createElement("label");
  labelDescription.htmlFor = "taskDescriptionInput";
  labelDescription.innerHTML = "Description";

  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("dueDateInput");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.id = "dueDate";

  const labelDate = document.createElement("label");
  labelDate.htmlFor = "dueDate";
  labelDate.innerHTML = "Due date";

  const projectNameInfo = document.createElement("div");
  projectNameInfo.classList.add("projectNameInfo");
  projectNameInfo.classList.add("hidden");

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
  radiobox.classList.add("radiobox");

  const radioDescription = document.createElement("label");
  radioDescription.innerHTML = "Priority";

  const radio1El = document.createElement("div");
  radio1El.classList.add("radioElements");

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.id = "radio1";
  radio1.name = "priority";
  radio1.value = "low";
  radio1.classList.add("radioButtons");

  const label1 = document.createElement("label");
  label1.htmlFor = "radio1";
  label1.innerHTML = "Low";

  const radio2El = document.createElement("div");
  radio2El.classList.add("radioElements");

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.id = "radio2";
  radio2.name = "priority";
  radio2.value = "medium";
  radio2.checked = "true";
  radio2.classList.add("radioButtons");

  const label2 = document.createElement("label");
  label2.htmlFor = "radio2";
  label2.innerHTML = "Medium";

  const radio3El = document.createElement("div");
  radio3El.classList.add("radioElements");

  const radio3 = document.createElement("input");
  radio3.type = "radio";
  radio3.id = "radio3";
  radio3.name = "priority";
  radio3.value = "high";
  radio3.classList.add("radioButtons");

  const label3 = document.createElement("label");
  label3.htmlFor = "radio3";
  label3.innerHTML = "High";

  radio1El.appendChild(radio1);
  radio1El.appendChild(label1);
  radio2El.appendChild(radio2);
  radio2El.appendChild(label2);
  radio3El.appendChild(radio3);
  radio3El.appendChild(label3);

  const childrenRadiobox = [radio1El, radio2El, radio3El];

  childrenRadiobox.forEach((item) => {
    radiobox.appendChild(item);
  });

  [
    labelTitle,
    taskTitleInput,
    labelDescription,
    taskDescriptionInput,
    labelDate,
    dueDateInput,
    radioDescription,
    radiobox,
    createNewTask,
    cancelTask,
  ].forEach((item) => taskForm.appendChild(item));

  [projectNameInfo, taskButton, taskForm, projectTasksContainer].forEach(
    (item) => mainDisplay.appendChild(item)
  );

  [projectHead, projectsContainer, inputProject, addProject].forEach((item) =>
    projects.appendChild(item)
  );

  sidebar.appendChild(home);
  sidebar.appendChild(projects);

  [homeHead, allTasks, todayTasks, weekTasks].forEach((item) =>
    home.appendChild(item)
  );

  main.appendChild(sidebar);
  main.appendChild(mainDisplay);

  return main;
}

export function toggleForm() {
  const taskForm = document.querySelector(".taskForm");
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");
  const dueDateInput = document.querySelector(".dueDateInput");

  const radioButtons = document.getElementsByName("priority");
  radioButtons.forEach((radio) => {
    radio.checked = false;
    radioButtons[1].checked = true;
  });

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  dueDateInput.value = "";

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

export function startWebsite() {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createMain());
  body.appendChild(createFooter());

  createProject();
  displayProjectList();
  controlTaskDisplay();
  displayAllTasks();
}
