import '../style.css';
import toDoIconAddress from "../Assets/list-check-solid.svg";
import searchIconAddress from "../Assets/magnifying-glass-solid.svg";
import userIconAddress from "../Assets/user-solid.svg";
import plusIconAddress from "../Assets/plus-box.svg";

export function generateHeader() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');
    body.appendChild(header);


    const left = document.createElement('div');
    left.classList.add('left', 'control');
    // left.classList.add('control');
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
    right.classList.add('right', 'control');
    // right.classList.add('control');
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

    /*
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');
    content.appendChild(sideBar);
    */

    const projectList = document.createElement('ul');
    projectList.classList.add('project-holder');
    content.appendChild(projectList);

    // must get the project list from project array
    // code goes here

    for (let i = 0; i < localStorage.length; i++){
        const project = document.createElement('li');
        project.classList.add('project');

        const temp = JSON.parse(localStorage.getItem(localStorage.key(i)));

        console.log(temp);

        project.textContent = temp.name;
        project.setAttribute("data-index", i);
        projectList.appendChild(project);
    }

    // add form 
    const addProject = document.createElement('section');
    addProject.classList.add('add-project', 'form');
    content.appendChild(addProject);

    const projectNameLabel = document.createElement('label');
    projectNameLabel.for = "project-name";
    projectNameLabel.textContent = "Name";
    addProject.appendChild(projectNameLabel);

    const projectName = document.createElement('input');
    projectName.type = "text";
    projectName.required = true;
    projectName.id = "project-name";
    addProject.appendChild(projectName);

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = "Add Project";
    addProjectButton.classList.add('project-add');
    addProject.appendChild(addProjectButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add('project-cancel');
    addProject.appendChild(cancelButton);

    const plusButton = new Image();
    plusButton.src = plusIconAddress;
    plusButton.classList.add('add-project-button');
    projectList.appendChild(plusButton);
    
}

export function generateTodoTable(projectName) {

    const content = document.querySelector('.content');

    const toDoList = document.createElement('div');
    toDoList.classList.add('todo-holder');
    content.appendChild(toDoList);

    const projectNameTitle = document.createElement('h1');
    projectNameTitle.classList.add('project-name');
    // gets the project name and display it
    projectNameTitle.textContent = `${projectName.getName()}`;
    toDoList.appendChild(projectNameTitle);

    const toDoTable = document.createElement('table');
    toDoTable.classList.add('to-do-table');
    toDoList.appendChild(toDoTable);

    const thead = document.createElement('thead');
    toDoTable.appendChild(thead);

    thead.appendChild(createTD("Name"));
    thead.appendChild(createTD("Priority"));
    thead.appendChild(createTD("Date Created"));
    thead.appendChild(createTD("Due Date"));

    // gets the todo data
    // use for loop
    // add checkbox before every line

    for (let i = 0; i < projectName.getToDo().length; i++){
        const row = document.createElement('tr');
        row.classList.add('to-do');
        // Get all the todo properties
        const name = projectName.getToDo()[i].getName();
        const priority = projectName.getToDo()[i].getPriority();
        const createDate = projectName.getToDo()[i].getCreateDate();
        const dueDate = projectName.getToDo()[i].getDueDate();
        const isFinish = projectName.getToDo()[i].isFinish();

        row.appendChild(createTD(name));
        row.appendChild(createTD(priority));
        row.appendChild(createTD(createDate));
        row.appendChild(createTD(dueDate));
        // row.appendChild(createTD(isFinish));
        
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = isFinish;
        checkbox.classList.add('checkbox');
        row.appendChild(checkbox);

        toDoTable.appendChild(row);
    }

}

export function addTableForm() {

    // const toDoList = document.querySelector('.todo-holder');
    const content = document.querySelector('.content');

    const plusButton = new Image();
    plusButton.src = plusIconAddress;
    plusButton.classList.add('add-todo-button');
    content.appendChild(plusButton);

    const addToDoForm = document.createElement('section');
    addToDoForm.classList.add('add-todo', 'form');
    content.appendChild(addToDoForm);

    const todoNameLabel = document.createElement('label');
    todoNameLabel.for = "todo-name";
    todoNameLabel.textContent = "Name";
    addToDoForm.appendChild(todoNameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "todo-name";
    nameInput.required = true;
    addToDoForm.appendChild(nameInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = "priority";
    priorityLabel.textContent = "Priority";
    addToDoForm.appendChild(priorityLabel);

    const priorityInput = document.createElement('input');
    priorityInput.type = "text";
    priorityInput.id = "priority";
    priorityInput.required = true;
    addToDoForm.appendChild(priorityInput);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for = "due-date";
    dueDateLabel.textContent = "Due Date";
    addToDoForm.appendChild(dueDateLabel);

    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.id = "due-date";
    dueDate.required = true;
    addToDoForm.appendChild(dueDate);

    const addToDoButton = document.createElement('button');
    addToDoButton.textContent = "Add To do";
    addToDoButton.classList.add('todo-add');
    addToDoForm.appendChild(addToDoButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add('todo-cancel');
    addToDoForm.appendChild(cancelButton);


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

export function clearTable() {
    const toDoList = document.querySelector('.todo-holder');
    toDoList.remove();
    /*
    const toDoForm = document.querySelector('.add-todo');
    toDoForm.remove();
    */
}

export function clearFooter() {
    const footer = document.querySelector('footer');
    footer.remove();
}