const { format } = require('date-fns');

import { createProject } from './Model/Project';
import { createTodo } from './Model/Todo';

// Sample to do
export function setInitialProject() {

    const toDo1 = createTodo("Try 1", "Low", format(new Date(), '07/ 07/ 2022'));
    const toDo2 = createTodo("Try 2", "Medium", format(new Date(), '07/ 10/ 2022'));
    const toDo3 = createTodo("Try 3", "High", format(new Date(), '07/ 12/ 2022'));
    const toDo4 = createTodo("Try 4", "High", format(new Date(), '07/ 13/ 2022'));
    const toDo5 = createTodo("Try 5", "Low", format(new Date(), '07/ 11/ 2022'));
    const toDo6 = createTodo("Try 6", "Low", format(new Date(), '07/ 12/ 2022'));

    const project1 = createProject("Project 1");
    project1.todo.push(toDo1);
    project1.todo.push(toDo2);
    project1.todo.push(toDo3);

    const todayTodo = [toDo4, toDo5];
    const today = createProject("Today", todayTodo);
    
    const project2 = createProject("Test 2");
    project2.todo.push(toDo6);

    localStorage.setItem(project1.name, JSON.stringify(project1));
    localStorage.setItem(today.name, JSON.stringify(today));
    localStorage.setItem(project2.name, JSON.stringify(project2));
}