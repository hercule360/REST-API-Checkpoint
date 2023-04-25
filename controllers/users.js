// require user  model
const User = require('../models/user')

// require bcrypt 
const bcrypt = require('bcrypt')
// require jwt 
const jwt = require('jasonwebtoken')

// regsiter 
exports.register = async (req,res) => {
    try {
        const {name ,email , password ,phone }= req.body 
        const foundUser = await User.findOne({email})
        if (foundUser){
            res.status(400).send ({msg:'Email alerdy used'})
        }
        const salt = 10
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User ({...req.body})
        newUser.save()

        const token = jwt.sign ({
            exp:math.floor(date.now()/1000 ) +(60*60),
            id: newUser._id 
        }, process.env.SECRET_KEY
        )
        res.status(200).send({msg:'registered successfully', newUser,token})
    } catch (error) {
        res.status(400).send({msg:'cannot register '})
        
    }
}
//login 
exports.login = async (req, res) =>{ 
        try {
            const {email , password}= req.body 
            const foundUser= await User.findOne ({email})
            if (!foundUser){
                res.status(400).send ({msg:'email not found '})

            }
            const checkpassword = await bcrypt.compare(password,foundUser.passowrd)
            if (!checkpassword){
            res.status(400).send({msg:'pass not found '})
            }
              
            const token =jwt.sign({
                id: foundUser._id
            } , process.env.SECRET_KEY
            )
            res.status(200).send ({msg:'login successful..' , foundUser,token })
        } catch (error) {
            res.status(400).send({msg:'bad connection'})
            
        }
}