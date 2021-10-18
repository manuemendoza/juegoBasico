/*Inicio*/
const transparencia = document.querySelector('.transparencia');
const pantallaEleccion = document.querySelector('.eleccion__personaje')
const arenaPelea = document.querySelector('.fondo')
const campoPelea = document.querySelector('.fondo__pelea')
const textoInicio = document.querySelector('.texto__inicio');
const botonboton = document.querySelector('div .eliminar');
const colorApagado = document.querySelector('.boton__boton');
const contenedorJugador1 = document.querySelectorAll('.img--jugador--uno');
const contenedorJugador2 = document.querySelectorAll('.img--jugador--dos');
const barraVida = document.querySelectorAll('.barra')
const botonJuego = document.querySelectorAll('.boton__ataque')

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

class personaje {
    constructor(nombre, vida, ataque, imagenIzq, imagenDch) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagenIzq = imagenIzq;
        this.imagenDch = imagenDch;
    }
    daño() {
        return (this.vida - (0.02 * this.ataque))
    }
    ataque2() {
        return this.vide - 10
    }
}

class jugador extends personaje {
    constructor(nombre, vida, ataque, imagenIzq, imagenDch) {
        super(nombre, vida, ataque, imagenIzq, imagenDch, personajes);
        this.personaje = personajes;
    }
}

const akuma = new personaje('Akuma', 100, 110, '<img class="imagen__personaje" src="img/akumaizq.gif" alt="">', '<img class="imagen__personaje" src="img/akumadch.gif" alt="">');
const zangief = new personaje('Zangief', 150, 70, '<img class="imagen__personaje" src="img/zangiefizq.gif" alt="">', '<img class="imagen__personaje" src="img/zangiefdch.gif" alt="">');
const dhalsim = new personaje('Dhalsim', 90, 100, '<img class="imagen__personaje" src="img/calabera-izq.gif" alt="">', '<img class="imagen__personaje" src="img/calabera-indistinto.gif" alt="">');
const ken = new personaje('Ken', 100, 100, '<img class="imagen__personaje" src="img/ken-izq.gif" alt="">', '<img class="imagen__personaje" src="img/kendch.gif" alt="">');

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
            contenedorJugador1[1].innerHTML = jugador1.personaje.imagenIzq
            contenedorJugador2[1].innerHTML = jugador2.personaje.imagenDch
        }, 4000)
    }
    contenedorJugador1[0].innerHTML = jugador1.personaje.imagenIzq
    contenedorJugador2[0].innerHTML = jugador2.personaje.imagenDch
    let vida = () => {}
    barraVida[0].innerHTML = jugador1.personaje.vida
    barraVida[1].innerHTML = jugador2.personaje.vida
    botonJuego[0].onclick = lucha;
    botonJuego[1].onclick = lucha2;

    console.log(vidaJp1);
    console.log(vidaJg2);

    function lucha(evento) {
        console.log(botonJuego[0]);
        let vidaRestante1 = barraVida[1].innerHTML = jugador2.personaje.daño();
        console.log(vidaRestante1);
        // for (let i = 0; i >= vidaJp2; i++) {
        //     console.log(i);
        //     if (evento !== undefined) {
        //         barraVida[1].innerHTML = jugador2.personaje.daño()
        //         return
        //     }
        // }
    }

    function lucha2(evento) {
        let vidaREstante2 = barraVida[0].innerHTML = jugador1.personaje.daño();
        console.log(vidaRestante2);
        // for (let i = 0; i < vidaJp2; i++) {
        //     console.log(i);
        //     if (evento !== undefined) {
        //         console.log(botonJuego[1]);
        //         barraVida[0].innerHTML = jugador1.personaje.daño()
        //     }
        // }
    }
}