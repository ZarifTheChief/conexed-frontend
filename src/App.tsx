import React, { useState } from "react";
import { setSyntheticTrailingComments } from "typescript";
import "./App.css";

import Header from "./components/Header";
import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";
import { ToDosContextProvider } from "./todosContext";

const App = () => {
    const [todos, setToDos] = useState<{ [key: string]: Array<ToDo> }>({})
    const [completed, setCompleted] = useState<{ [key: string]: Array<ToDo> }>({})
    
    const updateToDos = (todos: { [key: string]: Array<ToDo> }) => {
        setToDos(todos);
    }

    const updateCompleted = (todos: { [key: string]: Array<ToDo> }) => {
        setCompleted(todos);
    }
    
    const todosContextValues = {
        todos,
        completed,
        updateToDos,
        updateCompleted
    };

    return (
        <ToDosContextProvider value={todosContextValues}>
            <div className="app">
                <Header />            
                <section className="main-area flex-row">
                    <LeftArea />
                    <RightArea />
                </section>            
            </div>
        </ToDosContextProvider>
    );
};

export default App;
