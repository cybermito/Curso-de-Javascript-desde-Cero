//Strings primitivos
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String('Soy un string primitivo también')
console.log(typeof stringPrimitivo2)

//Strings tipo Objeto

const stringObjeto = new String('Soy un string objeto') //Estamos creando un objeto
console.log(typeof stringObjeto)

//Manipulación de los Strings
//Acceder a caracteres

const saludo = 'Hola. ¿Cómo estás?' //Un string es como un array, accedemos al carácter por su índice.
console.log(saludo[2]) //Acceso al carácter número 3
console.log(saludo.charAt(2)) //Acceso al carácter número 3 otro método.
console.log(saludo.indexOf('o')) // nos indica el indice de la primera 'o' encontrada
console.log(saludo.indexOf('Cómo')) //nos indica el indice del inicio de la palabra indicada.
console.log(saludo.indexOf('como')) //nos da -1 indicando que la palabra no exite
console.log(saludo.lastIndexOf('o')) //nos dice el indice de la última letra indicada
console.log(saludo.slice(3,5)) //nos devuelve toda la cadena entre dos indices
console.log(saludo.length) //Indica el tamaño del string
console.log(saludo.toLocaleUpperCase()) //Convierte a mayúsculas el string usando la codificación local del idioma. 
console.log(saludo.toLocaleLowerCase()) //Convierte a minúsculas el string usando la codificación local del idioma.

//Dividir una cadena de caracteres (string)

const saludoDividido = saludo.split(' ') //Nos crea un array del string dividido por el carácter espacio
console.log(saludoDividido)

//Recortar string por un caracter

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim() //Elimina el primer y último espacio en blanco.
console.log(saludoSinEspacios)

//Reemplazar palabras en un String

const saludoOriginal = 'Hola mundo'
const nuevoSaludo = saludoOriginal.replace('mundo', '💜')
console.log(nuevoSaludo)

