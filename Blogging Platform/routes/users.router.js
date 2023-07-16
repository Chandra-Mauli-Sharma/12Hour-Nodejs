const express = require('express');
const router = express.Router();
const controller=require("../controller/user.controller")

router.post("/signup",controller.signup)
router.get("/signin",controller.signin)

module.exports = router;
