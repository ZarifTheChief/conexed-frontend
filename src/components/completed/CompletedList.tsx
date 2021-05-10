import React, { useContext } from "react"
import ToDosContext from "../../todosContext"
import CompletedItem from "./CompletedItem"

const CompletedList: React.FC = () => {
    const todosContext = useContext(ToDosContext);
    const all_completed = todosContext.completed;
    
    console.log(all_completed)    
    
    return (
        Object.keys(all_completed).length > 0 
            ? <ul>
                {
                    Object.keys(all_completed).map((value, index) => {
                        let todo = todosContext.todos[value][0];                        
                        if(todo.completed){
                            return <CompletedItem key={todo.createDate} todo={todo} />   
                        }                        
                    })                    
                }
            </ul>
            : <p>You haven't completed anything...</p>
    )
}

export default CompletedList;