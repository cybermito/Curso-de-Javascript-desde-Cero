/*
Programa de verificación de ganadores de la rifa

En este programa podrás verificar si una persona se encuentra entre la lista de ganadores de un sorteo.
Simplemente ingrese el nombre o el número del boleto y el programa verificará y mostrará la información del ganador.

*/

const participantesGanadores = [

    {id: 1, nombre: 'Luna', numero: 1001},
    {id: 8, nombre: 'Nuria', numero: 1020},
    {id: 15, nombre: 'Pablo', numero: 1301},
    {id: 47, nombre: 'Mito', numero: 1041}
]

function encontrarGanadorNombre(name) {
    const ganador = participantesGanadores.find(participante => participante.nombre === name);
    return ganador || 'No hay un ganador.';
}

function encontrarGanadorTicket(numero){
    const index = participantesGanadores.findIndex(participante => participante.numero === numero);
    return index !== -1 ? index : 'No hay un ganador con este número.';
}

function visualizarInformacionGanador (ganador) {
    if (ganador !== undefined && ganador != null && ganador !== 'No hay un ganador.' ) {
        console.log('Información del Ganador: ', ganador);
    } else {
        console.log('No hay un ganador.');
    }
}

const ganadorPorNombre = encontrarGanadorNombre('Luna');
const ganadorPorNumero = encontrarGanadorTicket(1000);

visualizarInformacionGanador(ganadorPorNombre);
console.log('Indice del Ganador por número: ', ganadorPorNumero);