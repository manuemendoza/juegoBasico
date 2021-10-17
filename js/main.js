/*Inicio*/
const transparencia = document.querySelector('.transparencia');
const textoInicio = document.querySelector('.texto__inicio');
const botonboton = document.querySelector('div .eliminar');
const colorApagado = document.querySelector('.boton__boton');


function encender() {
    colorApagado.style.backgroundColor = ("greenyellow");
    setTimeout(function() { textoInicio.innerHTML = `<p class="letras__inicio">¡Hola Pringados!</p>` }, 2000)
    setTimeout(function() { botonboton.style.display = "none"; }, 3000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="letras__inicio--estilo">El juego empieza en</p>` }, 3000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros">3</p>` }, 4000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros">2</p>` }, 5000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros">1</p>` }, 6000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros"></p>` }, 7000)
    setTimeout(function() { transparencia.style.display = "none" }, 7000)
}

/*Eleccion de personajes*/

class personajes {
    constructor(nombre, vida, ataque, imagenIzq, imagenDch) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagenIzq = imagenIzq;
        this.imagenDch = imagenDch;
    }
}
class jugador {
    constructor(personaje) {
        this.personaje = personaje
    }
}
const akuma = new personajes('Akuma', 100, 110, '<img class="imagen-seleccionado" src="img/akumaizq.gif" alt="">', '<img class="imagen-seleccionado" src="img/akumadch.gif" alt="">');
const zangief = new personajes('Zangief', 150, 70, ('img/zangiefizq.gif'), ('img/zangiefdch.gif'));
const dhalsimp = new personajes('Dhalsimpj', 90, 100, ('img/Calaberas-izq.gif'), ('img/Calaberas-indistinto.gif'));
const ken = new personajes('ken', 100, 100, ('img/ken-izq.gif'), ('img/kendch.gif'));

const jugador1 = new jugador();
//console.log(jugador1);
const jugador2 = new jugador();

document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        console.log("Se ha clickeado el id " + id);
    });
}); {
    /* <div id="l73" class="click">Textos </div>
    <div id="l74" class="click">Textos </div>
    <div id="l75" class="click">Textos </div>
    <div id="l76" class="click">Textos </div> */
}
//esto de aqui abajo tiene que tener la misma estructura de arriba
const botonEleccion = document.querySelectorAll('.eleccion__personaje--boton');
botonEleccion.forEach(boton => {
    boton.addEventListener('click', eleccionPersonaje)
})


function eleccionPersonaje(evento) {
    const id = evento.target.getAttribute("id")
    console.log(id);

    if (jugador1.personaje == undefined || jugador2.personaje == undefined) {
        switch (id) {
            case 'personaje__uno':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = akuma;
                } else if (jugador2.personaje == undefined && jugador1.personaje !== akuma) {
                    jugador2.personaje = akuma;
                    starGame(jugador1, jugador2);
                }
                break
            case 'personaje__dos':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = zangief;
                    alert("selecciona un segundo jugador");
                } else if (jugador2.personaje == undefined && jugador1.personaje !== zangief) {
                    jugador2.personaje = zangief;
                    starGame(jugador1, jugador2);
                }
                break
            case 'personaje__tres':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = dhalsimp;
                    alert("selecciona un segundo jugador");
                } else if (jugador2.personaje == undefined && jugador1.personaje !== dhalsimp) {
                    jugador2.personaje = dhalsimp;
                    starGame(jugador1, jugador2);
                }
                break
            case 'personaje__cuatro':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = ken;
                    alert("selecciona un segundo jugador");
                } else if (jugador2.personaje == undefined && jugador1.personaje !== ken) {
                    jugador2.personaje = ken;
                    starGame(jugador1, jugador2);
                }
                break
        }
    }
}

const contenedorJugador1 = document.querySelector(".img--jugador--uno");
const contenedorJugador2 = document.querySelector(".contenedor-seleccionado-2");
// let pantallaPrincipalCombate = document.querySelector(".pantalla-principal-combate")
// let pantallaPrincipalSeleccion = document.querySelector(".pantalla-principal-seleccion")



const starGame = (primejugador, segundojugador) => {
    console.log(primejugador)
    console.log(segundojugador)
        // pantallaPrincipalSeleccion.style.display = 'none'
        // pantallaPrincipalCombate.style.display = 'flex';
    contenedorJugador1.innerHTML = jugador1.personaje.imagenIzq
    contenedorJugador2.innerHTML = jugador2.personaje.imagenDch
}