const express =require('express');
const router = express.Router();
const{check}=require('express-validator');
const{login} = require('../controller/users.controller');


router.post('/login',[
/*     check('email','El email es obligatorio').notEmpty(),
    check('password','El passw es obligatorio').notEmpty(), */
],login );
module.exports =router;