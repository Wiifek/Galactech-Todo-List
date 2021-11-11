const todoSchema = require('../models/todoSchema');

//Get all tasks
exports.getTodoList = async (req,res,next)=>{
    try {
        const tasks = await todoSchema.find();
        res.status(200).json(tasks);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}

//Add new todo task
exports.addTodoTask = async (req,res)=>{
    try{
        const task = new todoSchema(req.body);
        await task.save();
        res.status(200).json(task);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}

//Get task by id
exports.getTodoTaskById = (req,res,next)=>{
    try{
        const id = req.params.id;
        todoSchema.findById(id,(err, i)=> {
            if (err) 
                return res.status(404).json("Task not found!");
            else 
                return res.status(200).json(i);
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}

//Edit existant task
exports.editExistantTodoTask = async (req,res)=>{
    try{
        const task = req.body;
        const id = req.params.id;
        const t = await todoSchema.findById(id);
        if(!t)
        res.status(404).json({message:"This task does not exist!"});
        else{
            await todoSchema.findByIdAndUpdate(id, task);
            res.status(200).json({message:"Item with id "+id+"  has been updated successfuly"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}
//Delete task
exports. deleteTodoTask = async (req,res)=>{
    try{
        const id = req.params.id;
        const task = await todoSchema.findById(id);
        if(!task)
            res.status(404).json({message:"This task does not exist!"});
        else{
            await todoSchema.findByIdAndRemove(id);
            res.status(200).json({message:"Item with id "+id+" has been deleted successfuly"})        
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}