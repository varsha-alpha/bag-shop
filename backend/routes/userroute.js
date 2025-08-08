const express = require('express');
const router = express.Router();
const {usersignup, userlogin} = require("../controller/usercontroller");
const { protect } = require('../middleware/auth');

router.post("/user/signup",usersignup);
router.post("/user/login", userlogin);
router.get("/profile" , protect);

module.exports = router;