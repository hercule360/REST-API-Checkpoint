// require mongosse
const mongoose = require('mongoose')

//creare schema  
const Schema = mongoose.Schema

const productShema = new Schema ({

    name :{
        type : String , 
        required: true 

    },

    price:{
        type : Number ,
        required : true 

    }, 

    discrption :{
        type :String 
    }

})

//export 
module.exports = connect = mongoose.model('product', productShema)