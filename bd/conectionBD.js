const mysql =require('mysql');

let conexion = mysql.createConnection(
    {
        database: 'app_bd',
        host: 'localhost',
        port:3306,
        user: 'root',
        password:'A1b23c45'
            }
);
conexion.connect(
    (err) => {
        if(err){
            throw err;
        }
    }
);

module.exports ={conexion}