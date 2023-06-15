export default startWebsite;
import github from "./img/github.svg";

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

  return main;
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
