const mongoose=require("mongoose")
const Post=require("../model/post")
const User=require("../model/user")

const createPost=async (req,res)=>{
    try{
        const {title,content,userid,tags}=req.body
        const user=await User.findById(userid)
        if(!user) return res.status(409).send("User not present")
        const post=await Post.create({title:title,content:content,author:user._id,tags:tags})
        res.status(201).send(post)
    } catch(e){
        res.send(e)
    }
}

const publishPost=async (req,res)=>{
    try{
        const postid=req.params.id
        const post=await Post.findByIdAndUpdate(postid,{"$set":{
                publishStatus:"published"
            }})
        if(!post) return res.status(409).send("Post Unavailable")
        res.status(200).send(post)
    } catch (e) {
        res.send(e)
    }
}

const updatePost=async (req,res)=>{
    try{
        const {userid}=req.body
        const user=await User.findById(userid)
        if(!user) return res.status(409).send("User not Authorized")
        delete req.body.userid
        const postid=req.body._id
        delete req.body._id
        const post=await Post.findByIdAndUpdate(postid,{"$set":req.body})
        res.status(201).send(post)
    } catch (e) {
        res.send(e)
    }
}

const deletePost=async (req,res)=>{
    try{
        const {userid}=req.body
        const user=await User.findById(userid)
        if(!user) return res.status(409).send("User not Authorized")
        delete req.body.userid

    } catch (e) {
        res.send(e)
    }
}
module.exports={createPost,publishPost,updatePost,deletePost}