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

export function deleteProject(projectName) {
    localStorage.removeItem(projectName);
}

export function deleteTodo(todoName, projectName) {
    const tempProject = JSON.parse(localStorage.getItem(projectName));

    // traversed the array here because it contains object not just string. So can't use indexOf
    const index = getIndex(tempProject, todoName);

    if (index != -1) {
        tempProject.todo.splice(index, 1);
    }
    saveProject(tempProject);
}

function getIndex(project, todoName) {
    // can't use forEach because you can't break away from it
    for (let i = 0; i < project.todo.length; i++) {
        if (project.todo[i].name == todoName) return i;
    }
    return -1;
}