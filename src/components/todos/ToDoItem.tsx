
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
// import "./ToDo.css"

// declaring parameters that can be passed in 
// vue === props
// todo object + function being passed in
interface Props {        
    todo: ToDo;
    completeToDo: CompleteToDo;
    deleteToDo: DeleteToDo;
}

const ToDoItem: React.FC<Props> = ({ todo, completeToDo, deleteToDo }) => {
    return <li>
        <label className={ todo.completed ? "completed" : "" }>            
            <button onClick={() => deleteToDo(todo)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            <button onClick={() => completeToDo(todo)}><FontAwesomeIcon icon={faCheck} /></button>
            { todo.text }
        </label>
    </li>;
}

export default ToDoItem;