import { setTestProject } from './InitialState';
import { getTodayAndDue } from './InitialState';
import { addTableForm, generateSectionHolder, generateFooter, generateHeader, generateSideBar, generateTodoTable } from './View/TemplateGenerator';

// setTestProject();

const { todayProject, dueProject } = getTodayAndDue();

localStorage.setItem('Today', JSON.stringify(todayProject));
localStorage.setItem('Due', JSON.stringify(dueProject));

generateHeader();

generateSectionHolder();

generateSideBar();

generateTodoTable('Today');

addTableForm();

generateFooter();
