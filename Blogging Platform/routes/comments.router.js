const express=require("express")
const router=express.Router()
const controller=require("../controller/comments.controller")
const middleWare=require("../middleware/verifyUser.middleware")

router.post("/create",middleWare.verify,controller.createComment)
router.get("/getComments/:id",controller.getPostComment)
router.put("/updateComment",middleWare.verify,controller.updateComment)
router.delete("/delete/:id",middleWare.verify,controller.deleteComment)

module.exports=router