import * as promptSync from 'prompt-sync';

enum TodoStatus {
    TODO, IN_PROGRESS, DONE
}

class Todo {
    id: number;
    title: string;
    description?: string;
    status: TodoStatus;
}

let todos: Todo[] = [];
const prompt = promptSync();

function printOptions(): void {
    console.log("1. Add Task\n2. Update Task\n3. Delete Task\n4. Stop");
}

function printTodos(): void {
    console.log("Your Todos : ")
    todos.map(todo => {
        console.log(todo)
    })
}

function getNextId(): number {
    if (todos.length == 0) {
        return 1;
    }

    return todos.reduce((todoA, todoB) => todoA.id > todoB.id ? todoA : todoB).id + 1;
}

function createTodo(): void {
    const title: string = prompt("Title : ");
    const description: string = prompt("Description : ");
    const newTodo: Todo = {
        id: getNextId(),
        title: title,
        description: description,
        status: TodoStatus.TODO
    }
    todos.push(newTodo);
}

function findTodo(id: number): Todo {
    return todos.find(todo => todo.id == id);
}

function removeTodoById(id: number): Todo[] {
    return todos.filter(todo => todo.id != id);
}

function updateTodo(): void {
    const id: number = prompt("Input todo id : ")
    const toUpdateTodo: Todo = findTodo(id);
    if (toUpdateTodo == null) {
        return null;
    }

    const title: string = prompt("Title : ");
    const description: string = prompt("Description : ");
    const status: TodoStatus = prompt("Status : ");
    const updatedTodo: Todo = {
        id: id,
        title: title,
        description: description,
        status: status
    }
    todos = removeTodoById(id);
    todos.push(updatedTodo);
}

let stop = false;

function deleteTodo(): void {
    const id: number = prompt("Input todo id : ")
    const toUpdateTodo: Todo = findTodo(id);
    if (toUpdateTodo == null) {
        return null;
    }
    todos = removeTodoById(id);
}

while (!stop) {
    printTodos();
    printOptions();
    const pickedOption: number = prompt("Choose option (1-4) : ")
    if (pickedOption == 1) {
        createTodo();
    }

    if (pickedOption == 2) {
        updateTodo();
    }

    if (pickedOption == 3) {
        deleteTodo();
    }

    if (pickedOption == 4) {
        stop = true;
        console.log("Program stopped !");
    }
}
