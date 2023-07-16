const Comment=require("../model/comment")
const User = require("../model/user");

const createComment=async (req,res)=>{
    try{
        req.body.author=req.body.userid
        const comment=await Comment.create(req.body)
        res.status(201).send(comment)
    } catch (e) {
        res.send(e)
    }
}

const getPostComment=async (req,res)=>{
    try{
        const postId=req.params.id
        const commentList=await Comment.find({postId:postId})
        res.status(201).send({data:commentList})
    } catch (e) {
        res.send(e)
    }
}

const updateComment=async (req,res)=>{
    try{
        const {userid}=req.body
        const user=await User.findById(userid)
        if(!user) return res.status(409).send("User not Authorized")
        delete req.body.userid
        const commentId=req.body._id
        delete req.body._id
        const comment=await Comment.findByIdAndUpdate(commentId,{"$set":req.body}).exec()
        res.status(201).send(comment)
    } catch (e) {
        res.send(e)
    }
}

const deleteComment=async (req,res)=>{
    try{
        const commentId=req.params.id
        const comment=await Comment.findByIdAndDelete(commentId)
        res.status(201).send(comment)
    } catch (e) {
        res.send(e)
    }
}

module.exports={createComment,getPostComment,updateComment,deleteComment}