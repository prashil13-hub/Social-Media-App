const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const User = require('./models/user');
const Post = require('./models/post')
const seedDb = require('./seed')
const bodyParser = require('body-parser')
const urlencoded = require('urlencode')
const cloudinary = require('cloudinary');
const multer = require('multer')



dotenv.config();
// seedDb();

mongoose.connect('mongodb://localhost:27017/socialMediaApp',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(()=>{
        console.log('DB is Connected');
    })
    .catch((err)=>{
        console('Ohhh No Error');
        console.log(err)
    });


// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(express.urlencoded({extended:true}))



const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
    


// Routes
app.use(userRoutes);
app.use(authRoutes);
app.use(postRoutes);









app.get('/',(req,res)=>{
    res.send("Heyyy!!!")
})













app.listen(8800,()=>{
    console.log("Server is Running at Port 8800")
})