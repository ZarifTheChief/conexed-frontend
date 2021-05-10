/// <reference types="react-scripts" />

type ToDo = {
    text: string;
    completed: boolean;
    createDate: string;
};

type CompleteToDo = (selectedToDo: ToDo) => void;

type DeleteToDo = (selectedToDo: ToDo) => void;

type AddToDo = (newToDo: string) => void;