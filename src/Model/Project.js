
// used arrow function because you can't store methods in localStorage
 export const createProject = (inName, inTodo) => {
    let name = inName;
    let todo = inTodo;
    
    // undefined is falsy
    if (!todo) {
        todo = [];
    }

    return {name, todo};
}
