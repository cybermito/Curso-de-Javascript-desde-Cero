/*
Implementación del juego de cartas

Imagina que estás creando un juego de cartas sencillo. Tiene una matriz que representa una baraja de cartas y desea realizar las siguientes operaciones:

1. Barajar el mazo: reorganiza aleatoriamente el orden de las cartas en el mazo.

2. Repartir cartas: reparte una cantidad específica de cartas a los jugadores desde la parte superior del mazo.

Este ejercicio implica utilizar el método splice() para unir la baraja y repartir cartas.
*/

const baraja = [];

/* function indiceAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    
    
    return Math.floor(Math.random() * (max - min) + min);

} */

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
    //Este algoritmo se llama Fisher-Yates Algorithm, es usado para hacer barajas de cartas Link descripción: https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates
    for (let i = baraja.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]]; //Esto intercambia las posiciones en un array.
    }
}

function repartirCartas (numCartas) {

    const repartirCartas = baraja.splice(0, numCartas)
    return repartirCartas

}

/* function repartir(numJugadores, numCartas){

    let jugadores = Array(numJugadores);

    for (i = 0; i < jugadores.length; i++){
        jugadores[i] = new Array();
        for (j = 0; j < numCartas; j++){            
            jugadores[i].push(baraja.shift(j));
        }
    }

    console.log(jugadores);
    
} */

crearBaraja();
barajar();
console.log(baraja);
console.log(baraja.length);

const player1 = repartirCartas(5);
const player2 = repartirCartas(5);
const player3 = repartirCartas(5)

// repartir(4, 5);

console.log('Player 1 tiene: ', player1);
console.log('Player 2 tiene: ', player2);
console.log('Player 3 tiene: ', player3);
console.log(baraja);
console.log(baraja.length);