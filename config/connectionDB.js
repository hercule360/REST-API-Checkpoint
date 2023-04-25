// require mongosse
const mongoose = require('mongoose')

//connect function 

const connect =async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('connect to database successfully!')
    } catch (error) {
        console.log(err)
        
    }
}

// export 
module.exports = connect 