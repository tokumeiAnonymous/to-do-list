import '../style.css';
import toDoIconAddress from "../Assets/list-check-solid.svg";
import searchIconAddress from "../Assets/magnifying-glass-solid.svg";
import userIconAddress from "../Assets/user-solid.svg";

export function generateHeader() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');
    body.appendChild(header);


    const left = document.createElement('div');
    left.classList.add('left');
    left.classList.add('control');
    header.appendChild(left);

    const logo = new Image();
    logo.classList.add('logo');
    logo.src = toDoIconAddress;
    left.appendChild(logo);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "TodoWays";
    left.appendChild(title);


    const right = document.createElement('div');
    right.classList.add('right');
    right.classList.add('control');
    header.appendChild(right);

    const search = document.createElement('input');
    search.type = "text";
    search.placeholder = "Search...";
    search.classList.add('search');
    right.appendChild(search);

    const searchButton = document.createElement('button');
    searchButton.classList.add('search-button');
    right.appendChild(searchButton);

    const searchIcon = new Image();
    searchIcon.src = searchIconAddress;
    searchButton.appendChild(searchIcon);

    const userButton = document.createElement('button');
    userButton.classList.add('user-button');
    right.appendChild(userButton);

    const userIcon = new Image();
    userIcon.src = userIconAddress;
    userButton.appendChild(userIcon);

}



export function generateSideBar() {

    generateContent();

    const content = document.querySelector('.content');

    const projectList = document.createElement('ul');
    projectList.classList.add('project-holder');
    content.appendChild(projectList);

    // must get the project list from project array
    // code goes here



}

export function generateTodoTable() {

    const content = document.querySelector('.content');

    const toDoList = document.createElement('div');
    toDoList.classList.add('todo-holder');
    content.appendChild(toDoList);

    const projectName = document.createElement('h1');
    projectName.classList.add('project-name');
    // gets the project name and display it
    projectName.textContent = "Temp Project";
    toDoList.appendChild(projectName);

    const toDoTable = document.createElement('table');
    toDoTable.classList.add('to-do');
    toDoList.appendChild(toDoTable);

    const thead = document.createElement('thead');
    toDoTable.appendChild(thead);

    toDoTable.appendChild(createTD("Name"));
    toDoTable.appendChild(createTD("Priority"));
    toDoTable.appendChild(createTD("Date Created"));
    toDoTable.appendChild(createTD("Due Date"));

    // gets the todo data
    // use for loop
}

export function generateFooter() {
    const content = document.querySelector('.content');

    const footer = document.createElement('footer');
    content.appendChild(footer);

    const footerMessage = document.createElement('div');
    footerMessage.textContent = "All rights reserved tokumei";
    footer.appendChild(footerMessage);

    const links = document.createElement('div');
    links.classList.add('links');
    footer.appendChild(links);

    // @ param should be image address
    links.appendChild(createLinks("Github"));
    links.appendChild(createLinks("Gmail"));
    links.appendChild(createLinks("LinkedIn"));
}

function generateContent() {
    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content);
}

function createTD(tdName) {
    const td = document.createElement('td');
    td.textContent = tdName;

    return td;
}

function createLinks(linkName) {
    const link = document.createElement('div');
    link.textContent = linkName;

    return link;
}