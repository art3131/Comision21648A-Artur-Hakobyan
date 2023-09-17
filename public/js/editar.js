// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#nueva-publicacion")

const obtenerPublicacion = async (id) => {
    const response = await fetch(`/publicacion/${id}`)
    const data = await response.json()
    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    const id = formGuardar.dataset.id
    const publicacion = await obtenerPublicacion(id);

    const titulo = document.querySelector('#titulo')
    const detalle = document.querySelector('#detalle')
    const url_imagen = document.querySelector('#url_imagen')
    const fecha = document.querySelector('#fecha')


    titulo.value = publicacion.titulo;
    detalle.value = publicacion.detalle;
    url_imagen.value = publicacion.url_imagen;
    fecha.value = publicacion.fecha;


})


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo').value;
    const detalle = document.querySelector('#detalle').value;
    const url_imagen = document.querySelector('#url_imagen').value;
    const fecha = document.querySelector('#fecha').value;


    // Enviar los datos al servidor para crear la nueva publicación
    const response = await fetch(`/actualizar/${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, detalle, url_imagen, fecha})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/" })