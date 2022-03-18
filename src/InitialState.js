import { format } from 'date-fns';

import { createProject } from './Model/Project';
import { createTodo } from './Model/Todo';

// Sample to do
export function setTestProject() {

    const toDo1 = createTodo("Try 1", "Low", format(new Date(), '07/ 07/ 2021'));
    const toDo2 = createTodo("Try 2", "Medium", format(new Date(), '07/ 10/ 2022'));
    const toDo3 = createTodo("Try 3", "High", format(new Date(), 'dd/ MM/ yyyy'));
    const toDo4 = createTodo("Try 4", "High", format(new Date(), '07/ 13/ 2021'));
    const toDo5 = createTodo("Try 5", "Low", format(new Date(), '07/ 11/ 2022'));
    const toDo6 = createTodo("Try 6", "Low", format(new Date(), '07/ 12/ 2022'));

    const test1 = createProject("Test 1");
    test1.todo.push(toDo1);
    test1.todo.push(toDo2);
    test1.todo.push(toDo3);

    const test2Todo = [toDo4, toDo5];
    const test2 = createProject("Test 2", test2Todo);
    
    const test3 = createProject("Test 3");
    test3.todo.push(toDo6);

    localStorage.setItem(test1.name, JSON.stringify(test1));
    localStorage.setItem(test2.name, JSON.stringify(test2));
    localStorage.setItem(test3.name, JSON.stringify(test3));
}

export function getTodayAndDue() {
    const today = format(new Date(), 'dd/ MM/ yyyy');
    const todayArray = [];
    const dueArray = [];

    for (let i = 0; i < localStorage.length; i++) {

        const tempProject = JSON.parse(localStorage.getItem(localStorage.key(i)));

        // how to catch if somehow there are not project object in the localStorage
        
        // this prevents looping the todo of the previous Today and Due
        if (tempProject.name == 'Today' || tempProject.name == 'Due') continue;

        for (let j = 0; j < tempProject.todo.length; j++) {
            if (isBefore(today, tempProject.todo[j].dueDate)) dueArray.push(tempProject.todo[j]);
            else if (today == tempProject.todo[j].dueDate) todayArray.push(tempProject.todo[j]);
        }
    }

    const todayProject = createProject('Today', todayArray);
    const dueProject = createProject('Due', dueArray);

    return { todayProject, dueProject };
}

function isBefore(stringDate1, stringDate2) {
    // 'dd/ MM/ yyyy'
    const year1 = stringDate1.substring(8);
    const year2 = stringDate2.substring(8);
    const month1 = stringDate1.substring(4, 6);
    const month2 = stringDate2.substring(4, 6);
    const day1 = stringDate1.substring(0, 2);
    const day2 = stringDate2.substring(0, 2);

    if (year1 > year2) return true;
    else if (year1 < year2) return false;
    else if (month1 > month2) return true;
    else if (month1 < month2) return false;
    else if (day1 > day2) return true;
    else if (day1 < day2) return false;

    return false;
}