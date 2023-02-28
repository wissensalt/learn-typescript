import {TodoStatus} from "./TodoStatus";
import {TodoItem} from "./TodoItem";

function addTodoItem(newTodoItem: TodoItem, todoItems: TodoItem[]): TodoItem {
    newTodoItem.id = getNextId(todoItems);
    todoItems.push(newTodoItem)

    return newTodoItem;
}

function getNextId(todoItems: TodoItem[]): number {
    if (todoItems.length === 0) {
        return 1;
    }

    return todoItems
        .reduce((todoItemA, todoItemB) =>
            todoItemA.id > todoItemB.id ? todoItemA : todoItemB
        ).id + 1;
}

const todoItems: TodoItem[] = []

const todoItemOne: TodoItem = {
    completedOn: new Date("01-01-2000"),
    id: 0,
    status: TodoStatus.TODO,
    title: "Learning Typescript"
}

const savedTodoItemOne: TodoItem = addTodoItem(todoItemOne, todoItems)
console.log(savedTodoItemOne)

const todoItemTwo: TodoItem = {
    completedOn: new Date("01-01-2000"),
    id: 0,
    status: TodoStatus.TODO,
    title: "Learning Typescript OOP"
}

const savedTodoItemTwo: TodoItem = addTodoItem(todoItemTwo, todoItems)
console.log(savedTodoItemTwo)

savedTodoItemOne.status = TodoStatus.IN_PROGRESS;
console.log(todoItems);

savedTodoItemOne.status = TodoStatus.DONE;
console.log(todoItems);