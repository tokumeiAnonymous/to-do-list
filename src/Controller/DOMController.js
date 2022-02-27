import { projectArray } from "..";
import { clearFooter, clearTable, generateFooter, generateTodoTable } from "../View/TemplateGenerator";

export function addUpdateTableEventListeners() {
    // loop through all project in sidebar and add eventListener
    const projects = document.querySelectorAll('.project');

    for (const project of projects) {
        project.addEventListener('click', () => {
            clearTable();
            clearFooter();
            generateTodoTable(projectArray[project.getAttribute("data-index")]);
            generateFooter();
        });
    }
    // add event listener for every checkbox in todo
}

export function addProjectEventListener() {
    const addProjectButton = document.querySelector('.add-project-button');
    addProjectButton.addEventListener('click',() => {
        const addProjectForm = document.querySelector('.add-project');
        addProjectForm.style.display = "flex";

    })
}

export function addToDoEventListener() {
    const addToDoButton = document.querySelector('.add-todo-button');
    addToDoButton.addEventListener('click',() => {
        const addToDoForm = document.querySelector('.add-todo');
        addToDoForm.style.display = "flex";

    })
}
