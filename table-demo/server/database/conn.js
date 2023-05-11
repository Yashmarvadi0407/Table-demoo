
const mongoose=require('mongoose');

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: "true"})
.then(()=>{
    console.log("database in started");
})
.catch((e)=>{
    console.log(e);
})