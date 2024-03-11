const express =require('express');

const app = express();
const PORT =8000;

const usersRouter = require ('./routes/usersRoutes');
app.use('/users/', usersRouter);

app.listen(
    PORT,
    ()=>{
        console.log(`Ejecuntando en puerto ${PORT}`);
    }
)


/* app.get('/',(request,response)=>{
    response.status(200).send({
        mensaje:"iniciado",
        st:"ok"
    })
}); */


