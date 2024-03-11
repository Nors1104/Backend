class User{
    _id;
    email;
    password;
    token;
    creation_date;
    id_rol;

    constructor(email,password,token,creation_date,id_rol){
        this.email =email;
        this.password =password;
        this.token = token;
        this.creation_date =creation_date;
        this.id_rol =id_rol;
    }

}
module.exports = User;