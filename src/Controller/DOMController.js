import { saveProject } from "../Model/LocalStorage";
import Project from "../Model/Project";
import ToDo from "../Model/ToDo";
import { clearFooter, clearTable, generateFooter, generateTodoTable } from "../View/TemplateGenerator";

export function addUpdateTableEventListeners() {
    // loop through all project in sidebar and add eventListener
    const projects = document.querySelectorAll('.project');

    for (const project of projects) {
        project.addEventListener('click', () => {
            clearTable();
            clearFooter();

            const selectedProject = localStorage.getItem(JSON.parse(`${project.value}`));
            generateTodoTable();
            // addProjectEventListeners();
            generateFooter();
        });
    }
    // add event listener for every checkbox in todo
}

export function addProjectEventListeners() {
    
    const addProjectButton = document.querySelector('.add-project-button');
    addProjectButton.addEventListener('click',() => {

        const addProjectForm = document.querySelector('.add-project');
        addProjectForm.classList.toggle('form');
    });

    const cancelButton = document.querySelector('.project-cancel');
    cancelButton.addEventListener('click', () => {
        const addProjectForm = document.querySelector('.add-project');
        addProjectForm.classList.toggle('form');
    });

    const addButton = document.querySelector('.project-add');
    addButton.addEventListener('click', () => {

        // validate first if not satisfied simply return

        const name = document.querySelector('#project-name').value;
        const project = new Project(name);
        saveProject(project);
    });

}

export function addToDoEventListeners() {

    const addTodoButton = document.querySelector('.add-todo-button');
    addTodoButton.addEventListener('click',() => {

        const addTodoForm = document.querySelector('.add-todo');
        addTodoForm.classList.toggle('form');
    });

    const cancelButton = document.querySelector('.todo-cancel');
    cancelButton.addEventListener('click', () => {
        const addTodoForm = document.querySelector('.add-todo');
        addTodoForm.classList.toggle('form');
    });

    const addButton = document.querySelector('.todo-add');
    addButton.addEventListener('click', () => {

        // validate first if not satisfied simply return

        const name = document.querySelector('#todo-name').value;
        const priority = document.querySelector('#priority').value;
        const dueDate = document.querySelector('#due-date').value;
        const todo = new ToDo(name, priority, dueDate);


    });
}
