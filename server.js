// require express
const express = require('express' )

// get instance 
const app = express() 

//middleware  body parser 
app.use(express.json())

// require dontev 
require('dotenv').config()

//connection to DB
const connect = require('./config/connectionDB')
const { getProductsbyId } = require('./controllers/product')
connect()

//create PORT 
const PORT = process.env.PORT    

// listen to POST
app.listen(PORT ,(err)=>{
    err ? console.log(err)
    : console.log(`this server  is running on port : ${PORT}`)
    
} ) 
 

//require roort 
app.use('/api/products', require('./routes/productRoute'))

app.use('/api/user', require('./routes/userRoute'))