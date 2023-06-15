

taskList.push(new Task('mati', 'pami'))

export function loadAllTasks() {
  const mainDisplay = document.querySelector(".mainDisplay");
  mainDisplay.innerHTML = "";

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
  taskButton.innerHTML = "Create task";
  taskButton.addEventListener("click", createTask);

  taskForm.appendChild(taskTitle);
  taskForm.appendChild(taskDescription);
  taskForm.appendChild(taskButton);

  mainDisplay.appendChild(taskForm);

  // toggle form hidden + clear form +
  // change new task button to 'cancel' and back
  const addNewTask = document.createElement("button");
  addNewTask.classList.add('addNewTask');
  addNewTask.innerHTML = "Add new task";
  addNewTask.addEventListener("click", () => {
    toggleForm(taskForm);
    addNewTask.innerHTML = "Cancel";
    addNewTask.addEventListener("click", () => {
      addNewTask.innerHTML = "Add new task";
      taskTitle.value = "";
      taskDescription.value = "";
    });
  });
  mainDisplay.appendChild(addNewTask);

  taskList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskElement");

    const taskName = document.createElement("h3");
    taskName.classList.add("taskName");
    taskName.innerHTML = task.title;

    const taskDesc = document.createElement("p");
    taskDesc.innerHTML = task.description;

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("taskDelete");
    taskDelete.innerHTML = "Delete";

    taskDelete.addEventListener("click", () => {
      removeTask(task.id);
    });

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskDesc);
    taskElement.appendChild(taskDelete);

    mainDisplay.appendChild(taskElement);
  });

  return mainDisplay;
}

export function removeTask(taskId) {
  const taskIndex = taskList.findIndex((task) => task.id === taskId);
  console.log("usuwamy?");
  if (taskIndex !== -1) {
    taskList.splice(taskIndex, 1);
    loadAllTasks(); // Update the UI to reflect the changes
  }
}

export function toggleForm(taskForm) {
  taskForm.classList.toggle("hidden");
}

// original version

// export function createTask() {
//   const taskTitle = document.querySelector(".taskTitle");
//   const taskDescription = document.querySelector(".taskDescription");

//   if (taskTitle.value != "") {
//     const newTask = new Task(taskTitle.value, taskDescription.value);
//     console.log(newTask);
//     taskList.push(newTask);
//     loadAllTasks();
//     taskTitle.value = "";
//     taskDescription.value = "";
//   } else {
//     console.log('blad');
//   }
// }

function createTask() {
  const taskTitle = document.querySelector(".taskTitle");
  const taskDescription = document.querySelector(".taskDescription");

  if (taskTitle.value != "") {
    const newTask = new Task(taskTitle.value, taskDescription.value);
    console.log(newTask);

    const currentProject = getCurrentProject();
    currentProject.taskList.push(newTask);

    // taskList.push(newTask);
    loadAllTasks();
    taskTitle.value = "";
    taskDescription.value = "";
  } else {
    console.log('blad');
  }
}