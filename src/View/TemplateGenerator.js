import "../style.css";
import toDoIconAddress from "../Assets/list-check-solid.svg";
import searchIconAddress from "../Assets/magnifying-glass-solid.svg";
import userIconAddress from "../Assets/user-solid.svg";
import plusIconAddress from "../Assets/plus-box.svg";
import deleteIconAddress from "../Assets/trash-can-solid.svg";
import { addProject, addTodo, deleteProject, deleteTodo } from "../Model/LocalStorage";
import { createTodo } from "../Model/Todo";

export function generateHeader() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  header.classList.add("header");
  body.appendChild(header);

  const left = document.createElement("div");
  left.classList.add("left", "control");
  header.appendChild(left);

  const logo = new Image();
  logo.classList.add("logo");
  logo.src = toDoIconAddress;
  left.appendChild(logo);

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "TodoWays";
  left.appendChild(title);

  const right = document.createElement("div");
  right.classList.add("right", "control");
  header.appendChild(right);

  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Search...";
  search.classList.add("search");
  right.appendChild(search);

  const searchButton = document.createElement("button");
  searchButton.classList.add("search-button");
  right.appendChild(searchButton);

  const searchIcon = new Image();
  searchIcon.src = searchIconAddress;
  searchButton.appendChild(searchIcon);

  const userButton = document.createElement("button");
  userButton.classList.add("user-button");
  right.appendChild(userButton);

  const userIcon = new Image();
  userIcon.src = userIconAddress;
  userButton.appendChild(userIcon);
}

export function generateSectionHolder() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.classList.add("content");
  body.appendChild(content);

  const projectList = document.createElement("ul");
  projectList.classList.add("project-holder");
  content.appendChild(projectList);

  const defaultProjectList = document.createElement("ul");
  defaultProjectList.classList.add("default");
  projectList.appendChild(defaultProjectList);

  const customProjectList = document.createElement("ul");
  customProjectList.classList.add("custom");
  projectList.appendChild(customProjectList);

  const todoHolder = document.createElement("div");
  todoHolder.classList.add("todo-holder");
  content.appendChild(todoHolder);

  const todoWrapper = document.createElement("div");
  todoWrapper.classList.add("todo-wrapper");
  todoHolder.appendChild(todoWrapper);
}

export function generateSideBar() {
  const projectList = document.querySelector(".custom");

  for (let i = 0; i < localStorage.length; i++) {

    const temp = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (temp.name === 'Today' || temp.name === 'Due') {
        generateDefaultProject(temp);
    }
    else {
      const project = document.createElement("li");
      project.classList.add("project");
      project.textContent = temp.name;

      // add eventListener
      const deleteIcon = new Image();
      deleteIcon.src = deleteIconAddress;
      deleteIcon.addEventListener('click', () => {
        deleteProject(temp.name);
        clearSideBar();
        generateSideBar();
    });
      project.appendChild(deleteIcon);

      // we use arrow function to prevent calling the function while setting it
      project.addEventListener("click", () => {
        clearTable();
        generateTodoTable(project.textContent);
        const button = document.querySelector('.add-todo-button');
        button.classList.remove('hide');
      });

      projectList.appendChild(project);
    }
  }

  const form = document.createElement("form");
  form.classList.add("form", "project-add");

  const nameLabel = document.createElement("label");
  nameLabel.for = "project-name";
  nameLabel.textContent = "Name";
  form.appendChild(nameLabel);

  const name = document.createElement("input");
  name.type = "text";
  name.required = true;
  name.id = "project-name";
  form.appendChild(name);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Project";
  submitButton.type = "button";
  submitButton.classList.add("project-submit");
  submitButton.addEventListener("click", () => {
    if (!name.reportValidity()) return;
    addProject(name.value);
    clearSideBar();
    generateSideBar();
    form.classList.toggle("form");
  });
  form.appendChild(submitButton);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.type = "button";
  cancelButton.classList.add("cancel");
  cancelButton.addEventListener("click", () => {
    form.classList.toggle("form");
    clearProjectForm();
  });
  form.appendChild(cancelButton);

  projectList.appendChild(form);

  const plusButton = new Image();
  plusButton.src = plusIconAddress;
  plusButton.classList.add("add-button");
  plusButton.addEventListener("click", () => {
    form.classList.toggle("form");
  });
  projectList.appendChild(plusButton);
}

export function generateTodoTable(projectName) {
  const todoWrapper = document.querySelector(".todo-wrapper");

  const projectTitle = document.createElement("h1");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = projectName;
  todoWrapper.appendChild(projectTitle);

  const todoTable = document.createElement("table");
  todoTable.classList.add("todo-table");
  todoWrapper.appendChild(todoTable);

  const thead = document.createElement("thead");
  todoTable.appendChild(thead);

  thead.appendChild(createTD("Name"));
  thead.appendChild(createTD("Priority"));
  thead.appendChild(createTD("Date Created"));
  thead.appendChild(createTD("Due Date"));

  const project = JSON.parse(localStorage.getItem(projectName));

  // catches not project object
  // research about instanceOf
  if (!project.todo) return;

  for (let i = 0; i < project.todo.length; i++) {
    const row = document.createElement("tr");
    row.classList.add("to-do");

    const name = project.todo[i].name;
    const priority = project.todo[i].priority;
    const createDate = project.todo[i].createDate;
    const dueDate = project.todo[i].dueDate;

    row.appendChild(createTD(name));
    row.appendChild(createTD(priority));
    row.appendChild(createTD(createDate));
    row.appendChild(createTD(dueDate));

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        checkbox.parentElement.classList.toggle('checked');
    });
    checkbox.classList.add("checkbox");
    row.appendChild(checkbox);

    const deleteIcon = new Image();
    deleteIcon.src = deleteIconAddress;
    deleteIcon.addEventListener('click', () => {

      const projectName = document.querySelector('.project-title').textContent;
      deleteTodo(name, projectName);
      clearTable();
      generateTodoTable(projectName);
    });
    row.appendChild(deleteIcon);

    row.classList.add(`${priority.toLowerCase()}`);

    todoTable.appendChild(row);
  }
}

export function addTableForm() {
  const todoList = document.querySelector(".todo-holder");

  const addTodoForm = document.createElement("form");
  addTodoForm.classList.add("add-todo", "form");
  todoList.appendChild(addTodoForm);

  const todoNameLabel = document.createElement("label");
  todoNameLabel.for = "todo-name";
  todoNameLabel.textContent = "Name";
  addTodoForm.appendChild(todoNameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "todo-name";
  nameInput.required = true;
  addTodoForm.appendChild(nameInput);

  const priorityLabel = document.createElement("label");
  priorityLabel.for = "priority-select";
  priorityLabel.textContent = "Priority";
  addTodoForm.appendChild(priorityLabel);

  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";
  priorityInput.value = "Low";
  priorityInput.id = "priority-select";
  priorityInput.textContent = priorityInput.value;
  priorityInput.required = true;

  const optionLow = document.createElement('option');
  optionLow.value = 'Low';
  optionLow.textContent = optionLow.value;
  priorityInput.appendChild(optionLow);

  const optionMedium = document.createElement('option');
  optionMedium.value = 'Medium';
  optionMedium.textContent = optionMedium.value;
  priorityInput.appendChild(optionMedium);

  const optionHigh = document.createElement('option');
  optionHigh.value = 'High';
  optionHigh.textContent = optionHigh.value;
  priorityInput.appendChild(optionHigh);

  addTodoForm.appendChild(priorityInput);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.for = "due-date";
  dueDateLabel.textContent = "Due Date";
  addTodoForm.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.id = "due-date";
  addTodoForm.appendChild(dueDate);

  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "Add To do";
  addTodoButton.type = "button";
  addTodoButton.classList.add("todo-add");
  addTodoButton.addEventListener("click", () => {
    if (!nameInput.reportValidity()) return;
    else if (!priorityInput.reportValidity()) return;

    const newTodo = createTodo(
      nameInput.value,
      priorityInput.value,
      dueDate.value
    );
    const projectDisplayedName =
      document.querySelector(".project-title").textContent;
    const todoArray = JSON.parse(
      localStorage.getItem(projectDisplayedName)
    ).todo;
    todoArray.push(newTodo);
    addTodo(projectDisplayedName, todoArray);
    clearTable();
    clearTodoForm();
    generateTodoTable(projectDisplayedName);

    addTodoForm.classList.toggle("form");
  });
  addTodoForm.appendChild(addTodoButton);
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.type = "button";
  cancelButton.classList.add("todo-cancel", "cancel");
  cancelButton.addEventListener("click", () => {
    addTodoForm.classList.toggle("form");
    clearTodoForm();
  });
  addTodoForm.appendChild(cancelButton);

  const plusButton = new Image();
  plusButton.src = plusIconAddress;
  plusButton.classList.add("add-todo-button", 'hide');
  plusButton.addEventListener("click", () => {
    addTodoForm.classList.toggle("form");
  });
  todoList.appendChild(plusButton);
}

export function generateFooter() {
  const body = document.querySelector("body");

  const footer = document.createElement("footer");
  body.appendChild(footer);

  const footerMessage = document.createElement("div");
  footerMessage.textContent = "All rights reserved tokumei";
  footer.appendChild(footerMessage);

  const links = document.createElement("div");
  links.classList.add("links");
  footer.appendChild(links);

  // @ param should be image address
  links.appendChild(createLinks("Github", 'https://github.com/tokumeiAnonymous'));
  links.appendChild(createLinks("LinkedIn", 'https://www.linkedin.com/in/jerome-taguba-a15735231/'));
}

function clearTable() {
  const todoWrapper = document.querySelector(".todo-wrapper");
  todoWrapper.innerHTML = "";
}

function createTD(tdName) {
  const td = document.createElement("td");
  td.textContent = tdName;

  return td;
}

function createLinks(linkName, address) {
  const anchor = document.createElement('a');
  const link = document.createElement("div");
  link.textContent = linkName;
  anchor.appendChild(link);

  anchor.href = address;

  return anchor;
}

function clearSideBar() {
  const defaultProject = document.querySelector('.default');
  defaultProject.innerHTML = '';
  const customProject = document.querySelector('.custom');
  customProject.innerHTML = '';
}

function clearProjectForm() {
  const projectInput = document.querySelector("#project-name");
  projectInput.value = "";
}

function clearTodoForm() {
  const todoInput = document.querySelector("#todo-name");
  todoInput.value = "";

  // change this to select
  const priorityInput = document.querySelector("#priority");
  priorityInput.value = "";

  const dueDateInput = document.querySelector("#due-date");
  dueDateInput.value = "";
}

function generateDefaultProject(projectObject) {
  const defaultProjectHolder = document.querySelector('.default');

  const project = document.createElement("li");
  project.classList.add("project");
  project.textContent = projectObject.name;

    // we use arrow function to prevent calling the function while setting it
  project.addEventListener("click", () => {
      clearTable();
      generateTodoTable(project.textContent);
      const button = document.querySelector('.add-todo-button');
      button.classList.add('hide');
  });

  defaultProjectHolder.appendChild(project);
}