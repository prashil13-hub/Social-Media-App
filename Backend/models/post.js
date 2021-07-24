const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    postUsername:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    postText:{
        type:String,
        max:50
    },
    postImg:{
        type:String,
    }

})


const Post = mongoose.model('Post',postSchema);

module.exports=Post;