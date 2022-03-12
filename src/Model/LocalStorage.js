import { createProject } from './Project';

function saveProject(project) {

    localStorage.setItem(project.name, JSON.stringify(project));
}

export function addTodo(project, todo) {
    const tempProject = createProject(project, todo);
    saveProject(tempProject);
}

export function addProject(projectName) {
    const project = createProject(projectName);
    saveProject(project);
}