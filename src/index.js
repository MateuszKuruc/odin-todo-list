import startWebsite from "./websiteBase";
import "./style.css";

import { projectList, generalTaskList } from "./createItems";

startWebsite();
console.log(projectList);
generalTaskList.push('asasa')
console.log(generalTaskList);