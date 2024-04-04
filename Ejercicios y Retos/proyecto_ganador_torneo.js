/*
Está teniendo lugar un torneo algorítmico en el que equipos de programadores compiten entre sí para resolver
problemas algorítmicos lo más rápido posible. Los equipos compiten en un formato de todos contra todos,
donde cada equipo se enfrenta a todos los demás. Solo dos equipos compiten entre sí en cada enfrentamiento,
y en cada competición, un equipo es designado como equipo local, mientras que el otro es el equipo visitante.
Siempre hay un claro ganador y perdedor en cada competición, sin empates. Los equipos obtienen 3 puntos
por una victoria y 0 puntos por una derrota. El ganador general del torneo es el equipo con la mayor cantidad
de puntos.

Tu tarea es escribir una función que determine al ganador del torneo en función de los resultados de las
competiciones. La entrada consta de dos arrays: competitions y results. El array competitions contiene
pares de equipos representados como [equipoLocal, equipoVisitante], donde cada equipo es una cadena de
hasta 30 caracteres. El array results indica el ganador de cada competición correspondiente en el array
competitions. Específicamente, results[i] denota el ganador de competitions[i], donde un 1 en el array results
significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.
Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás
equipos exactamente una vez. Además, se garantiza que el torneo siempre tendrá al menos dos equipos.
*/

//Competiciones [Local, Visitante], [Local, Visitante], [Local, Visitante]
const competiciones = [
    ['Javascript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'Javascript']
];

//Resultado: 0 = Ganador Visitante, 1 = Ganador Local
const resultados = [0, 0, 1]; //Según esto y la descripción del ejercicio, la función debe devolver como ganador
// Python. resultado sería [ 0 = Visitante = C#, 0 = Visitante = Python, 1 = Local = Python]

function ganadorTorneo(competiciones, resultados){

       let ganadores = [];
        //Genero una lista de equipos ganadores.
        for (i = 0; i < resultados.length; i++){
            if (resultados[i] === 1){
                
                ganadores.push(competiciones[i][0]);

            } else {
                
                ganadores.push(competiciones[i][1]);

            }
        }
        //Reduzco la lista a equipos ganadores y competiciones ganadas, creando una lista de objetos.
        let competicionesGanadas = ganadores.reduce(function(acc, equipo){
            if (equipo in acc) {
                acc[equipo]++;
            } else {
                acc[equipo] = 1;
            }
            return acc;
        }, {});
        // Devuelvo el equipo que mayor número de competiciones ha ganado.
        for (equipo in competicionesGanadas){

            if (competicionesGanadas[equipo] > 1){
                console.log(`El equipo ganador es: ${equipo} con ${competicionesGanadas[equipo]} competiciones ganadas`);
            }
        }
        
}

ganadorTorneo(competiciones, resultados);

//Nota: Tengo que mejorar el código para que sea escalable, ya que si hay más competiciones se debe realizar 
//la última comparación de manera que tenga en cuenta esto.

//En el enunciado del ejercicio se indica que el equipo ganador obtiene 3 puntos y este caso no lo he realizado
//tengo que cambiarlo para comparar con este punto.
