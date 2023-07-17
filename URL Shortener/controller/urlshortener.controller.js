const crypto = require("node:crypto")
const Url=require("../model/url")

const encodeUrl=async (req,res)=>{
    try {
        const {original_url}=req.body
        const encodedurl=crypto.createHash("sha256").update(original_url).digest("base64")
        await Url.create({originalUrl:original_url,shortUrl:encodedurl})
        res.status(201).send(req.protocol+"://"+req.headers.host+"/"+encodedurl)
    } catch (e) {
        res.send(e)
    }
}

const getUrl=async (req,res)=>{
    try{
        const encodedId=req.params.id

        const url=await Url.findOne({shortUrl:encodedId})

        res.redirect(url.originalUrl)
    } catch (e) {
        res.send(e)
    }
}

module.exports={encodeUrl,getUrl}