const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User =require('./useSchema')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//database connected
mongoose.connect("mongodb://127.0.0.1:27017/tabledemo")
.then(()=>{
    console.log("db is on");
})
.catch((e)=>{
    console.log(e);
})

//Router
app.post('/',async(req,res)=>{

    const user= new User(req.body)
    await user.save();
    res.send(user);
})

app.listen("5000",(req,res)=>{
    console.log("server is listening ");

})