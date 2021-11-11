const express = require('express');
const router = express.Router();
const tdc = require('../controllers/todoController');

//Get all tasks
router.get("/",tdc.getTodoList);

//Add new todo task
router.post("/addtask", tdc.addTodoTask);

//Get task by id
router.get("/:id", tdc.getTodoTaskById);

//Edit existant task
router.put("/edittask/:id", tdc.editExistantTodoTask);

//Delete task
router.delete("/deletetask/:id", tdc.deleteTodoTask);

module.exports = router