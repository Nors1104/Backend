const User = require('../model/user');

function passwordValidate(userBd,userInput){
    return (userBd.password === userInput.password);
}

module.exports ={
    passwordValidate,
}