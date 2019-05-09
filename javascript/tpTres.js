console.log('Hola Mundo')

const hamb = document.getElementById('hamburguesa')
const contenedor = document.getElementsByClassName("contenedor")[0]

const noContenedor = () => contenedor.classList.add('noVisible');

const api= `https://api.themoviedb.org/3/movie/550?api_key=8bdfee1cadeaa7c6f8c489f17f927c3d`

const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`

fetch (popular)
    .then(res => res.json())
    .then(movie => console.log(movie))





