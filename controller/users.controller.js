const{response,request} = require('express');
const{validationResult}= require('express-validator');
const{findUser} =require('../DAO/users.dao');
const{passwordValidate} =require('../helpers/users.helper.js');
const User = require('../model/user');

function login(peticion=request,respuesta=response){
    
    const validador = validationResult(peticion);
    if(validador.errors.length >0){
        return respuesta.status(400).json(validador.errors);
    } 
    const {email,password} = peticion.query;
    console.log("LLEGO AQUI "+email+" "+password);

    const user = new User (email,password,"","","");
    findUser(user).then((userFound)=>{
        let pas = "incorrecta";
        if(passwordValidate(userFound,user)){pas="correcta";}
        /* respuesta.setHeader("Access-Control-Allow-Origin", "*");
        response.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        ); */
        respuesta.status(201).json({
            msg:`usuario encontrado`,
            pass:pas,
        })

    }).catch((error)=>{
        if(error)internalServerError(respuesta);
        else return respuesta.status(404).json({
            msg:`Usuario no existe`
        })
    }); 


}

function internalServerError(respuesta){
    respuesta.status(500).send({
        mensaje : 'Internal server error.....',
    })
}


/*
function login(peticion=request,respuesta=response){
    const validador = validationResult(peticion);      
    const email = peticion.query.email!=undefined ? peticion.query.idCode: 'xx';
    if(validador.errors.length >0){
        console.log("Recibida peticion Erronea");
        return respuesta.status(400).json(validador.errors);
    }
    else{
  
        console.log("Recibida peticion");
        console.log(email);
        return respuesta.status(200).json({
            msj:"Ok" 
        })
    }
}*/
module.exports = {
    login,
}