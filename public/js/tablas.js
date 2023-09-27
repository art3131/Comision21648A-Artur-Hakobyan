const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones = [], elementoHtml) => {

    let registros = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        registros += `
            <tr>
                <td>
                    <img src="${publicacion.url_imagen}" style="border-radius:50%; height:60px; width: 60px">
                </td>
                <td>${publicacion.titulo}</td>
                <td class="tdDetalle">${publicacion.detalle}</td>
                <td>${ (publicacion.fecha).split('T')[0] }</td>
                <td>
                <a href="/publicacion/eliminar/${publicacion.id}" class="btn btn-danger btn-sm" id="btn-eliminar">Eliminar</a>
                <a href="/admin/editar/${publicacion.id}" class="btn btn-info btn-sm" id="btn-editar">Editar</a>
                </td>
        `
    })


    // Se crea la lista
    elementoHtml.innerHTML = registros;

}



// Cuando se carga el contenido del html y recursos estáticos, se solicitan las publicaciones y se muestran en la tabla
document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaciones()
    if(!publicaciones) return alert('Error al obtener las publicaciones')

    // Modificar el DOM para mostrar las publicaciones
    const tbody = document.querySelector('#tabla-publicaciones')

    mostrarPublicaciones(publicaciones, tbody)
})