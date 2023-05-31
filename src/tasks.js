

class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.taskList = [];
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}