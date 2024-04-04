//creación de strings
const primeraOpcion = 'String con comillas simples'
const segundaOpcion = "String con comillas dobles"
const terceraOpcion = `String con comillas simples daleadas, también llamado template literals`

// Concatenar strings
// Concatenación: opción +

const direccion = 'Calle de París'
const ciudad = 'París'
const direccionCompleta = 'Mi dirección completa es: ' + direccion + ciudad

console.log(direccionCompleta)

//Concatenación: opción con template literals

const nombre = 'Antonio'
const pais = '🇪🇸'
const presentacion = `Hola, soy ${nombre} de ${pais}`

console.log(presentacion)


//Concatenación: opción join()

const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇪🇸'
const pensamiento = [primeraParte, segundaParte, terceraParte]

console.log(pensamiento.join(' ')) //con join() podemos personalizar el mensaje
console.log(pensamiento.join('❤️'))

//Concatenación: opción concat()

const hobbie1 = 'Robótica'
const hobbie2 = 'Programación'
const hobbie3 = 'Cine'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')

console.log(hobbies)

//Carácteres de escape

//const variable = 'I'm Software Engineer' Daría error ya que la comilla simple se usa para indicar las variables de tipo string. 
//Opción 1. Escape Alternativo (Usar las comillas dobles para delimitar el string)

const escapeAlternativo = "I'm software Engineer"

//Opción 2. Barra invertida
const barraInvertida = 'I\'m Software Engineer'

//Opción 3. Templates Literals
const templaLiterals = `I'm Software Engineer`

//Cómo escribir Strings muy largos tipo párrafo o poema
//Caracter de escape salto de línea

/*
    Las son rojas,
    las violetas azules,
    Caracter inesperado,
    En la línea 86.
*/

const poema = 'Las son rojas,\n' + 
              'las violetas azules,\n' + 
              'Caracter inesperado,\n' + 
              'En la línea 86.'

console.log(poema)

const poema2 = 'Las son rojas,\n\
las violetas azules,\n\
Caracter inesperado,\n\
En la línea 86.'

console.log(poema2)

const poema3 = `Las son rojas,
las violetas azules,
Caracter inesperado,
En la línea 86.`

console.log(poema3)