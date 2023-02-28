import {TodoStatus} from "./TodoStatus";

export interface TodoItem {
    id: number;
    title: string;
    status: TodoStatus;
    completedOn?: Date;
}