console.log('Hola Mundo')

const hamb = document.getElementById('hamburguesa')
const contenedor = document.getElementsByClassName("contenedor")[0]

const noContenedor = () => contenedor.classList.add('noVisible');

const pelis = document.getElementsByClassName('pelis')

let i=0;



const apiKey= `8bdfee1cadeaa7c6f8c489f17f927c3d`;
let paginaActual = 1;
const popular =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

const dire = `https://image.tmdb.org/`


fetch (popular)
    .then(res => res.json())
    .then(movie => {

        for (let i=0; i<5; i++){

            console.log(movie.results[i])
            
            pelis[i].innerHTML = `<div class="imagen"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                  <div class="tituloPeli">${movie.results[i].title}</div>`
        }

    })









