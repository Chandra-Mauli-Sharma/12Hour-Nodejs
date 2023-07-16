const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const User=require("../model/user")
const bcrypt = require("bcrypt")

const signup=async (req,res)=>{
    try{
        const {email,password,username}=req.body
        const existingUser=await User.findOne({email:email})
        if(existingUser) return res.status(409).send("User Already Exist. Please Login");
        const encryptPassword=await bcrypt.hash(password,10)
        const user=await User.create({username:username,email:email,password:encryptPassword})
        const token=jwt.sign({_id:user.id,email:email},process.env.JSONWEBTOKEN_KEY,{
            expiresIn: '365d',
        })
        res.status(201).send({data:user,token:token})
    } catch (e){
        res.send(e)
    }
}

const signin=async (req,res)=>{
    try{
        const {email,password}=req.body

        const user=await User.findOne({email:email})
        if(!user) return res.status(409).send("User doesn't exist")
        bcrypt.compare(password,user.password,(err,matched)=> {
            if (matched) {
                const token=jwt.sign({_id:user.id,email:email},process.env.JSONWEBTOKEN_KEY,{
                    expiresIn: '365d',
                })
                res.status(201).send({data:user,token:token})
            } else{
                return res.status(409).send("Wrong Password")
            }
        })
    } catch (e) {
        res.send(e)
    }
}

module.exports={signup,signin}