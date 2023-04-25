const { check } = require("express-validator");




exports.registerValidation = () =>[
    check('email','this field is required ! ').notEmpty(),
    check('email','this filedshould be valide ! ').isEmail(), 
    check('email','this filedshould be valide ! ').notEmpty(), 
    check('password','this filedshould be 4 carater  ! ').isLength({min : 4}), 


]

exports.validator =(req,res,next)=> {
    const error= validatorResult(req);
    errors.isEmty() ? next():res.status(400).send (error.arry())
}
