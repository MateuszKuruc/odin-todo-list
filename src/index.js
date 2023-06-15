import startWebsite from "./websiteBase";
import "./style.css";
import { Task } from "./createItems";
import { Project } from "./createItems";
// import { projectList } from "./createItems";
import { createProject } from "./performAction";

startWebsite();
createProject();
// const item1 = new Task('mati', 'bambati');