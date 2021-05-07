import React, { useState } from "react";
import ToDoList from "./todos/ToDoList";
import CreateToDo from "./todos/CreateToDo"

const sample:Array<ToDo> = [
    { text: "Write Some Code", completed: true},
    { text: "Eat Dinner", completed: false},
    { text: "Some Apex?", completed: false}
];

const LeftArea: React.FC = () => {
    const [todos, setTodos] = useState(sample)
    const toggleToDo: ToggleToDo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if(todo === selectedTodo) {                
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }            
            return todo;
        })
        setTodos(newTodos)
    }
    const addToDo:AddToDo = newToDo => {
        newToDo.trim() !== "" && setTodos([...todos, {text: newToDo, completed: false}])
    }

    return (
        <React.Fragment>
            <CreateToDo addToDo={addToDo} />
            <ToDoList toDos={todos} toggleToDo={toggleToDo} />
        </React.Fragment>
    )
}

export default LeftArea;