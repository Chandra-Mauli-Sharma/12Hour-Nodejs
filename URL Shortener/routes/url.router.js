const express=require("express")
const router=express.Router()
const controller=require("../controller/urlshortener.controller")
router.post("/",controller.encodeUrl)
router.get("/:id",controller.getUrl)

module.exports=router