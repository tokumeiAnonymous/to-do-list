import { generateFooter, generateHeader, generateSideBar, generateTodoTable } from "./View/TemplateGenerator";
const { format } = require('date-fns');

import ToDo from "./Model/ToDo";
import Project from "./Model/Project";
import { addProjectEventListener, addToDoEventListener, addUpdateTableEventListeners } from "./Controller/DOMController";


// Sample to do
const toDo1 = new ToDo("Try 1", "Low", format(new Date(), 'dd.MM.yyyy'));
const toDo2 = new ToDo("Try 2", "Medium", format(new Date(), 'dd.MM.yyyy'));
const toDo3 = new ToDo("Try 3", "High", format(new Date(), 'dd.MM.yyyy'));
const toDo4 = new ToDo("Try 4", "High", format(new Date(), 'dd.MM.yyyy'));
const toDo5 = new ToDo("Try 5", "Low", format(new Date(), 'dd.MM.yyyy'));
const toDo6 = new ToDo("Try 6", "Low", format(new Date(), 'dd.MM.yyyy'));

// see how to display checked checkbox if its value is true
// toDo3.setFinish(true);

const project1 = new Project("Project 1");
project1.addToDo(toDo1);
project1.addToDo(toDo2);
project1.addToDo(toDo3);

const today = new Project("Today");
today.addToDo(toDo4);
today.addToDo(toDo5);

const project2 = new Project("Test 2");
project2.addToDo(toDo6);

export const projectArray = [today, project1, project2];

generateHeader();

// @ param should passed project array
generateSideBar(projectArray);

// @ param should pass project object
generateTodoTable(project1);

generateFooter();

addUpdateTableEventListeners();

addProjectEventListener();

addToDoEventListener();