// require express 

const express = require ('express')
const { validationResult } = require('express-validator')
const { register } = require('../controllers/Users')
const { registerValidation } = require('../Middleware/validator')

//require  route from express
const router = express.Router()

//routes 
router.post('/register',register , registerValidation, validationResult)
router.post('/login', login )

//export 

module.exports = router 