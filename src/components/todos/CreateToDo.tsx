import React, {ChangeEvent, FormEvent, useContext, useState} from "react"
import { ToDosContext } from "../../todosContext";

// interface Props {
//     addToDo: AddToDo;
// }

const CreateToDo: React.FC = () => {
    // maintining internal state 
    // === data(){} in vue ???
    const [newToDo, setNewToDo] = useState("");

    const todosContext = useContext(ToDosContext);

    // === methods: {} in vue
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewToDo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let all_todos = {...todosContext.todos};
        let todo = newToDo.trim();
        if(todo.length){
            let createDate = Date.now().toString();
            let newToDoObj = {
                text: todo,
                completed: false,
                createDate: createDate
            };    
            all_todos[createDate] = [newToDoObj];
            todosContext.updateToDos(all_todos);            
        }
        setNewToDo("");
    }

    return(
        <form>
            <input type="text" value={newToDo}  onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Item</button>
        </form>
    )
}

export default CreateToDo;