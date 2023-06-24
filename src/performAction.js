import {
  projectList,
  currentProjectId,
  generalTaskList,
  Project,
  Task,
  taskPriorityInput,
} from "./createItems";
import { toggleForm } from "./websiteBase";
import { format, addDays, isWithinInterval, startOfToday } from "date-fns";
import bin from "./img/bin.svg";

export function createProject() {
  const inputProject = document.querySelector(".inputProject");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    if (
      inputProject.value != "" &&
      inputProject.value.length != 0 &&
      inputProject.value.length < 16
    ) {
      const newProject = new Project(inputProject.value);
      displayProjectList();
      inputProject.value = "";
      currentProjectId = newProject.id;
      updateLocalStorage();
      return newProject;
    } else if (inputProject.value.length > 16) {
      inputProject.value = '';
      alert("Enter project name below 16 characters!");
    }
  });
}

export function createTask() {
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskDescriptionInput = document.querySelector(".taskDescriptionInput");
  const dueDateInput = document.querySelector(".dueDateInput");

  getPriorityChoice();

  if (
    taskTitleInput.value != "" &&
    taskTitleInput.value.length != 0 &&
    currentProjectId === null
  ) {
    new Task(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskPriorityInput,
      dueDateInput.value,
      null
    );
  } else if (currentProjectId != null) {
    const newTask = new Task(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskPriorityInput,
      dueDateInput.value,
      currentProjectId
    );
    const project = Project.findProjectById(currentProjectId);

    project.addTask(newTask);
  }
  toggleForm();
  displayCurrentTab();
  updateLocalStorage();
}

export function controlTaskDisplay() {
  const allTasks = document.querySelector(".allTasks");
  allTasks.addEventListener("click", () => {
    toggleActiveButton(allTasks);
    displayAllTasks();
  });

  const todayTasks = document.querySelector(".todayTasks");
  todayTasks.addEventListener("click", () => {
    toggleActiveButton(todayTasks);
    displayTodayTasks();
  });

  const weekTasks = document.querySelector(".weekTasks");
  weekTasks.addEventListener("click", () => {
    toggleActiveButton(weekTasks);
    displayWeekTasks();
  });
}

function createTaskDisplay(task) {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );

  const completeTaskElement = document.createElement("div");
  completeTaskElement.classList.add("completeTaskElement");

  const taskElement = document.createElement("div");
  taskElement.classList.add("taskElement");
  taskElement.classList.add("hidden");

  const titleLabel = document.createElement("h5");
  titleLabel.innerHTML = "Name";

  const descriptionLabel = document.createElement("h5");
  descriptionLabel.innerHTML = "Notes";

  const dueDateLabel = document.createElement("h5");
  dueDateLabel.innerHTML = "Due date";

  const priorityLabel = document.createElement("h5");
  priorityLabel.innerHTML = "Priority";

  const taskTitleDisplay = document.createElement("input");
  taskTitleDisplay.type = "text";
  taskTitleDisplay.classList.add("taskTitleDisplay");
  taskTitleDisplay.value =
    task.title.charAt(0).toUpperCase() + task.title.slice(1);
  taskTitleDisplay.readOnly = true;

  const taskDescriptionDisplay = document.createElement("textarea");

  taskDescriptionDisplay.classList.add("taskDescriptionDisplay");
  taskDescriptionDisplay.value =
    task.description.charAt(0).toUpperCase() + task.description.slice(1);
  taskDescriptionDisplay.readOnly = true;
  taskDescriptionDisplay.rows = 6;

  const taskDueDateDisplay = document.createElement("input");
  taskDueDateDisplay.type = "text";
  taskDueDateDisplay.classList.add("taskDueDateDisplay");
  taskDueDateDisplay.value = format(new Date(task.dueDate), "dd/MM/yyyy");
  taskDueDateDisplay.readOnly = true;

  const taskPriorityDisplay = document.createElement("input");
  taskPriorityDisplay.type = "text";
  taskPriorityDisplay.classList.add("taskPriorityDisplay");
  taskPriorityDisplay.value =
    task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
  taskPriorityDisplay.readOnly = true;

  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("prioritySelect");
  prioritySelect.classList.add("hidden");

  const taskTeaser = document.createElement("div");
  taskTeaser.classList.add("taskTeaser");

  const taskTeaserCheckbox = document.createElement("input");
  taskTeaserCheckbox.classList.add("taskTeaserCheckbox");
  taskTeaserCheckbox.type = "checkbox";
  // taskTeaser.appendChild(taskTeaserCheckbox);

  const taskTeaserName = document.createElement("h4");
  taskTeaserName.classList.add("taskTeaserName");
  taskTeaserName.innerHTML = taskTitleDisplay.value;
  taskTeaser.appendChild(taskTeaserName);

  const taskTeaserDueDate = document.createElement("p");
  taskTeaserDueDate.classList.add("taskTeaserDueDate");

  taskTeaserDueDate.innerHTML = taskDueDateDisplay.value;

  const taskTeaserDetails = document.createElement("div");
  taskTeaserDetails.classList.add("taskTeaserDetails");
  taskTeaserDetails.innerHTML = "MORE";
  taskTeaserDetails.addEventListener("click", () => {
    if (taskElement.classList.contains("hidden")) {
      taskElement.classList.remove("hidden");
      taskTeaserDetails.innerHTML = "LESS";
    } else if (!taskElement.classList.contains("hidden")) {
      taskElement.classList.add("hidden");
      taskTeaserDetails.innerHTML = "MORE";
      displayCurrentTab();
    }
  });

  const taskTeaserDelete = document.createElement("div");
  taskTeaserDelete.classList.add("taskTeaserDelete");
  taskTeaserDelete.innerHTML = "DELETE";
  taskTeaserDelete.addEventListener("click", () => {
    deleteTask(task);
  });

  function taskPriorityColor() {
    if (task.finished === false) {
      taskTeaserName.classList.remove("finished");
      taskTeaserDueDate.classList.remove("finished");
      if (task.priority === "low") {
        taskTeaser.style.backgroundColor = "rgb(178, 217, 156)";
      } else if (task.priority === "medium") {
        taskTeaser.style.backgroundColor = "rgb(255, 245, 157)";
      } else if (task.priority === "high") {
        taskTeaser.style.backgroundColor = "rgb(219, 106, 106)";
      }
    } else if (task.finished === true) {
      taskTeaser.style.backgroundColor = "rgb(112, 128, 144, 0.4)";
      taskTeaserCheckbox.checked = true;
      taskTeaserName.classList.add("finished");
      taskTeaserDueDate.classList.add("finished");
    }
  }
  taskPriorityColor();

  taskTeaserCheckbox.addEventListener("click", () => {
    if (task.finished === false) {
      taskTeaserCheckbox.checked = true;
      task.finished = true;
    } else if (task.finished === true) {
      taskTeaserCheckbox.checked = false;
      task.finished = false;
    }

    taskPriorityColor();
    displayCurrentTab();
    updateLocalStorage();
  });

  const taskTeaserLeft = document.createElement("div");
  taskTeaserLeft.classList.add("taskTeaserLeft");
  taskTeaserLeft.appendChild(taskTeaserCheckbox);
  taskTeaser.appendChild(taskTeaserLeft);

  const taskTeaserRight = document.createElement("div");
  taskTeaserRight.classList.add("taskTeaserRight");
  taskTeaserRight.appendChild(taskTeaserDueDate);
  taskTeaserRight.appendChild(taskTeaserDetails);
  taskTeaserRight.appendChild(taskTeaserDelete);

  prioritySelect.options[prioritySelect.options.length] = new Option(
    "Low",
    "low"
  );
  prioritySelect.options[prioritySelect.options.length] = new Option(
    "Medium",
    "medium"
  );
  prioritySelect.options[prioritySelect.options.length] = new Option(
    "High",
    "high"
  );

  setPrioritySelectIndex(prioritySelect, task.priority);

  const taskEdit = document.createElement("button");
  taskEdit.classList.add("taskEdit");
  taskEdit.innerHTML = "Edit";

  taskEdit.addEventListener("click", () => {
    if (taskEdit.innerHTML === "Edit") {
      taskTitleDisplay.removeAttribute("readOnly");
      taskTitleDisplay.focus();
      taskDescriptionDisplay.removeAttribute("readOnly");

      taskDueDateDisplay.removeAttribute("readonly");
      taskDueDateDisplay.type = "date";
      taskDueDateDisplay.value = task.dueDate;

      taskPriorityDisplay.classList.add("hidden");
      prioritySelect.classList.remove("hidden");

      taskEdit.innerHTML = "Save";
    } else if (taskEdit.innerHTML === "Save") {
      taskTitleDisplay.setAttribute("readonly", "readonly");
      taskDescriptionDisplay.setAttribute("readonly", "readonly");

      taskDueDateDisplay.setAttribute("readonly", "readonly");
      taskDueDateDisplay.type = "text";

      prioritySelect.classList.add("hidden");
      taskPriorityDisplay.classList.remove("hidden");
      task.priority = prioritySelect.value;

      task.dueDate = taskDueDateDisplay.value;
      taskDueDateDisplay.value = format(new Date(task.dueDate), "dd/MM/yyyy");

      task.title = taskTitleDisplay.value;
      task.description = taskDescriptionDisplay.value;
      taskEdit.innerHTML = "Edit";
      displayCurrentTab();
    }

    updateLocalStorage();
  });

  const taskDelete = document.createElement("button");
  taskDelete.classList.add("taskDelete");
  taskDelete.innerHTML = "Delete task";

  taskDelete.addEventListener("click", () => {
    task.removeTask(generalTaskList);
    displayCurrentTab();
    updateLocalStorage();
  });

  [
    titleLabel,
    taskTitleDisplay,
    descriptionLabel,
    taskDescriptionDisplay,
    dueDateLabel,
    taskDueDateDisplay,
    priorityLabel,
    taskPriorityDisplay,
    prioritySelect,
    taskEdit,
    taskDelete,
  ].forEach((item) => taskElement.appendChild(item));

  [taskTeaserName, taskTeaserRight].forEach((item) =>
    taskTeaser.appendChild(item)
  );

  completeTaskElement.appendChild(taskTeaser);
  completeTaskElement.appendChild(taskElement);

  projectTasksContainer.appendChild(completeTaskElement);
}

export function displayAllTasks() {
  const allTasks = document.querySelector(".allTasks");
  allTasks.classList.add("activeButton");
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );

  projectTasksContainer.innerHTML = "";
  currentProjectId = null;

  toggleProjectNameInfo();

  const sortedTasks = generalTaskList.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return dateA.getTime() - dateB.getTime();
  });

  sortedTasks.sort((a, b) => {
    if (a.finished && !b.finished) {
      return 1;
    } else if (!a.finished && b.finished) {
      return -1;
    } else {
      return 0;
    }
  });

  sortedTasks.forEach((task) => {
    createTaskDisplay(task);
  });
}

function displayProjectTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );

  toggleProjectNameInfo();

  projectTasksContainer.innerHTML = "";

  const projectTasks = generalTaskList.filter(
    (task) => task.projectId === currentProjectId
  );

  const sortedProjectTasks = projectTasks.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return dateA.getTime() - dateB.getTime();
  });

  sortedProjectTasks.sort((a, b) => {
    if (a.finished && !b.finished) {
      return 1;
    } else if (!a.finished && b.finished) {
      return -1;
    } else {
      return 0;
    }
  });

  sortedProjectTasks.forEach((task) => {
    createTaskDisplay(task);
  });
}

export function displayTodayTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";
  currentProjectId = null;

  toggleProjectNameInfo();

  const today = startOfToday();
  const formattedTodayDate = format(new Date(today), "yyyy-MM-dd");

  const sortedTasks = generalTaskList
    .filter((task) => task.dueDate === formattedTodayDate)
    .sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA.getTime() - dateB.getTime();
    });

  sortedTasks.forEach((task) => {
    if (task.dueDate === formattedTodayDate) {
      createTaskDisplay(task);
    }
  });
}

function displayWeekTasks() {
  const projectTasksContainer = document.querySelector(
    ".projectTasksContainer"
  );
  projectTasksContainer.innerHTML = "";
  currentProjectId = null;

  toggleProjectNameInfo();

  const today = startOfToday();
  const weekFromToday = addDays(new Date(today), 7);

  const sortedTasks = generalTaskList
    .filter((task) =>
      isWithinInterval(new Date(task.dueDate), {
        start: today,
        end: weekFromToday,
      })
    )
    .sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA.getTime() - dateB.getTime();
    });

  sortedTasks.forEach((task) => {
    const checkingInterval = isWithinInterval(new Date(task.dueDate), {
      start: today,
      end: weekFromToday,
    });
    if (checkingInterval) {
      createTaskDisplay(task);
    }
  });
}

export function displayProjectList() {
  const allTasks = document.querySelector(".allTasks");
  const todayTasks = document.querySelector(".todayTasks");
  const weekTasks = document.querySelector(".weekTasks");
  const projectsContainer = document.querySelector(".projectsContainer");
  projectsContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("projectElement");

    const projectName = document.createElement("button");
    projectName.classList.add("projectName");
    projectName.innerHTML = project.name;

    const projectDelete = document.createElement("div");
    projectDelete.classList.add("projectDelete");
    const projectDeleteImg = document.createElement("img");
    projectDeleteImg.src = bin;
    projectDelete.appendChild(projectDeleteImg);

    projectName.addEventListener("click", () => {
      currentProjectId = project.id;
      displayProjectTasks();
      allTasks.classList.remove("activeButton");
      todayTasks.classList.remove("activeButton");
      weekTasks.classList.remove("activeButton");
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
      allTasks.classList.add("activeButton");
      todayTasks.classList.remove("activeButton");
      weekTasks.classList.remove("activeButton");
      updateLocalStorage();
    });

    projectElement.appendChild(projectName);
    projectName.appendChild(projectDelete);
    projectsContainer.appendChild(projectElement);
  });
}

export function getPriorityChoice() {
  document.getElementsByName("priority").forEach((radio) => {
    if (radio.checked) {
      taskPriorityInput = radio.value;
    }
  });
}

function toggleActiveButton(button) {
  const allTasks = document.querySelector(".allTasks");
  const todayTasks = document.querySelector(".todayTasks");
  const weekTasks = document.querySelector(".weekTasks");

  const buttons = [allTasks, todayTasks, weekTasks];
  buttons.forEach((btn) => {
    btn.classList.remove("activeButton");
  });

  button.classList.add("activeButton");
}

function displayCurrentTab() {
  const allTasks = document.querySelector(".allTasks");
  const todayTasks = document.querySelector(".todayTasks");
  const weekTasks = document.querySelector(".weekTasks");

  if (allTasks.classList.contains("activeButton")) {
    displayAllTasks();
  } else if (weekTasks.classList.contains("activeButton")) {
    displayWeekTasks();
  } else if (todayTasks.classList.contains("activeButton")) {
    displayTodayTasks();
  } else if (currentProjectId !== null) {
    displayProjectTasks();
  } else {
    displayAllTasks();
  }
}

function updateLocalStorage() {
  localStorage.setItem("generalTaskList", JSON.stringify(generalTaskList));
  localStorage.setItem("projectList", JSON.stringify(projectList));
}

function deleteTask(task) {
  task.removeTask(generalTaskList);
  displayCurrentTab();
  updateLocalStorage();
}

function toggleProjectNameInfo() {
  const projectNameInfo = document.querySelector(".projectNameInfo");

  if (currentProjectId !== null) {
    const currentProject = Project.findProjectById(currentProjectId);
    const currentProjectName = currentProject.name;
    projectNameInfo.innerHTML = `Current project: '${currentProjectName}'`;
    projectNameInfo.classList.remove("hidden");
  } else if (currentProjectId === null) {
    projectNameInfo.classList.add("hidden");
  }
}

function setPrioritySelectIndex(prioritySelect, taskPriority) {
  switch (taskPriority) {
    case "low":
      prioritySelect.selectedIndex = 0;
      break;
    case "medium":
      prioritySelect.selectedIndex = 1;
      break;
    case "high":
      prioritySelect.selectedIndex = 2;
      break;
    default:
      prioritySelect.selectedIndex = -1;
  }
}
