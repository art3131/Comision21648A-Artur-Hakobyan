const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (publicacion) => {
        secciones += `
            <section class="d-flex gap-2">
                <img src="${publicacion.url_imagen}" class="rounded" height="200" width="200" alt="${publicacion.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <h4 class="mt-2">${publicacion.titulo}</h4>
                    <p id="PDetalle">${publicacion.detalle}</p>
                    <p>Publicado el: ${publicacion.fecha}</p>
                    
                </div>
                
                </section>
        `
    })

    elementoHtml.innerHTML = secciones;
    
}

const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})