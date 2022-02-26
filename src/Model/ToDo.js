
export default class ToDo {
    constructor (name, priority, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.finish = false;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDueDate() {
        return this.dueDate;
    }

    setCreateDate() {
        // gets current date
        this.createDate = false;
    }

    getCreateDate() {
        return this.createDate;
    }

    setFinish() {
        this.finish = true;
    }

    isFinish() {
        return this.finish;
    }
}
