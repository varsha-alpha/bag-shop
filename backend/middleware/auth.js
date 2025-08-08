const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const protect = (req,res,next)=>{

        if(!token) return res.status(401).send({message:"No token Acess denied"});

    try {
         const token = req.headers.authorization;

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;

    next();

    } catch (error) {
     
        res.status(401).send({message:"invalid token"});

    }
}

const isadmin = (req,res,next) => {
    
    if(req.user.role !== "seller"){
        req.status(403).send({message:"Acess denied Admin only"})
    }

    next()
}

module.exports = {
    protect,
    isadmin
}