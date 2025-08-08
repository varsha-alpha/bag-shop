const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:String,
    email: {
        type:String,
        required:true
    },
    password:String,
    dateofbirth:String,
    role:{
        type:String,
        enum:["user" , "seller"],
        default:"user",
    }
})

const usermodel = mongoose.model("user", userschema);
module.exports = usermodel;