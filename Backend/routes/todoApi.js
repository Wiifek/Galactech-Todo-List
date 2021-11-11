const express = require('express');
const router = express.Router();
const tdc = require('../controllers/todoController');

//Get all items
router.get("/",tdc.getTodoList);

//Add new todo item
router.post("/additem", tdc.addTodoItem);

//Get item by id
router.get("/:id", tdc.getTodoItemById);

//Edit existant item
router.put("/edititem/:uid", tdc.editExistantTodoItem);

//Delete item
router.delete("/deleteitem/:uid", tdc.deleteTodoItem);

module.exports = router