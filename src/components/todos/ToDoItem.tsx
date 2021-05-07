
import React from "react"
import "./ToDo.css"

// declaring parameters that can be passed in 
// vue === props
// todo object + function being passed in
interface Props {        
    todo: ToDo;
    toggleToDo: ToggleToDo;
}

const ToDoItem: React.FC<Props> = ({ todo, toggleToDo }) => {
    return <li>
        <label className={ todo.completed ? "completed" : "" }>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleToDo(todo)} />
            { todo.text }
        </label>
    </li>;
}

export default ToDoItem;