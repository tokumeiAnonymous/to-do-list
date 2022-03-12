const { format } = require('date-fns');

// used arrow function because you can't store methods in localStorage
export const createTodo = (inName, inPriority, inDueDate) => {

    let name = inName;
    let priority = inPriority;
    let createDate = format(new Date(), 'dd.MM.yyyy');
    let dueDate = inDueDate;
    
    
    // undefined is falsy
    /*
    if (!createDate) {
        createDate = format(new Date(), 'dd.MM.yyyy');
    }
    */
    if (!dueDate) {
        dueDate = "Not set";
    }
    
    return {name, priority, createDate, dueDate}
}
