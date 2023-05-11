 require("dotenv").config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors=require('cors')

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

const port=process.env.PORT || 3000
require('./database/conn')
const {adduser, updateuser, deleteuser, deletealluser, getuseralldata}=require('./controller/usercontroller')


//Router 
//post data
app.post('/',adduser)

//updatedata
app.patch('/update',updateuser)

//delete data
app.delete('/delete',deleteuser)

// //deletealluser
app.delete('/deletemany',deletealluser)


//getdata
app.get("/getdata",getuseralldata)


app.listen(port,(req,res)=>{
    console.log(`server is listening at port ${port} `);

})