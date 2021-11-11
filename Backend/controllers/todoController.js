const todoSchema = require('../models/todoSchema');

//Get all items
exports.getTodoList = async (req,res,next)=>{
    try {
        const items = await todoSchema.find();
        res.status(200).json(items);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}

//Add new todo item
exports.addTodoItem = async (req,res)=>{
    try{
        const item = new todoSchema(req.body);
        await item.save();
        res.status(200).json(item);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}

//Get item by id
exports.getTodoItemById = (req,res,next)=>{
    try{
        const id = req.params.id;
        todoSchema.findById(id,(err, i)=> {
            if (err) 
                return res.status(404).json("Item not found!");
            else 
                return res.status(200).json(i);
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}

//Edit existant item
exports.editExistantTodoItem = async (req,res)=>{
    try{
        const item = req.body;
        const id = req.params.uid;
        const i = await todoSchema.findById(id);
        if(!i)
        res.status(404).json({message:"This item does not exist!"});
        else{
            await todoSchema.findByIdAndUpdate(id, item);
            res.status(200).json({message:"Item with id "+id+"  has been updated successfuly"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!"});
    }
}
//Delete item
exports. deleteTodoItem = async (req,res)=>{
    try{
        const id = req.params.uid;
        const item = await todoSchema.findById(id);
        if(!item)
            res.status(404).json({message:"This item does not exist!"});
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