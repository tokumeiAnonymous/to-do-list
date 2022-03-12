import '../style.css';
import toDoIconAddress from '../Assets/list-check-solid.svg';
import searchIconAddress from '../Assets/magnifying-glass-solid.svg';
import userIconAddress from '../Assets/user-solid.svg';
import plusIconAddress from '../Assets/plus-box.svg';
import { addProject, addTodo } from '../Model/LocalStorage';
import { createTodo } from '../Model/Todo';

export function generateHeader() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');
    body.appendChild(header);

    const left = document.createElement('div');
    left.classList.add('left', 'control');
    header.appendChild(left);

    const logo = new Image();
    logo.classList.add('logo');
    logo.src = toDoIconAddress;
    left.appendChild(logo);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'TodoWays';
    left.appendChild(title);


    const right = document.createElement('div');
    right.classList.add('right', 'control');
    header.appendChild(right);

    const search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search...';
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

export function generateSectionHolder() {

    const body = document.querySelector('body');
    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content);


    const projectList = document.createElement('ul');
    projectList.classList.add('project-holder');
    content.appendChild(projectList);

    const todoHolder = document.createElement('div');
    todoHolder.classList.add('todo-holder');
    content.appendChild(todoHolder);

    const todoWrapper = document.createElement('div');
    todoWrapper.classList.add('todo-wrapper');
    todoHolder.appendChild(todoWrapper);

}

export function generateSideBar() {

    const projectList = document.querySelector('.project-holder');

    for (let i = 0; i < localStorage.length; i++) {

        const project = document.createElement('li');
        project.classList.add('project');
        project.setAttribute('data-index', i);

        const temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
        project.textContent = temp.name;

        // we use arrow function to prevent calling the function while setting it
        project.addEventListener('click', () => {
            clearTable();
            generateTodoTable(project.textContent);
        });

        projectList.appendChild(project);
    }

    const form = document.createElement('form');
    form.classList.add('form', 'project-add');

    const nameLabel = document.createElement('label');
    nameLabel.for = 'project-name';
    nameLabel.textContent = 'Name';
    form.appendChild(nameLabel);

    const name = document.createElement('input');
    name.type = 'text';
    name.required = true;
    name.id = 'project-name';
    form.appendChild(name);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add Project';
    submitButton.type = 'button';
    submitButton.classList.add('project-submit');
    submitButton.addEventListener('click', () => {
        if (!name.reportValidity()) return;
        addProject(name.value);
        clearSideBar();
        generateSideBar();
        form.classList.toggle('form');
    });
    form.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    cancelButton.classList.add('cancel');
    cancelButton.addEventListener('click', () => {
        form.classList.toggle('form');
        clearProjectForm();
    })
    form.appendChild(cancelButton);

    projectList.appendChild(form);

    const plusButton = new Image();
    plusButton.src = plusIconAddress;
    plusButton.classList.add('add-button');
    plusButton.addEventListener('click', () => {
        form.classList.toggle('form');
    });
    projectList.appendChild(plusButton);
}

export function generateTodoTable(projectName) {

    const todoWrapper = document.querySelector('.todo-wrapper');

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projectName;
    todoWrapper.appendChild(projectTitle);

    const todoTable = document.createElement('table');
    todoTable.classList.add('todo-table');
    todoWrapper.appendChild(todoTable);

    const thead = document.createElement('thead');
    todoTable.appendChild(thead);

    thead.appendChild(createTD('Name'));
    thead.appendChild(createTD('Priority'));
    thead.appendChild(createTD('Date Created'));
    thead.appendChild(createTD('Due Date'));

    const project = JSON.parse(localStorage.getItem(projectName));

    for (let i = 0; i < project.todo.length; i++) {
        const row = document.createElement('tr');
        row.classList.add('to-do');

        const name = project.todo[i].name;
        const priority = project.todo[i].priority;
        const createDate = project.todo[i].createDate;
        const dueDate = project.todo[i].dueDate;

        row.appendChild(createTD(name));
        row.appendChild(createTD(priority));
        row.appendChild(createTD(createDate));
        row.appendChild(createTD(dueDate));

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        // add eventListener here
        row.appendChild(checkbox);

        row.classList.add(`${priority.toLowerCase()}`);

        todoTable.appendChild(row);
    }

}

export function addTableForm() {

    const todoList = document.querySelector('.todo-holder');

    const addTodoForm = document.createElement('form');
    addTodoForm.classList.add('add-todo', 'form');
    todoList.appendChild(addTodoForm);

    const todoNameLabel = document.createElement('label');
    todoNameLabel.for = 'todo-name';
    todoNameLabel.textContent = 'Name';
    addTodoForm.appendChild(todoNameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'todo-name';
    nameInput.required = true;
    addTodoForm.appendChild(nameInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'priority';
    priorityLabel.textContent = 'Priority';
    addTodoForm.appendChild(priorityLabel);

    // change this to select
    const priorityInput = document.createElement('input');
    priorityInput.type = 'texaddProject()t';
    priorityInput.id = 'priority';
    priorityInput.required = true;
    addTodoForm.appendChild(priorityInput);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for = 'due-date';
    dueDateLabel.textContent = 'Due Date';
    addTodoForm.appendChild(dueDateLabel);

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'due-date';
    addTodoForm.appendChild(dueDate);

    const addTodoButton = document.createElement('button');
    addTodoButton.textContent = 'Add To do';
    addTodoButton.type = 'button';
    addTodoButton.classList.add('todo-add');
    addTodoButton.addEventListener('click', () => {
        if (!nameInput.reportValidity()) return;
        else if (!priorityInput.reportValidity()) return;

        const newTodo = createTodo(nameInput.value, priorityInput.value, dueDate.value);
        const projectDisplayedName = document.querySelector('.project-title').textContent;
        const todoArray = JSON.parse(localStorage.getItem(projectDisplayedName)).todo;
        todoArray.push(newTodo);
        addTodo(projectDisplayedName, todoArray);
        clearTable();
        clearTodoForm();
        generateTodoTable(projectDisplayedName);
        
        addTodoForm.classList.toggle('form');
    });
    addTodoForm.appendChild(addTodoButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    cancelButton.classList.add('todo-cancel', 'cancel');
    cancelButton.addEventListener('click', () => {
        addTodoForm.classList.toggle('form');
        clearTodoForm();
    });
    addTodoForm.appendChild(cancelButton);

    const plusButton = new Image();
    plusButton.src = plusIconAddress;
    plusButton.classList.add('add-todo-button');
    plusButton.addEventListener('click', () => {
        addTodoForm.classList.toggle('form');
    });
    todoList.appendChild(plusButton);

}

export function generateFooter() {
    const content = document.querySelector('.content');

    const footer = document.createElement('footer');
    content.appendChild(footer);

    const footerMessage = document.createElement('div');
    footerMessage.textContent = 'All rights reserved tokumei';
    footer.appendChild(footerMessage);

    const links = document.createElement('div');
    links.classList.add('links');
    footer.appendChild(links);

    // @ param should be image address
    links.appendChild(createLinks('Github'));
    links.appendChild(createLinks('Gmail'));
    links.appendChild(createLinks('LinkedIn'));
}

function clearTable() {
    const todoWrapper = document.querySelector('.todo-wrapper');
    todoWrapper.innerHTML = '';
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

function clearSideBar() {
    const sideBar = document.querySelector('.project-holder');
    sideBar.innerHTML = '';
}

function clearProjectForm() {
    const projectInput = document.querySelector('#project-name');
    projectInput.value = '';
}

function clearTodoForm() {
    const todoInput = document.querySelector('#todo-name');
    todoInput.value = '';

    // change this to select
    const priorityInput = document.querySelector('#priority');
    priorityInput.value = '';

    const dueDateInput = document.querySelector('#due-date');
    dueDateInput.value = '';
}
