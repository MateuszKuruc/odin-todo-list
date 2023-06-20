import startWebsite from "./websiteBase";
import "./style.css";
import { createProject } from "./performAction";
import { displayProjectList } from "./performAction";
import { projectList } from "./createItems";
import { controlTaskDisplay } from "./performAction";

startWebsite();
createProject();
displayProjectList();
controlTaskDisplay();
console.log(projectList);


// const item1 = new Task('mati', 'bambati');