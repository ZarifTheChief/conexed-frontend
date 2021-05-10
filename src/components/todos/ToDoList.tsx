import React, { useContext } from "react"
import { convertToObject } from "typescript";
import ToDosContext from "../../todosContext"
import ToDoItem from "./ToDoItem"

const ToDoList: React.FC = () => {
    const todosContext = useContext(ToDosContext);
    const all_todos = {...todosContext.todos};
    // const all_todos = todosContext.todos;
    const all_completed = todosContext.completed;
    console.log(all_todos)   
    
    const completeToDo: CompleteToDo = selectedTodo => {                
        let key = selectedTodo.createDate;
        all_todos[key][0].completed = !all_todos[key][0].completed;        
        // console.log(all_todos[key][0].completed)
        // all_completed[key] = all_todos[key];                
        all_completed[key] = [{
            text: all_todos[key][0].text,
            completed: all_todos[key][0].completed,
            createDate: all_todos[key][0].createDate
        }];        
        todosContext.updateToDos(all_todos);
        todosContext.updateCompleted(all_completed);        
    }

    const deleteToDo: DeleteToDo = selectedTodo => {
        let key = selectedTodo.createDate;
        delete all_todos[key];
        todosContext.updateToDos(all_todos);
        console.log(todosContext)
    }

    return (
        Object.keys(all_todos).length > 0 
            ? <ul>
                {
                    Object.keys(all_todos).map((value, index) => {
                        let todo = todosContext.todos[value][0];                        
                        if(!todo.completed){
                            return <ToDoItem key={todo.createDate} todo={todo} completeToDo={completeToDo} deleteToDo={deleteToDo} />   
                        }
                    })                    
                }
            </ul>
            : <p>You have nothing to do!</p>
    )
}

export default ToDoList;