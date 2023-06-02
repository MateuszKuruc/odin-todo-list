

export let projectList = [];
export let taskList = [];


export class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
}

export class Task {
  constructor(title, description) {
    this.id = generateId();
    this.title = title;
    this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;
  }
}

function generateId() {
  return Date.now().toString();
}

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (inputProject.value != "" && inputProject.value.length != 0) {
      const newProject = new Project(inputProject.value);
      projectList.push(newProject);
      console.log(newProject);
      console.log(projectList);
      displayProjects();
      inputProject.value = "";
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
    projectName.classList.add('projectName');
    projectName.innerHTML = project.name;

    projectElement.appendChild(projectName);
    projectsContainer.appendChild(projectElement);
  });
}
