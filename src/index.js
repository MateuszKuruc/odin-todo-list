import "./style.css";
import { startWebsite } from "./websiteBase";
import { Project, Task } from "./createItems";

window.onload = () => {
//   localStorage.clear();

  const storedProjectList = JSON.parse(localStorage.getItem("projectList"));
  const storedGeneralTaskList = JSON.parse(
    localStorage.getItem("generalTaskList")
  );
  if (storedProjectList) {
    storedProjectList.forEach((project) => {
      const newProject = new Project(project.name);
      newProject.id = project.id;
      newProject.taskList = project.taskList;
    });
  }
  if (storedGeneralTaskList) {
    storedGeneralTaskList.forEach((task) => {
      const newTask = new Task(
        task.title,
        task.description,
        task.priority,
        task.dueDate,
        task.projectId
      );
      newTask.id = task.id;
    });
  }

  startWebsite();
};
