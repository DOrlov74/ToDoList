import { toDoData, ToDoElement } from "../models/ToDoElement"

export const getToDoList = () => {
    return (toDoData);
}

export const getToDo = (id: Number) => {
    const todo = toDoData.find(t => t.Id === id)
    return (todo);
}

export const postToDo = (todo: ToDoElement) => {
    if (todo.Id === 0){
        const taskId = Math.max(...toDoData.map(t => t.Id)) + 1;
        todo.Id = taskId;
        toDoData.push(todo);
    } else {
        const oldtodo = toDoData.find(t => t.Id === todo.Id);
        if (oldtodo){
            toDoData[toDoData.indexOf(oldtodo)] = todo;
        }
    }    
    return todo;
}

export const deleteToDo = (id: number) => {
    if (id) {
        const oldtodo = toDoData.find(t => t.Id === id);
        if (oldtodo){
            toDoData.splice(toDoData.indexOf(oldtodo), 1);
        }
    }
}