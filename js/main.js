/*Inicio*/
const transparencia = document.querySelector('.transparencia');
const pantallaEleccion = document.querySelector('.eleccion__personaje')
const arenaPelea = document.querySelector('.fondo')
const campoPelea = document.querySelector('.fondo__pelea')
const textoInicio = document.querySelector('.texto__inicio');
const botonboton = document.querySelector('div .eliminar');
const colorApagado = document.querySelector('.boton__boton');
const contenedorJugador1 = document.querySelector('.img--jugador--uno');
const contenedorJugador2 = document.querySelector('.img--jugador--dos');


function encender() {
    colorApagado.style.backgroundColor = ("greenyellow");
    setTimeout(function() { textoInicio.innerHTML = `<p class="letras__inicio">¡Hola Pringados!</p>` }, 2000)
    setTimeout(function() { botonboton.style.display = "none"; }, 3000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="letras__inicio--estilo">El juego empieza en</p>` }, 3000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros">3</p>` }, 4000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros">2</p>` }, 5000)
    setTimeout(function() { textoInicio.innerHTML = `<p class="inicio--estilo--numeros">1</p>` }, 6000)
    setTimeout(function() {
            textoInicio.innerHTML = `<p class="inicio--estilo--numeros"></p>`
            transparencia.style.display = "none"
            pantallaEleccion.style.display = "grid"
        }, 7000)
        //setTimeout(function() { contenedorJugador1.innerHTML = '<img class="" src="img/akumaizq.gif" alt="">' }, 8000)
        //setTimeout(function() { contenedorJugador2.innerHTML = '<img class="" src="img/akumadch.gif" alt="">' }, 8000)
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
    constructor(personajes) {
        this.personaje = personajes
    }
}
const akuma = new personajes('Akuma', 100, 110, '<img class="" src="img/akumaizq.gif" alt="">', '<img class="" src="img/akumadch.gif" alt="">');
const zangief = new personajes('Zangief', 150, 70, '<img class="" src="img/zangiefizq.gif" alt="">', '<img class="" src="img/zangiefdch.gif" alt="">');
const dhalsim = new personajes('Dhalsim', 90, 100, '<img class="" src="img/calabera-izq.gif" alt="">', '<img class="" src="img/calabera-indistinto.gif" alt="">');
const ken = new personajes('Ken', 100, 100, '<img class="" src="img/ken-izq.gif" alt="">', '<img class="" src="img/kendch.gif" alt="">');

const jugador1 = new jugador();
//console.log(jugador1);
const jugador2 = new jugador();
//console.log(jugador2);


function eleccionPersonaje(personaje) {
    console.log(personaje);
    if (jugador1.personaje == undefined || jugador2.personaje == undefined) {
        switch (personaje) {
            case 'akuma':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = akuma;
                    // alert('Jugador 2 Elije')
                } else if (jugador2.personaje == undefined && jugador1.personaje !== akuma) {
                    jugador2.personaje = akuma;
                    pantallaPelea(jugador1, jugador2);
                }
                break
            case 'zangief':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = zangief;
                } else if (jugador2.personaje == undefined && jugador2.personaje !== zangief) {
                    jugador2.personaje = zangief
                }
                pantallaPelea(jugador1, jugador2);
                break
            case 'dhalsim':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = dhalsim
                } else if (jugador2.personaje == undefined && jugador2.personaje !== dhalsim) {
                    jugador2.personaje = dhalsim
                }
                pantallaPelea(jugador1, jugador2);
                break
            case 'ken':
                if (jugador1.personaje == undefined) {
                    jugador1.personaje = ken;
                } else if (jugador2.personaje == undefined && jugador1.personaje !== ken) {
                    jugador2.personaje = ken;
                }
                pantallaPelea(jugador1, jugador2);
                break
            default:
                break
        }
    }
}

function pantallaPelea(primejugador, segundojugador) {
    console.log(primejugador)
    console.log(segundojugador)
    if (jugador2.personaje !== undefined) {
        setTimeout(function() {
            pantallaEleccion.style.display = "none"
            campoPelea.style.display = "grid"
            arenaPelea.style.backgroundImage = "url('../img/escenarioLucha.gif')"
        }, 4000)
    }
    contenedorJugador1.innerHTML = jugador1.personaje.imagenIzq
    contenedorJugador2.innerHTML = jugador2.personaje.imagenDch

}













//esto de aqui abajo no funciona porque no me escucha bien al boton y no se porque 
// const botonEleccion = document.querySelectorAll('.eleccion__personaje--boton');
// botonEleccion.forEach(boton => {
//     boton.addEventListener('click', eleccionPersonaje)
// })


// function eleccionPersonaje(evento) {
//     const id = evento.target.getAttribute("id")
//     console.log(id);

//     if (jugador1.personaje == undefined || jugador2.personaje == undefined) {
//         switch (id) {
//             case 'personaje__uno':
//                 if (jugador1.personaje == undefined) {
//                     jugador1.personaje = akuma;
//                 } else if (jugador2.personaje == undefined && jugador1.personaje !== akuma) {
//                     jugador2.personaje = akuma;
//                     starGame(jugador1, jugador2);
//                 }
//                 break
//             case 'personaje__dos':
//                 if (jugador1.personaje == undefined) {
//                     jugador1.personaje = zangief;
//                     alert("selecciona un segundo jugador");
//                 } else if (jugador2.personaje == undefined && jugador1.personaje !== zangief) {
//                     jugador2.personaje = zangief;
//                     starGame(jugador1, jugador2);
//                 }
//                 break
//             case 'personaje__tres':
//                 if (jugador1.personaje == undefined) {
//                     jugador1.personaje = dhalsimp;
//                     alert("selecciona un segundo jugador");
//                 } else if (jugador2.personaje == undefined && jugador1.personaje !== dhalsimp) {
//                     jugador2.personaje = dhalsimp;
//                     starGame(jugador1, jugador2);
//                 }
//                 break
//             case 'personaje__cuatro':
//                 if (jugador1.personaje == undefined) {
//                     jugador1.personaje = ken;
//                     alert("selecciona un segundo jugador");
//                 } else if (jugador2.personaje == undefined && jugador1.personaje !== ken) {
//                     jugador2.personaje = ken;
//                     starGame(jugador1, jugador2);
//                 }
//                 break
//         }
//     }
// }

// const contenedorJugador1 = document.querySelector(".img--jugador--uno");
// const contenedorJugador2 = document.querySelector(".contenedor-seleccionado-2");
// // let pantallaPrincipalCombate = document.querySelector(".pantalla-principal-combate")
// // let pantallaPrincipalSeleccion = document.querySelector(".pantalla-principal-seleccion")



// const starGame = (primejugador, segundojugador) => {
//     console.log(primejugador)
//     console.log(segundojugador)
//         // pantallaPrincipalSeleccion.style.display = 'none'
//         // pantallaPrincipalCombate.style.display = 'flex';
//     contenedorJugador1.innerHTML = jugador1.personaje.imagenIzq
//     contenedorJugador2.innerHTML = jugador2.personaje.imagenDch
// }