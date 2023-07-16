const express=require("express")
const router=express.Router()
const controller=require("../controllers/weather.controller")

router.get("/fetchWeather",controller.fetchWeather)

module.exports=router