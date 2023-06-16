import startWebsite from "./websiteBase";
import "./style.css";
import { Task } from "./createItems";
import { Project } from "./createItems";
// import { projectList } from "./createItems";
import { createProject } from "./performAction";
import { displayProjects } from "./performAction";
import { projectList } from "./createItems";


startWebsite();
createProject();
displayProjects();
console.log(projectList);

// const item1 = new Task('mati', 'bambati');