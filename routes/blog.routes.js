const router = require('express').Router();
const  {
    obtenerPublicacion,
    obtenerPublicaciones,
    crearPublicacion,
    actualizarPublicacion,
    eliminarPublicacion,
    
} = require('../controllers/blog.controllers');




////////////////
//rutas PARA VISTAS
////////////////

router.get('/', (req, res) =>{
    res.render('index')
})


//Ruta para renderizar pagina de publicacion
router.get('/admin/publicar', (req, res)=>{
    res.render('admin')
})


// Ruta para renderizar pagina de edicion de publicacion Id
router.get('/admin/editar/:id', (req, res)=>{
    res.render('edit', {id: req.params.id})
})


//ruta donde renderizar todas las publicaciones
router.get('/admin/publicaciones', (req, res)=>{
    return res.render('tabla_publicaciones')
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
router.put('/publicacion/:id', actualizarPublicacion)

//ruta para eliminar una publicacion
router.get('/publicacion/eliminar/:id', eliminarPublicacion )


module.exports = router;