/*
Ejercicio, crea un programa que tome todos los elementos de un array y los sume devolviendo el total. 

*/

const numeros = [5, 78, 3, 90, 12, 8, 34, 87];
let suma = 0;
numeros.forEach(numero => {
    suma += numero;
});

console.log(numeros);
console.log(suma);
