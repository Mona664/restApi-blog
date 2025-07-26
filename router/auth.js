const express = require('express');
const router = express.Router();
const controller = require('../controller/auth');
const User = require('../models/user')
const { body } = require('express-validator');
router.put('/signup' ,[
   body('email')
   .isEmail()
   .withMessage('Please enter a valid email')
   .custom((value ,{ req} )=>{
        return User.findOne({
            email:value}).then(userDoc =>{
                if(userDoc){
                    return Promise.reject('E-Mail address already exists!')
                }
            })})
    .normalizeEmail(),
    
], controller.signup);

router.post('/login' , controller.login)
module.exports= router;