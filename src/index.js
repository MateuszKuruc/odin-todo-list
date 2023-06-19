import startWebsite from "./websiteBase";
import "./style.css";
import { Task } from "./createItems";
import { Project } from "./createItems";
// import { projectList } from "./createItems";
import { createProject } from "./performAction";
import { displayProjectList } from "./performAction";
import { projectList } from "./createItems";
import { controlTaskDisplay } from "./performAction";
import { displayProjectDetails } from "./performAction";


startWebsite();
createProject();
displayProjectList();
controlTaskDisplay();
// displayProjectDetails();
console.log(projectList);


// const item1 = new Task('mati', 'bambati');