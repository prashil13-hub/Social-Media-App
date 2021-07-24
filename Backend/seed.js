const mongoose = require('mongoose');
const Post = require('./models/post')

const posts = [

    {
        postUsername:'Prashil',
        postText:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        postImg:'https://images.unsplash.com/photo-1625940344171-0b35f8c46eb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        postUsername:'Prashil',
        postText:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        postImg:'https://images.unsplash.com/photo-1526451734058-ba0973bc958a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        postUsername:'Prashil',
        postText:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        postImg:'https://images.unsplash.com/photo-1625465810074-22809a406517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80'
    },
    {
        postUsername:'Prashil',
        postText:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        postImg:'https://images.unsplash.com/photo-1620118733503-ab4e1cb6025d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
    }

]

const seedDB = async ()=>{
    await Post.insertMany(posts);
    console.log("DB Seeded");
}

module.exports = seedDB;