console.log('Hola Mundo')

//selecciones
const contenedor = document.querySelector(".contenedor")
const pres = document.querySelector(".presentacion");
const contenedorPop = document.getElementById('contenedorPop');
const home = document.getElementsByClassName('home');
const total = document.querySelector('.total');
const titulo = document.querySelector(".titulo");
const pelis = document.getElementsByClassName('pelis');
const menuH = document.querySelector('.menuH');


//Hamburguesa
const menuHamburguesa = () =>{
    const noContenedor = () => contenedor.classList.add('noVisible');
    const siMenu = () => menuH.classList.remove('noVisible')

    siMenu();
    noContenedor();
}

//Api
const apiKey= `8bdfee1cadeaa7c6f8c489f17f927c3d`;
let paginaActual = 1;
const popular =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`
const nowPlaying =`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`

const dire = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`

//funciones
const noPop = () =>contenedorPop.classList.add('noVisible');
const siContenedorPop= () =>contenedorPop.classList.remove('noVisible');
const siContenedor =() => contenedor.classList.remove('noVisible');
const siPres = () => pres.classList.remove('noVisible')
const noPres= () => pres.classList.add('noVisible');
const siHome = () => [...home].map(e=>e.classList.remove('noVisible'))
const borrarHome= () => [...home].map(e=>e.classList.add('noVisible'));
const noMenuH = () => menuH.classList.add('noVisible');


//Home
const ada = () => {

    siContenedor();
    noPop();
    siPres();
    siHome();
    noMenuH();
    
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
}

//Categorías
const popularBoton =document.getElementsByClassName('categorias')[0];
const topRatedBoton = document.getElementsByClassName('categorias')[1];
const upcomingBoton = document.getElementsByClassName('categorias')[2];
const nowPlayingBoton = document.getElementsByClassName('categorias')[3];

//popular
const pop = () =>{ 

    siContenedor();
    noPres();
    borrarHome();
    siContenedorPop();
    noMenuH();

    fetch (`${popular}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        total.textContent= `${movie.total_results} results` 
        const movies = movie.results;
        const ul = document.querySelector(".verPelis")

        titulo.textContent= 'Popular Movies';
    
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

    siContenedor();
    noPres();
    borrarHome();
    siContenedorPop();
    noMenuH();

    titulo.textContent= 'Top Rated';

    fetch (`${topRated}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        total.textContent= `${movie.total_results} results` 
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

    siContenedor();
    noPres();
    borrarHome();
    siContenedorPop();
    noMenuH();

    titulo.textContent ='Upcoming';

    fetch (`${upcoming}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        total.textContent= `${movie.total_results} results` 
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

    siContenedor();
    noMenuH();
    noPres();
    borrarHome();
    siContenedorPop();
    

    titulo.textContent = 'Now Playing';

    fetch (`${nowPlaying}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {

        total.textContent= `${movie.total_results} results` 
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
