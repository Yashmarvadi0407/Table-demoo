
const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    }
})


const user= mongoose.model('User',userSchema)


module.exports =user