const Publicacion = require('../models/Publicacion')
const ctrl = {}


//controlador para crear nueva publicacion
ctrl.crearPublicacion = async (req, res )=>{
   try{
      const publicacion = await Publicacion.create(req.body)
      await publicacion.save()

      return res.json({
            msg: 'Publicacion guardada con exito',
            publicacion
      })
   }catch (error){
      console.log(error.message);
      return res.status(500).json({
         msg: 'Error al crear publicacion',
      })
   }
}
//controlador para obtener todas publicacion
ctrl.obtenerPublicaciones = async (req, res )=>{
   try{
         const publicaciones = await Publicacion.findAll();
         return res.json(publicaciones)
   }catch (error) {
      console.log(error.message)
      return res.status(500).json({
         msg: 'Error al cargar publicaciones',
      })
   }
}


//controlador para obtener una publicacion
ctrl.obtenerPublicacion = async (req, res )=>{
   try{
      const {id} = req.params;
      const publicacion = await Publicacion.findByPk(id)
      return res.json(publicacion)
   }catch (error) {
      console.log(error.message)
      return res.status(500).json({
         msg: 'Error al obtener publicacion',
      })
   }
}
//controlador para actualizar una publicacion
ctrl.actualizarPublicacion = async (req, res )=>{
   const {id} = req.params;
   
   try{
         const publicacion = await Publicacion.findByPk(id)
         publicacion.set(req.body)
         await publicacion.save();
         return res.json({
            msg: 'Publicacion actualizada con exito'
         })
   }catch (error) {
      console.log(error.message)
      return res.status(500).json({
         msg: 'Error al actualizar publicacion',
      })
   }
}


//controlador para eliminar una publicacion
ctrl.eliminarPublicacion = async (req, res )=>{
    const {id} = req.params;
    try{
      const publicacion = await Publicacion.destroy({where:{id}})
      
      
      return res.redirect('/')
         
      }catch (error) {
      console.log(error.message)
      return res.status(500).json({
         msg: 'Error al borrar publicacion',
        
      } ); 
   } 
   

}


module.exports = ctrl