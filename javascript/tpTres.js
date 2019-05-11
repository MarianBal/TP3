console.log('Hola Mundo')

//selección
const hamb = document.getElementById('hamburguesa')
const contenedor = document.querySelector(".contenedor")

//ocultar botonera con hamburguesa
const noContenedor = () => contenedor.classList.add('noVisible');
const pelis = document.getElementsByClassName('pelis')

//Home
const apiKey= `8bdfee1cadeaa7c6f8c489f17f927c3d`;
let paginaActual = 1;
const popular =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`
const nowPlaying =`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`

const dire = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`

let j=0;

fetch (`${popular}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        for (let i=0; i<5; i++){
            
            pelis[j].innerHTML = `<div class="imagen"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                  <div class="tituloPeli">${movie.results[i].title}</div>`

            j++
        }
    })

fetch (topRated)
    .then(res => res.json())
    .then(movie => {


        for (let i=0; i<5; i++){
            
            pelis[j].innerHTML = `<div class="imagen"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                  <div class="tituloPeli">${movie.results[i].title}</div>`

            j++
        } 
    })

fetch (upcoming)
    .then(res => res.json())
    .then(movie => {

        for (let i=0; i<5; i++){
            
            pelis[j].innerHTML = `<div class="imagen"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                  <div class="tituloPeli">${movie.results[i].title}</div>`
            
            j++
        }
    })

    fetch (nowPlaying)
    .then(res => res.json())
    .then(movie => {

        for (let i=0; i<5; i++){
            
            pelis[j].innerHTML = `<div class="imagen"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                  <div class="tituloPeli">${movie.results[i].title}</div>`

            j++
        }
    })

const popularBoton =document.getElementsByClassName('categorias')[0];
const topRatedBoton = document.getElementsByClassName('categorias')[1];
const upcomingBoton = document.getElementsByClassName('categorias')[2];
const nowPlayingBoton = document.getElementsByClassName('categorias')[3];

//popular
const pop = () =>{ 
    const pres = document.querySelector(".presentacion");
    const noPres= () => pres.classList.add('noVisible');

    const home = document.getElementsByClassName('home');
    const borrarHome= () => [...home].map(e=>e.classList.add('noVisible'))

    const contenedorPop = document.getElementById('contenedorPop');
    const siContenedorPop= () =>contenedorPop.classList.remove('noVisible')

    noPres();
    borrarHome();
    siContenedorPop();

    fetch (`${popular}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli">${e.title}</div>
            </li>`
    }).join('');
    
    })
}

//Top Rated
const topR = () =>{ 
    const pres = document.querySelector(".presentacion");
    const noPres= () => pres.classList.add('noVisible');

    const home = document.getElementsByClassName('home');
    const borrarHome= () => [...home].map(e=>e.classList.add('noVisible'))

    const contenedorPop = document.getElementById('contenedorPop');
    const siContenedorPop= () =>contenedorPop.classList.remove('noVisible')

    noPres();
    borrarHome();
    siContenedorPop();

    fetch (`${topRated}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli">${e.title}</div>
            </li>`
    }).join('');
    
    })
}

//Upcoming
const upcom = () =>{ 
    const pres = document.querySelector(".presentacion");
    const noPres= () => pres.classList.add('noVisible');

    const home = document.getElementsByClassName('home');
    const borrarHome= () => [...home].map(e=>e.classList.add('noVisible'))

    const contenedorPop = document.getElementById('contenedorPop');
    const siContenedorPop= () =>contenedorPop.classList.remove('noVisible')

    noPres();
    borrarHome();
    siContenedorPop();

    fetch (`${upcoming}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli">${e.title}</div>
            </li>`
    }).join('');
    
    })
}

//now playing
const nowp = () =>{ 
    const pres = document.querySelector(".presentacion");
    const noPres= () => pres.classList.add('noVisible');

    const home = document.getElementsByClassName('home');
    const borrarHome= () => [...home].map(e=>e.classList.add('noVisible'))

    const contenedorPop = document.getElementById('contenedorPop');
    const siContenedorPop= () =>contenedorPop.classList.remove('noVisible')

    noPres();
    borrarHome();
    siContenedorPop();

    fetch (`${nowPlaying}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli">${e.title}</div>
            </li>`
    }).join('');
    
    })
}














