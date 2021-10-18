/*Inicio*/
const arenaPelea = document.querySelector('.fondo')
const transparencia = document.querySelector('.transparencia');
const pantallaEleccion = document.querySelector('.eleccion__personaje')
const campoPelea = document.querySelector('.fondo__pelea')
const pantallaWin = document.querySelector('.ganador')
const textoInicio = document.querySelector('.texto__inicio');
const botonboton = document.querySelector('div .eliminar');
const colorApagado = document.querySelector('.boton__boton');
const contenedorJugador1 = document.querySelectorAll('.img--jugador--uno');
const contenedorJugador2 = document.querySelectorAll('.img--jugador--dos');
const barraVida = document.querySelectorAll('.barra');
const botonJuego = document.querySelectorAll('.boton__ataque');
const ganar1 = document.querySelector('.ganador__gana');
const imgWin = document.querySelector(".ganador__imagen")

//console.log(botonJuego);

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
    daño() {
            return Math.round((Math.random(0, 0.99) * this.ataque))
        }
        // ataque2() {
        //     return this.vide - 10
        // }
}
class jugador {
    constructor(personajes) {
        this.personaje = personajes
    }
}



// class jugador extends personaje {
//     constructor(nombre, vida, ataque, imagenIzq, imagenDch) {
//         super(nombre, vida, ataque, imagenIzq, imagenDch, personaje);
//         this.personaje = personaje
//     }
// }

const akuma = new personajes('Akuma', 300, 110, '<img class="imagen__personaje" src="img/akumaizq.gif" alt="">', '<img class="imagen__personaje" src="img/akumadch.gif" alt="">');
const zangief = new personajes('Zangief', 450, 70, '<img class="imagen__personaje" src="img/zangiefizq.gif" alt="">', '<img class="imagen__personaje" src="img/zangiefdch.gif" alt="">');
const dhalsim = new personajes('Dhalsim', 180, 150, '<img class="imagen__personaje" src="img/calabera-izq.gif" alt="">', '<img class="imagen__personaje" src="img/calabera-indistinto.gif" alt="">');
const ken = new personajes('Ken', 300, 100, '<img class="imagen__personaje" src="img/ken-izq.gif" alt="">', '<img class="imagen__personaje" src="img/kendch.gif" alt="">');

const jugador1 = new jugador();
const jugador2 = new jugador();


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
    } else { pantallaPelea(jugador1, jugador2); }
}


function pantallaPelea(primejugador, segundojugador) {
    console.log(primejugador)
    console.log(segundojugador)
    if (jugador2.personaje !== undefined) {
        setTimeout(function() {
            pantallaEleccion.style.display = "none"
            campoPelea.style.display = "grid"
            arenaPelea.style.backgroundImage = "url('../img/escenarioLucha.gif')"
            contenedorJugador1[1].innerHTML = jugador1.personaje.imagenIzq
            contenedorJugador2[1].innerHTML = jugador2.personaje.imagenDch
        }, 2000)
    }
    contenedorJugador1[0].innerHTML = jugador1.personaje.imagenIzq
    contenedorJugador2[0].innerHTML = jugador2.personaje.imagenDch
    barraVida[0].innerHTML = jugador1.personaje.vida
    barraVida[1].innerHTML = jugador2.personaje.vida
        //botonJuego[0].onclick = lucha;
        // botonJuego[1].onclick = lucha2;

    // var vidaPj1 = jugador1.personaje.vida;
    // var vidaPj2 = jugador2.personaje.vida;
    // var ataque1 = jugador1.personaje.daño()
    // var ataque2 = jugador2.personaje.daño()
    // var vidaRestante1 = vidaPj1;
    // var vidaRestante2 = vidaPj2;
    // barraVida[1].innerHTML = vidaRestante2
    // barraVida[0].innerHTML = vidaRestante1
    // console.log(vidaPj1);
    // console.log(vidaPj2);
    // console.log(ataque1);
    // console.log(ataque2);

}



function lucha(ataque) {
    console.log(jugador2, 'jugador 2')
    console.log(jugador1, 'jugador 1')
    switch (ataque) {
        case 'ataque1':
            if (jugador2.personaje.vida > 0) {
                console.log(jugador2.personaje.vida -= jugador1.personaje.daño());
                pintarVidaJugador2(jugador2.personaje.vida -= jugador1.personaje.daño())
            }
            break;
        case 'ataque2':
            if (jugador1.personaje.vida > 0) {
                console.log(jugador1.personaje.vida - jugador2.personaje.daño());
                pintarVidaJugador1(jugador1.personaje.vida -= jugador2.personaje.daño())
            }
            break;
        default:
            break;
    }
}

function pintarVidaJugador2(vidaRestanteDelJugador2) {
    barraVida[1].innerHTML = vidaRestanteDelJugador2
    if (vidaRestanteDelJugador2 <= 0) {
        campoPelea.style.display = "none";
        pantallaWin.style.display = "flex";
        arenaPelea.style.backgroundImage = "url('../img/escenarioFin.gif')";
        ganar1.innerHTML = `<p class="gana--letra">Jugador 1 GAAAAAANAA!</p>`
        imgWin.innerHTML = '<img class="gana--imagen" src="img/Ft53.gif" alt="">'
            // llamar funcion
    }
}

function pintarVidaJugador1(vidaRestanteDelJugador1) {
    barraVida[0].innerHTML = vidaRestanteDelJugador1
    if (vidaRestanteDelJugador1 <= 0) {
        campoPelea.style.display = "none";
        pantallaWin.style.display = "flex";
        arenaPelea.style.backgroundImage = "url('../img/escenarioFin.gif')";
        ganar1.innerHTML = `<p class="gana--letra">Jugador 2 GAAAAAANAA!</p>`
        imgWin.innerHTML = '<img class="gana--imagen" src="img/Ft53.gif" alt="">'
    }
}


// function lucha(params) {
//     console.log('el boton funciona');
//     for (let i = vidaRestante2; i >= vidaRestante2; i--) {
//         console.log(i);
//         if (i == 0) {
//             alert("jugador 1 Gaaaanaaa!")
//         } else {
//             vidaRestante2 = vidaPj2 - ataque1
//             console.log(vida);
//         }
//     }
// }


// function lucha(evento) {
//     console.log(botonJuego[0]);
//     // for (let i = 0; i < vidaRestante2; i++) {
//         //         //     console.log(i);
//         //         //     if (condition) {
//         //         //     }
//         //         //     vidaRestante2 = vidaPj2 - ataque1
//         //         //     console.log(vidaRestante2);
//         //         // }
//         //         // var vidaRestante1 = barraVida[1].innerHTML = jugador2.personaje.daño();
//         //         // for (let i = 0; i < vidaRestante1; i++) {
//         //         //     vidaRestante1 -= barraVida[1].innerHTML = jugador2.personaje.daño();
//         //         //     console.log(vidaRestante1);
//         //         //     console.log(i);
//         //         //     //     if (evento !== undefined) {
//         //         //     //         barraVida[1].innerHTML = jugador2.personaje.daño()
//         //         //     //         return
//         //         //     //     }
//         //         //     // }
//         //         // }
//     }
// }

//     function lucha2(evento) {
//         var vidaRestante2 = barraVida[0].innerHTML = jugador1.personaje.daño();
//         console.log(vidaRestante2);
//         // for (let i = 0; i < vidaJp2; i++) {
//         //     console.log(i);
//         //     if (evento !== undefined) {
//         //         console.log(botonJuego[1]);
//         //         barraVida[0].innerHTML = jugador1.personaje.daño()
//         //     }
//     }
//}