
export default class Project {
    constructor(name){
        this.name = name;
        this.toDo = [];
    }

    addToDo(toDoName) {
        this.toDo.push(toDoName);
    }

    getToDo() {
        return this.toDo;
    }

    deleteToDo(indexNum) {
        this.toDo.splice(indexNum, 1);
    }

    getName() {
        return this.name;
    }
}