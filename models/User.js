// require mongoose
const mongoose = require('mongoose')

//create schema 

const Schema = mongoose.Schema
const userSchema = new Schema({
    name : {
        type : String , 
        required : true 
    }, 
    email : {
        type : String , 
        required : true , 
        unique : true 

    },
    passowrd :{
        type : String , 
        required : true 

    }, 
    phone :{
        type : Number ,

    }
}) 

module.exports= connect = mongoose.model('user',userSchema )
