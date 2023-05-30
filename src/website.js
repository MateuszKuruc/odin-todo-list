export default startWebsite;

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const siteName = document.createElement('h1');
    siteName.innerHTML = 'Todo-List'

    header.appendChild(siteName);

    return header;
}

function startWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
}