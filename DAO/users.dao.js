const{conexion} = require('../bd/conectionBD');
const User = require('../model/user');

function findUser(user){
    /* let query=`SELECT email, nif, id_personas, nombre, password from personas where nif=? or email=?`; */
    let query=`SELECT email, password,token, creation_date, idrol from users where email=?`;
    return new Promise((resolve, reject) => {
        try{
            conexion.query(query,[user.email],(errors,result)=>{
               if(errors){
                    throw errors;    
               }
               if(result.length === 0){     //No se ha encontrado ese mail
                  return reject();
               }
               console.log("USUARIO",result);
               const userFound= new User(result[0]['email'],result[0]['password'],result[0]['token'],result[0]['creation_date'],result[0]['id_rol']);
               resolve(userFound);
            })
        }
        catch(error){
            reject(error);
        }
    })
}

module.exports= {
    findUser,
}