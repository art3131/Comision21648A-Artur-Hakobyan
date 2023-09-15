const router = require('express').Router();
const  {
    obtenerPublicacion,
    obtenerPublicaciones,
    crearPublicacion,
    actualizarPublicacion,
    eliminarPublicacion,
    updatePost
} = require('../controllers/blog.controllers');




////////////////
//rutas PARA VISTAS
////////////////

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/admin', (req, res)=>{
    res.render('admin')
})

router.get('/publicacion/:id', (req, res)=>{
    res.render('edit', {id: req.params.id})
})






///////////////////////////////////////
// RUTAS PARA DATOS
//ruta para obtener todas las publicaciones
router.get('/publicaciones/',obtenerPublicaciones);

//ruta para obtener una publicacion
router.get('/publicacion/:id',obtenerPublicacion);

//ruta para crear una publicacion
router.post('/publicacion/',crearPublicacion);

//ruta para actualizar una publicacion
//router.put('/editar/:id',actualizarPublicacion);

//ruta para eliminar una publicacion
//router.delete('/publicacion/:id',eliminarPublicacion);

router.get('/eliminar/:id', eliminarPublicacion)

router.get('/publicacion/:id', actualizarPublicacion)

module.exports = router;