const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    profilePicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
        type:String,
        max:65,
    },
    city:{
        type:String,
        max:30
    },
    from:{
        type:String,
        max:30
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }

},

// time stamps
{
    timestamps:true
}

)

const User = mongoose.model('User',userSchema);

module.exports = User;