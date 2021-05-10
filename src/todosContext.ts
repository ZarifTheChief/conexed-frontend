import{ createContext } from 'react';

export interface ToDosProps {
    todos: { [key:string]: Array<ToDo> },
    completed: { [key:string]: Array<ToDo> },
    updateToDos: (todos: { [key:string]: Array<ToDo> }) => void,
    updateCompleted: (completed: { [key:string]: Array<ToDo> }) => void;
}

export const ToDosContext = createContext<ToDosProps>({
    todos: {},
    completed: {},
    updateToDos: (todos: { [key:string]: Array<ToDo> }) => {},    
    updateCompleted: (completed: { [key:string]: Array<ToDo> }) => {}
});

export const ToDosContextConsumer = ToDosContext.Consumer;
export const ToDosContextProvider = ToDosContext.Provider;
export default ToDosContext;