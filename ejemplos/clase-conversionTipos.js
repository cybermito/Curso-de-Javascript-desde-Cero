// Explicit Type Casting (Conversión de tipos Explicíta).

//Conversión a Integer Number
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

//Conversión a flotante

const stringDecimal = '3.1416'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

//Conversión a binario

const binary = '1010'
const decimal = parseInt(binary, 2) //pasa el string a número y le decimos cual es la base en el segundo argumento. 
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting (Conversión de tipos Implícita)

const sum = '5' + 3
console.log(sum) //Convierte el number en string

const sumWithBoolean = '3' + true
console.log(sumWithBoolean) //Volvió a convertir el boolean a string y concateno.

const sumWithNumber = 2 + true
console.log(sumWithNumber) //Convierte true en number y realiza la suma

// Vamos a poner varios ejemplos de suma con distintos tipos poniendolos en distinto orden para ver que sucede. 

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log('-----------------------')
console.log(stringValue + stringValue) // Siempre que haya un string JS va a concatenar
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)

console.log(numberValue + stringValue) 
console.log(numberValue + numberValue) // Cuando no hay string JS lo que hace es sumar
console.log(numberValue + booleanValue)

console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue) // Cuando no hay string JS lo que hace es sumar
console.log(booleanValue + booleanValue)



// Reto pregunta:
// Que devuelve este programa?

const numero = '596'
const numeroConvertido = parseInt(numero)
console.log(typeof numero) //String
console.log(typeof numeroConvertido) //Number