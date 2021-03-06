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
const input = document.querySelector('input');
const modal = document.querySelector('.modal')
const body = document.querySelector('body');

//funciones
const noPop = () =>contenedorPop.classList.add('noVisible');
const siContenedorPop= () =>contenedorPop.classList.remove('noVisible');
const siContenedor =() => contenedor.classList.remove('noVisible');
const siPres = () => pres.classList.remove('noVisible');
const noPres= () => pres.classList.add('noVisible');
const siHome = () => [...home].map(e=>e.classList.remove('noVisible'))
const borrarHome= () => [...home].map(e=>e.classList.add('noVisible'));
const noMenuH = () => menuH.classList.add('noVisible');


//Hamburguesa
const menuHamburguesa = () =>{
    const noContenedor = () => contenedor.classList.add('noVisible');
    const siMenu = () => menuH.classList.remove('noVisible')

    siMenu();
    noContenedor();
}

//Modal

const crearModal = e =>{
    const peliculaId = e;
    const buscarPeli = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`

    fetch (buscarPeli)
        .then(res => res.json())
        .then(movie => { 

            const div = document.createElement('div');
            // div.setAttribute('id', e);

            const estilo = () => div.classList.add('modal');

            const genres = movie.genres.map(e=>e.name).join(', ')

            estilo();

            
            div.innerHTML = `
            <div class="spinner"></div>

            <div class="contenedorModal noVisible">
            <div class="modalEncabezado" style="background-image: url(${dire}${movie.backdrop_path})"></div>
            <div class="modalInformacion"></div>
            <div class="contenedorModalInfo">
                <div class="modalPoster">
                    <img src="${dire}${movie.poster_path}"/>
                </div>
                <div class="modalInformacionPeli">
                    <h4>${movie.title}</h4>
                    <p>${movie.tagline}</p>
                    <div class="masInfo">
                        <span>${movie.overview}</span>
                        <h5>genre</h5>
                        <p>${genres}</p>
                        <h5> release date</h5>
                        <p>${movie.release_date}</p>
                    </div>

                </div>
            </div>
            <div class="cerrar" onclick= "cerrarModal()">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" 
                data-icon="times" class="svg-inline--fa fa-times fa-w-11" 
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 
                12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 
                75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19
                 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 
                 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 
                 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </div>
            </div>`

            const borrarScroll = () => contenedor.classList.add('chauScroll');

            borrarScroll();

        body.appendChild(div);

        //lista búsqueda

        const borrarLista = document.getElementById('resultados');
        borrarLista.style = "display:none"
        input.value = "";

        //spinner

        const abrirModal = document.querySelector('.contenedorModal');


        const cargarModal = () =>{

            const spinner = document.querySelector ('.spinner');
            console.log("spinner")
            const cerrarSpinner = () => {
                setTimeout(() => spinner.classList.add('noVisible'), 300);
                
            }
            const mostrarModal = () => {
                setTimeout(() => abrirModal.classList.remove('noVisible'), 300);
            }

            cerrarSpinner()
            
            mostrarModal()

        }
        
        abrirModal.addEventListener('load', cargarModal());

        })

};

const cerrarModal = () =>{
    const modalVer = document.querySelector('.modal');
    modalVer.remove();

    const volverScroll = () => contenedor.classList.remove('chauScroll');
    volverScroll();
    

}

//Api
const apiKey= `8bdfee1cadeaa7c6f8c489f17f927c3d`;
let paginaActual = 1;
const popular =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`
const nowPlaying =`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`
const dire = `https://image.tmdb.org/t/p/original`;




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
                
                pelis[j].innerHTML = `<div class="imagen" onclick="crearModal(${movie.results[i].id})"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                    <div class="tituloPeli" onclick="crearModal(${movie.results[i].id})">${movie.results[i].title}</div>`
                j++
            }
        })
    fetch (topRated)
        .then(res => res.json())
        .then(movie => {
            for (let i=0; i<5; i++){
                
                pelis[j].innerHTML = `<div class="imagen" onclick="crearModal(${movie.results[i].id})"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                    <div class="tituloPeli" onclick="crearModal(${movie.results[i].id})">${movie.results[i].title}</div>`
                j++
            } 
        })
    fetch (upcoming)
        .then(res => res.json())
        .then(movie => {
            for (let i=0; i<5; i++){
                
                pelis[j].innerHTML = `<div class="imagen" onclick="crearModal(${movie.results[i].id})"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                    <div class="tituloPeli" onclick="crearModal(${movie.results[i].id})">${movie.results[i].title}</div>`
                
                j++
            }
        })
        fetch (nowPlaying)
        .then(res => res.json())
        .then(movie => {
            for (let i=0; i<5; i++){

                
                pelis[j].innerHTML = `<div class="imagen" onclick="crearModal(${movie.results[i].id})"><img src="${dire}${movie.results[i].poster_path}"/></div>
                                    <div class="tituloPeli" onclick="crearModal(${movie.results[i].id})">${movie.results[i].title}</div>`
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
    paginaActual = 1;
    fetch (`${popular}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {
        total.textContent= `${movie.total_results} results` 
        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
        titulo.textContent= 'Popular Movies';
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen" onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli"  onclick="verModal(${e.id})">${e.title}</div>
            </li>`
    }).join('') + `<div class="boton"><button onclick="popBoton()">load more</button></div>`;
    })
}
const popBoton = () =>{
    paginaActual ++;
    
    fetch (`${popular}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {
        total.textContent= `${movie.total_results} results` 
        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
        titulo.textContent= 'Popular Movies';
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"  onclick="verModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli" onclick="verModal(${e.id})">${e.title}</div>
            </li>`
    }).join('') + `<div class="boton"><button onclick="popBoton()">load more</button></div>`;
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
    
    paginaActual = 1;
    fetch (`${topRated}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {
        total.textContent= `${movie.total_results} results` 
        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"  onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli"  onclick="crearModal(${e.id})">${e.title}</div>
            </li>`
    }).join('') + `<div class="boton"><button onclick="popBoton()">load more</button></div>`;
    const boton = document.createElement('button');
    boton.textContent = 'load more';
    boton.classList.add('boton')
    contenedorPop.appendChild(boton);
    
    })
}
const topRBoton = () =>{
    paginaActual ++;
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
            <div class="imagen"  onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli"  onclick="crearModal(${e.id})">${e.title}</div>
            </li>`
        }).join('') + `<div class="boton"><button onclick="popBoton()">load more</button></div>`;
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
    paginaActual=1;
    fetch (`${upcoming}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {
        total.textContent= `${movie.total_results} results` 
        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen"  onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli"  onclick="crearModal(${e.id})">${e.title}</div>
            </li>`
        }).join('') + `<div class="boton"><button onclick="upcomBoton()">load more</button></div>`;
    
    })
}
const upcomBoton = () =>{ 
    paginaActual++;
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
            <div class="imagen" onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli" onclick="crearModal(${e.id})">${e.title}</div>
            </li>`
        }).join('') + `<div class="boton"><button onclick="upcomBoton()">load more</button></div>`;
    
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
    paginaActual=1;
    fetch (`${nowPlaying}&page=${paginaActual}`)
    .then(res => res.json())
    .then(movie => {
        total.textContent= `${movie.total_results} results` 
        const movies = movie.results;
        const ul = document.querySelector(".verPelis")
    
        ul.innerHTML = movies.map(e=>{
            return `<li class="pelis">
            <div class="imagen" onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli" onclick="crearModal(${e.id})">${e.title}</div>
            </li>`
        }).join('') + `<div class="boton"><button onclick="nowpBoton()">load more</button></div>`;
    
    })
}
const nowpBoton = () =>{ 
    paginaActual++;
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
            <div class="imagen" onclick="crearModal(${e.id})"><img src="${dire}${e.poster_path}"/></div>
            <div class="tituloPeli" onclick="crearModal(${e.id})">${e.title}</div>
            </li>`
        }).join('') + `<div class="boton"><button onclick="upcomBoton()">load more</button></div>`;
    
    })
}
input.onkeyup = () =>{
    const q = input.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query=${q}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => {
        const movies = data.results;
        const ul = document.getElementById('resultados');
        ul.innerHTML = movies.map(movie => `<li class="lista" onclick="crearModal(${movie.id})">${movie.title}</li>`).join('');
        ul.style.display = 'block';

    })
}

