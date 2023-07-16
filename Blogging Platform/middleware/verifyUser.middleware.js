const jwt=require("jsonwebtoken")
exports.verify=async(req,res,next)=>{
    const token=req.headers["access-token"]
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try{
        const decoded=jwt.verify(token,process.env.JSONWEBTOKEN_KEY)
        req.body.userid=decoded._id
    } catch (e) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}