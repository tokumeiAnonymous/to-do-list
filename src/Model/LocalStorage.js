
export function saveProject(project) {

    localStorage.setItem(project.getName(), JSON.stringify(project));
}

export function saveTodo(project, todo) {

    const tempProject = JSON.parse(localStorage.getItem(project.getName()));
    tempProject.addToDo(todo);
    localStorage.setItem(tempProject.getName(), JSON.stringify(tempProject));
}