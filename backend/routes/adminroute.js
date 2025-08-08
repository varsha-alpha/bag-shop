const express = require("express");
const { protect, isadmin } = require("../middleware/auth");
const adminrouter = express.Router();

adminrouter.get("/admin/dashboard", protect , isadmin , (req,res) => {
    res.json({message:"welcome to admin dashboard"});
})

module.exports = adminrouter;