const usermodel = require("../models/usermodel")
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const usersignup = async (req,res)=>{

    try {

        let {name , email, password , role, dateofbirth} = req.body;

        let existinguser = await usermodel.findOne({email:email});

        if(existinguser){
            return res.status(400).send({message:"user already exists"});
        }

       const hash = await bcrypt.hash(password,12);

        let user = await usermodel.create({name, email, password:hash , role , dateofbirth});

        return res.status(201).send({message:"user created successfully",user});
        
    } catch (error) {
        return res.status(500).send({message:"Internal server error", error: error.message});
    }
}

const userlogin = async (req,res)=>{

    try {

        let { email, password } = req.body;

        let existinguser = await usermodel.findOne({email:email});

        if(!existinguser){
            return res.status(400).send({message:"user does not exist"});
        }

        const is_match = await bcrypt.compare(password,existinguser.password);
        if(!is_match){
            return res.status(400).send({message:"Invalid credentials"});
        }
         const token = jwt.sign({userid:existinguser._id, role:existinguser.role} , process.env.JWT_SECRET, {expiresIn:"1h"});
 
           let userdata = {
            name: existinguser.name,
            email: existinguser.email,
            role: existinguser.role,
            dateofbirth: existinguser.dateofbirth
        };

    return res.status(200).send({
      message: "User login successfully",
      token,
      user: userdata,
    });
    } catch (error) {
        return res.status(500).send({message:"Internal server error", error: error.message});
    }
}


module.exports = {
    usersignup ,
    userlogin
};