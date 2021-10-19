# juegoBasico

Esta es una practica del BootCamp sobre una demo de un videjuego Basico. Aunque hay funcionalidades por mejorar el objetivo principal es practicar lo que hemos aprendido las tres semanas atras. No esta terminado y tengo que añadir mejores funcionalidad  y solucionar un bug con el backgroundColor del JavaScript.

## Contenido:

Para trabajar con este repositorio simplemente tienes que clonar o descargartelo con un archivo zip. De esta manera lo tendras en tu ordenador y podras modificar todo lo que necesites.

## Demo:

Si antes de descargarte o clonar el repositorio aqui te dejo una DEMO para que lo puedas ver con anterioridad 
[Demo of the proyect](https://manuemendoza.github.io/juegoBasico/)
## Pre-rquisitos:

Debes tener conocimientos Basicos de HTML, CSS, JavaScript.

## Como fue planteado

La estructura del HTML fue dividida en 4 partes:

* La pantalla de Inicio , donde al pulsar el boton empezaba el juego.
* La pantalla de selección, donde teniamos cuatro bones y dos imagenes que se muestran cuando se seleccionan.
* La pantalla de lucha, donde pulsando dos botones podriamos jugar  
* La pantalla del ganador, donde se anunciaba el ganador del combate.

El CSS:
<br>
Para las clases en el CSS use la nomenclatura de VEN para asi poder seguir el hilo. 
tambien use nomalize para hacer un pequeño resteo a la pagina, tambien puse el box-sizing: boder-box y box-sizing: inherit, para que las medidas del margin, paddig  y border no se me acumularan. por untimo estandarice mis unidades de medida para poder usar los rem poniendo el fon-size del HTML en 62.5 % y el del body en 16 px esto hace que 1 rem sea igual a 10 px

El JavaScript:
<br>
En JavaScript he creado varias capturas de los los nodos que voy a usaresmos en las distintas secciones 


* En la sección encender capture el boton del principio donde lanca un mensaje de bienvenida y una cuenta atras, cambie los fondos, salvo por el bug sin resolver que he tenido, y active los perosonajes de elección.

* En la sección de selección de personaje  tenemos cuatro botones correspondiendes a cada uno de los personaje disponible, lo unico malo es que no he conseguido que puedas elegir el mismo personaje. Cuando los jugadores uno y jugador dos  hayan elegido estos pintaran en la pantalle de seleccion  cual ha sido elegido. despues de un par de segundos esta pantalla se desactivará y se activará la pantalla de lucha.

* En la pantalla de lucha estaran los personajes  que hemos elegido, tambien tendremos dos botones donde podemos quitarle puntos al contrincante. El que llegue a cero pierde y lanzara la pantalla del ganador.
