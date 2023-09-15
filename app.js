const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('ejs')


//conexion base de dato
const {sequelize} = require('./database')
sequelize.authenticate()
    .then(()=> console.log('Conexion exitosa a BD'))
    .catch(err => console.log('Error al conectar a la BD: ', err))

const app = express()
const port = process.env.PORT || 3000
//middlewwares

app.use(express.json()) ;
app.use(cors());
app.use(morgan('dev'));
app.set('view engine','ejs');


//archivos estaticos
app.use(express.static('public'));

//rutas

const blogRoutes = require('./routes/blog.routes')
app.use(blogRoutes)

app.use((req, res, next)=>{
    res.status(400).send("Error 404: Ruta no encontrada")
})

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))