const express=require("express")
const router=express.Router()
const controller=require("../controller/posts.controller")
const middleware=require("../middleware/verifyUser.middleware")

router.post("/create",middleware.verify,controller.createPost)
router.post("/publish/:id",middleware.verify,controller.publishPost)
router.put("/updatePost",middleware.verify,controller.updatePost)
router.delete("/deletePost/:id",middleware.verify,controller.deletePost)

module.exports=router