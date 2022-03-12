import { setInitialProject } from './InitialState';
import { addTableForm, generateSectionHolder, generateFooter, generateHeader, generateSideBar, generateTodoTable } from './View/TemplateGenerator';

setInitialProject();

generateHeader();

generateSectionHolder();

generateSideBar();

generateTodoTable('Today');

addTableForm();

generateFooter();
