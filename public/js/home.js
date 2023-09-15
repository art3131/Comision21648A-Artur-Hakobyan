const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded" height="200" width="200" alt="${pub.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <h4>${pub.titulo}</h4>
                    <p>${pub.detalle}</p>
                    <p>${pub.fecha}</p>
                    <a href="/eliminar/${pub.id}" class="btn btn-danger">Eliminar</a>
                    <a href="/publicacion/${id}" class="btn btn-info btn-sm">Editar</a>
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