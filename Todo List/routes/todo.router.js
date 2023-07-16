const express=require("express")
const router=express.Router()
const controller=require("../controllers/todo.controller")
router.post("/addToDo",controller.addToDo)
router.get("/getToDo/:id",controller.getToDo)
router.put("/updateToDo",controller.updateToDo)
router.delete("/deleteToDo/:id",controller.deleteToDo)
router.get("/getToDoList",controller.getToDoList)

module.exports=router