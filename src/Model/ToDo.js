const { format } = require('date-fns');

export default class ToDo {
    constructor (name, priority, dueDate) {
        this.name = name;
        this.priority  = priority;
        const today = format(new Date(), 'dd.MM.yyyy');
        this.dueDate = dueDate;
        this.createDate = today;
        this.finish = false;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }

    getCreateDate() {
        return this.createDate;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDueDate() {
        return this.dueDate;
    }

    setFinish() {
        this.finish = true;
    }

    isFinish() {
        return this.finish;
    }
}
