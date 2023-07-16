const ToDo=require("../model/todo")
const addToDo=async (req,res)=>{
    try{
        const {title,description}=req.body
        const todo=await ToDo.create({title:title,description:description})
        res.status(200).send(todo)
    } catch (e){
        console.log(e)
    }
}

const getToDo=async (req,res)=>{
    try{
        const id=req.params.id
        const todo=await ToDo.findById(id)
        res.status(200).send(todo)
    } catch (e){
        console.log(e)
    }
}

const updateToDo=async (req,res)=>{
    try{
        const {_id,title,description}=req.body
        const todo=await ToDo.findByIdAndUpdate(_id, {"$set":
        {
            title:title,
            description: description
        }
    })
        res.status(200).send(todo)
    } catch (e){
        console.log(e)
    }
}

const deleteToDo=async (req,res)=>{
    try{
        const id=req.params.id
        const todo=await ToDo.findByIdAndDelete(id)
        res.status(200).send(todo)
    } catch (e){
        console.log(e)
    }
}

const getToDoList=async (req,res)=>{
    try{
        const todoList=await ToDo.find()
        res.status(200).send({data:todoList})
    } catch (e){
        console.log(e)
    }
}

module.exports={addToDo,getToDo,updateToDo,deleteToDo,getToDoList}