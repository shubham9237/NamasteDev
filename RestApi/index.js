import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())
const PORT = 5111;

app.all('/', (req,res)=>{

    res.json({msg:"hello"});
})

const todos = [
    {
        id:1,
        title:"task 1",
        completed: true
    },
    {
        id:2,
        title:"task 2",
        completed: true
    },
    {
        id:3,
        title:"task 3",
        completed: false
    }
]

app.get('/todos', (req, res)=>{
    res.json(todos)
})

// READ


app.post('/todos', (req, res)=>{
    const toto = req.body
    todos.push(toto)
    res.json(todos)
})

// CREATE

app.put('/todos/:id', (req, res)=>{
    const updatedTodo = req.body

    const todoIndex = todos.findIndex(td => td.id === +req.params.id)

    if(todoIndex !== -1){
        todos[todoIndex] = updatedTodo
    }
    res.json(todos)
})

// UPDATE

app.delete('/todos/:id', (req, res)=>{
    const todoIndex = todos.findIndex(td => td.id === +req.params.id)

    if(todoIndex !== -1){
        todos.splice(todoIndex, 1)
    }
    res.json(todos)
})

// DELETE

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
})
