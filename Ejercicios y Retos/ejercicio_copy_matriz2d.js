//Voy a probar a duplicar una matriz 2D con varias opciones / métodos

//Con slice()

const matrizOriginal = [[1,2,3],[4,5,6],[7,8,9]];
let matrizCopia = [];

matrizCopia = matrizOriginal.slice();

console.log('Original: ', matrizOriginal);
console.log('Copia: ', matrizCopia);

matrizOriginal[1][1] = 10;

console.log('Original: ', matrizOriginal);
console.log('Copia: ', matrizCopia);

// No hace una copia, lo que genera es una copia de la referencia de memoria al array original. Si lo modifico
// el array original, la copia también se modifica.

matrizCopia[1][2] = 99;

console.log('Original: ', matrizOriginal);
console.log('Copia: ', matrizCopia);