import React from "react"
import ToDoItem from "./ToDoItem"

// takes in an array of todo objects + function
interface Props {
    toDos: Array<ToDo>;
    toggleToDo: ToggleToDo;
}

// add in ID on todo creation and use that as key
const ToDoList: React.FC<Props> = ({ toDos, toggleToDo }) => {
    return (
        <ul>
            {toDos.map(todo => {
                return <ToDoItem key={todo.text} todo={todo} toggleToDo={toggleToDo} />
            })}
        </ul>
    )
}

export default ToDoList;