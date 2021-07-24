const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const upload = require('../multer')
const cloudinary =require('../cloudinary')
const fs =require('fs')



router.get('/home', async (req,res)=>{
    const posts = await Post.find();
    res.send(posts);
})















module.exports=router;
