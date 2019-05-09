console.log('Hola Mundo')

const hamb = document.getElementById('hamburguesa')
const contenedor = document.getElementsByClassName("contenedor")[0]

const noContenedor = () => contenedor.classList.add('noVisible');

const api= `https://api.themoviedb.org/3/movie/550?api_key=8bdfee1cadeaa7c6f8c489f17f927c3d`

fetch (api)
    .then(res => res.json())
    .then(movie => console.log(movie))



