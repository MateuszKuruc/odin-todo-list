export default startWebsite;
import github from './img/github.svg';

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const siteName = document.createElement('h1');
    siteName.innerHTML = 'To-do List'

    header.appendChild(siteName);

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const home = document.createElement('div');
    home.classList.add('home');
    
    const homeTitle = document.createElement('h2');
    homeTitle.innerHTML = 'Home';
    home.appendChild(homeTitle);

    const allTasks = document.createElement('div');
    allTasks.classList.add('allTasks');
    allTasks.innerHTML = 'All Tasks'

    const todayTasks = document.createElement('div');
    todayTasks.classList.add('todayTasks');
    todayTasks.innerHTML = 'Today';

    const projects = document.createElement('div');
    projects.classList.add('projects');

    const projectsTitle = document.createElement('h2');
    projectsTitle.innerHTML = 'Projects';
    projects.appendChild(projectsTitle);

    const addProject = document.createElement('div');
    addProject.classList.add('addProject');
    addProject.innerHTML = 'Add Project';
    projects.appendChild(addProject);

    sidebar.appendChild(home);
    home.appendChild(allTasks);
    home.appendChild(todayTasks);
    sidebar.appendChild(projects);
    

    main.appendChild(sidebar);

    return main;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const signature = document.createElement('h4');
    signature.innerHTML = 'Mateusz Kuruc 2023';

    const githubImg = document.createElement('img');
    githubImg.src = github;

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/MateuszKuruc?tab=repositories";
    githubLink.target = "blank";

    githubLink.appendChild(githubImg);

    footer.appendChild(signature);
    footer.appendChild(githubLink);

    return footer;
}

function startWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    
}