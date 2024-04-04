/*
Análisis de transacciones

Imagine que tiene una lista de transacciones financieras y desea realizar varias operaciones de procesamiento de datos. Utilice las siguientes instrucciones como guía para completar el ejercicio:

1. Calcular el saldo total: utilice el método reduce() para calcular y mostrar el saldo total de todas las transacciones.

2. Encuentre la transacción más grande (ingreso o gasto): utilice el método reduce() para encontrar la transacción con el monto más grande (ya sea ingreso o gasto) y muéstrela en la consola.

3. Filtrar Transacciones de Compra: Utilice el método filter() para obtener y mostrar en la consola solo las transacciones de compra (con valores negativos).

4. Buscar una transacción por descripción: utilice el método find() para buscar y mostrar en la consola una transacción específica por su descripción.

5. Encuentre el índice de transacción por monto: emplee el método findIndex para buscar y mostrar en la consola el índice de una transacción específica por su monto.

6. Actualizar descripciones de transacciones: utilice el método forEach() para actualizar las descripciones de las transacciones. Agregue el prefijo "Gastos: " a transacciones con valores negativos e "Ingresos: " a transacciones con valores positivos. Muestra las transacciones de actualización en la consola. Recuerde adaptar y combinar estas operaciones según sea necesario.
*/

const transacciones = [
    {id: 1, operacion: 'Compra', cantidad: -59},
    {id: 2, operacion: 'Transferencia', cantidad: 1000},
    {id: 3, operacion: 'Cine', cantidad: -12},
    {id: 4, operacion: 'Alquiler', cantidad: -600},
    {id: 5, operacion: 'Nómina', cantidad: 3990},
    {id: 6, operacion: 'Transferencia', cantidad: -250},
    {id: 7, operacion: 'Gasolina', cantidad: -50},
]

//1.- Calcular el saldo total

const balanceTotal = transacciones.reduce((acc, transaccion) => acc + transaccion.cantidad, 0);
console.log('Total saldo: ', balanceTotal);

//2. Encuentre la transacción más grande (ingreso o gasto): utilice el método reduce() para encontrar la transacción con el monto más grande (ya sea ingreso o gasto) y muéstrela en la consola.

const transaccionAlta = transacciones.reduce((maxTransaccion, transaccion) => {
    return Math.abs(transaccion.cantidad) > Math.abs(maxTransaccion.cantidad) ? transaccion : maxTransaccion
}, transacciones[0]);

console.log('La máxima transacción es: ', transaccionAlta);

//3. Filtrar Transacciones de Compra: Utilice el método filter() para obtener y mostrar en la consola solo las transacciones de compra (con valores negativos).

const transaccionesCompra = transacciones.filter(transaccion => transaccion.cantidad < 0);
console.log('Compras realizadas: ', transaccionesCompra);

//4. Buscar una transacción por descripción: utilice el método find() para buscar y mostrar en la consola una transacción específica por su descripción.

/* let descripcionBuscar = 'Nómina';

const transaccionDescripcion = transacciones.find(function(transaccion){
    return transaccion.operacion === descripcionBuscar;
}) */

//4. Otra forma de hacerlo

const transaccionDescripcion = transacciones.find(transaccion => transaccion.operacion === 'Nómina');

console.log('Transacción Específica por Operación: ',transaccionDescripcion);

//5. Encuentre el índice de transacción por monto: emplee el método findIndex para buscar y mostrar en la consola el índice de una transacción específica por su monto.
let cantidadBuscar = -250;
/* 
const transaccionIndex = transacciones.findIndex(function(transaccion){
    return transaccion.cantidad === cantidadBuscar;
}) */

//5. Otra forma de hacerlo

const transaccionIndex = transacciones.findIndex(transaccion => transaccion.cantidad === cantidadBuscar);

console.log('El id de la transacción es: ', transaccionIndex);
console.log('La transacción corresponde a: ', transacciones[transaccionIndex]);

//6. Actualizar descripciones de transacciones: utilice el método forEach() para actualizar las descripciones de las transacciones. Agregue el prefijo "Gastos: " a transacciones con valores negativos e "Ingresos: " a transacciones con valores positivos. Muestra las transacciones de actualización en la consola. Recuerde adaptar y combinar estas operaciones según sea necesario.

/* transacciones.forEach(function(transaccion){
    if (transaccion.cantidad < 0){
        transaccion.operacion = 'Gastos: ' + transaccion.operacion;
    } else {
        transaccion.operacion = 'Ingresos: ' + transaccion.operacion;
    }
}); */

//6. Otra forma de hacerlo

/* transacciones.forEach(transaccion => {
    if (transaccion.cantidad < 0){
        transaccion.operacion = `Gastos: ${transaccion.operacion}`;
    } else {
        transaccion.operacion = `Ingresos: ${transaccion.operacion}`;
    }
}); */

//6. Otra forma más de hacerlo con el formato sencillo del if

transacciones.forEach((transaccion) => {
    transaccion.cantidad < 0
    ? transaccion.operacion = `Gastos: ${transaccion.operacion}`
    : transaccion.operacion = `Ingresos: ${transaccion.operacion}`;
})

console.log('Transacciones Actualizadas: ', transacciones);