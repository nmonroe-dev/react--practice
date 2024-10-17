const express= require('express')
const route = express.Router()
const todoController = require("../controllers/controllers");


route.get('/todos', todoController.getTodo);
route.post('/todos', todoController.createTodo);
route.put('/todos/:id', todoController.updateTodo);
route.delete('/todos/:id', todoController.deleteTodo);

module.exports = route;