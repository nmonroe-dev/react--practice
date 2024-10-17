const Todo = require("../models/Todo")

exports.getTodo = async (req, res) => {
    try{
        const todos =  await Todo.find()
        res.json(todos)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'Server Eroor'})
    }
}

exports.createTodo = async (req, res) =>{
    try{
        const newTodo = new Todo({
            todoTask: req.body.task
        })
        const saveTodo = await newTodo.save()
        res.json(saveTodo)
    }catch(err) {
        console.error(err) 
            res.status(500).json({message: 'Server Eroor'})
    }
}


exports.updateTodo = async (req, res) => {
    try{
        const updateTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {completed: req.body.completed},
            {new: true}
        )
        res.json(updateTodo)
    }catch(err) {
        console.error(err)
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.deleteTodo = async (req, res) =>{
    try{
        await
        Todo.findByIdAndDelete(req.params.id)
        res.json({message: 'Task has been DELETED'})
    }catch(err) {
        console.error(err)
        res.status(500).json({ message: 'Server Error' });
    }
}
