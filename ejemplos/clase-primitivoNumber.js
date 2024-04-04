//Dato primitivo Number

//1. Tipo entero y decimal.

const entero = 49
const decimal = 3.1416
console.log(typeof entero, typeof decimal) //typeof nos devuelve el tipo de datos que estamos manejando. 

//2. Notación científica

const cientifico = 5e4
console.log(cientifico)

//3. Infinitos y NaN

const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones Aritméticas

//1. Suma, Resta, Multiplicación y División. 

const suma = 3 + 5
const resta = 3 - 5
const multiplicacion = 3 * 5
const division = 3 / 5

//2. Módulo y Esponenciación

const modulo = 3 % 5
const exponente = 3 ** 5

//Precisión

const resultado = 0.1 + 0.2 //devuelve 0.300000....4
console.log(resultado)
console.log(resultado.toFixed(2)) //nos devuelve el dato con solo dos decimales.
console.log(resultado === 0.3) //Compara tanto el valor como el tipo de dato para indicar si son totalmente iguales
//Por el problema en la precisión el valor devuelto en la comparación es erroneo. Hay que tener cuidado con esto. 
console.log(typeof resultado)
console.log(typeof 0.3)

//Operaciones avanzadas

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
