/*
Encontrar Índices de Subcadena

Dado un array de cadenas de texto y una cadena de texto objetivo, escribe una función para
determinar si la cadena objetivo está presente en el array. Si está presente, devuelve el índice de la
primera ocurrencia y el índice de la última ocurrencia; de lo contrario, devuelve -1.
*/

const arrayCadenas = ['Hola', 'Adiós', 'Montaña', 'Anda ya', 'Puede ser', 'Desde luego', 'Adiós', 'Será', 'Montaña', 'Mar'];
let cadenaObjetivo = 'Montaña';

function indiceCadena(cadenaObjetivo) {
    let isCadenaObjetivo = arrayCadenas.includes(cadenaObjetivo);
    let primerIndice = 0;
    let ultimoIndice = 0;

    if (isCadenaObjetivo){

        primerIndice = arrayCadenas.indexOf(cadenaObjetivo);
        ultimoIndice = arrayCadenas.lastIndexOf(cadenaObjetivo);
        return [primerIndice, ultimoIndice];

    } else {
        return -1;
    }

    
}

console.log(indiceCadena(cadenaObjetivo));