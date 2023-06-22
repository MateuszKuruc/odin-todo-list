import "./style.css";
import { startWebsite } from "./websiteBase";
// import { projectList, generalTaskList } from "./createItems";
import { Project, Task } from "./createItems";



window.onload = () => {
    // localStorage.clear();
   
    // const testButton = document.createElement('button');
    // testButton.innerHTML = 'test button';

const storedProjectList = JSON.parse(localStorage.getItem('projectList'));
const storedGeneralTaskList = JSON.parse(localStorage.getItem('generalTaskList'));
if (storedProjectList) {
    storedProjectList.forEach((project) => {
        const newProject = new Project(project.name);
        newProject.id = project.id;
        newProject.taskList = project.taskList;
        // console.log('newProject:', newProject);
    })
}
if (storedGeneralTaskList) {
    storedGeneralTaskList.forEach((task) => {
        const newTask = new Task(task.title, task.description, task.priority, task.dueDate, task.projectId);
        newTask.id = task.id;
        // console.log('newTask:', newTask);
    })
}
// console.log('generalTaskList:', generalTaskList);
// console.log('projectList:', projectList);
        
        
startWebsite();
}

// console.log(projectList);
// generalTaskList.push('asasa')
// console.log(generalTaskList);