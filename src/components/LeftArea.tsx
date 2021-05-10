import React from "react";
import ToDoList from "./todos/ToDoList";
import CreateToDo from "./todos/CreateToDo"

const LeftArea: React.FC = () => {
    return (
        <div>
            <React.Fragment>                
                <CreateToDo />                
                <ToDoList />
            </React.Fragment>
        </div>
    )
}

export default LeftArea;