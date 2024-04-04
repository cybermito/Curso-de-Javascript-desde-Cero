/*
Implementación del juego de cartas

Imagina que estás creando un juego de cartas sencillo. Tiene una matriz que representa una baraja de cartas y desea realizar las siguientes operaciones:

1. Barajar el mazo: reorganiza aleatoriamente el orden de las cartas en el mazo.

2. Repartir cartas: reparte una cantidad específica de cartas a los jugadores desde la parte superior del mazo.

Este ejercicio implica utilizar el método splice() para unir la baraja y repartir cartas.
*/

const baraja = [];

function indiceAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    
    
    return Math.floor(Math.random() * (max - min) + min);

}

function crearBaraja(){

    let palo = '';
    //Creamos la secuencia numérica de un palo.
    for (let j = 0; j < 4; j++){
        
        switch (j){

            case 0:
                palo = 'Oros';
                break;

            case 1:
                palo = 'Copas';
                break;

            case 2:
                palo = 'Espadas';
                break;
            
            case 3:
                palo = 'Bastos';
                break;
        }

        for (let i = 1; i < 13; i++){

            if (i === 10){
                baraja.push('Sota ' + palo);
            } else if (i === 11){
                baraja.push('Caballo ' + palo);
            } else if (i === 12){
                baraja.push('Rey ' + palo);
            } else {
                baraja.push(i.toString() + ' ' + palo);
            }
        }
        //console.log(baraja);
    }
    console.log(baraja);
    console.log(baraja.length)
    
}

function barajar() {
    let indiceA = 0;
    let indiceB = 0;
    let valorA = 0;
    let valorB = 0;

    for (i = 0; i < baraja.length; i++){
        indiceA = indiceAleatorio(0, baraja.length);
        indiceB = indiceAleatorio(0, baraja.length);

        valorA = baraja[indiceA];
        valorB = baraja[indiceB];

        baraja.splice(indiceA, 1, valorB);
        baraja.splice(indiceB, 1, valorA);
    }
    console.log(baraja)
}

function repartir(numJugadores, numCartas){

    let jugadores = Array(numJugadores);

    for (i = 0; i < jugadores.length; i++){
        jugadores[i] = new Array();
        for (j = 0; j < numCartas; j++){            
            jugadores[i].push(baraja.shift(j));
        }
    }

    console.log(jugadores);
    
}

crearBaraja();
barajar();
repartir(4, 5);
console.log(baraja);
console.log(baraja.length);