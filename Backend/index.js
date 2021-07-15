const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const User = require('./models/user')



dotenv.config();


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

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
    


// Routes
app.use(userRoutes);
app.use(authRoutes)









app.get('/',(req,res)=>{
    res.send("Heyyy!!!")
})













app.listen(8800,()=>{
    console.log("Server is Running at Port 8800")
})