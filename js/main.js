/*personajes*/
const akuma = {
    imagenIzq: "url(../img/akumaizq.git)",
    imagenDch: "url(../img/akumaizq.git)",
    nombre: "Akuma",
    vida: 120,
    ataque: 50,
}

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