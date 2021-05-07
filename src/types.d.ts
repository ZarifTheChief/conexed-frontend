type ToDo = {
    text: string;
    completed: boolean;
};

type ToggleToDo = (selectedToDo: ToDo) => void;

type AddToDo = (newToDo: string) => void;