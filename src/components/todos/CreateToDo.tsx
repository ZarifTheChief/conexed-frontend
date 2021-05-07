import React, {ChangeEvent, FormEvent, useState} from "react"

interface Props {
    addToDo: AddToDo;
}

const CreateToDo: React.FC<Props> = ({ addToDo }) => {
    // maintining internal state 
    // === data(){} in vue ???
    const [newToDo, setNewToDo] = useState("");

    // === methods: {} in vue
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewToDo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();        
        addToDo(newToDo);
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