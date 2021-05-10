import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

// app.get("/", (req, res) => res.send("Server is up and running"))

app.listen(9000, () => {
    console.log(`Server running on port ${9000}`);
});

app.post('/add_todo', (req, res)=>{
    let todo = {
        text: req.body.text,
        completed: req.body.completed
    };

    localStorage.setItem('todos', JSON.stringify(todo))
})

app.post('/delete_todo', (req, res)=>{})

app.post('/completed', (req, res)=>{})

app.post('/get_todos', (req, res)=>{})
