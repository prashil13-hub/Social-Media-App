const express = require('express');
const router = express.Router();
const User = require('../models/user');



// router.get('/register', async (req,res)=>{
//     const user = await new User({
//         username:'prashil',
//         email:'prashil@123gmail.com',
//         password:"1234567"
//     })

//     await user.save();
//     res.send("ok")
// })













module.exports=router;