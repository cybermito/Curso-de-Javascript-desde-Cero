# Curso de Javascript desde Cero

Ir a la página [MDN Javascript](https://developer.mozilla.org/es/docs/Learn/JavaScript)

## Preparar el entorno de trabajo

Instalar Visual Studio Code
Instalar Node.js

## Clase 1 "Hola Mundo"

Podemos ejecutar javascript de 4 formas distintas

- Consola del navegador
- Etiqueta script
- Archivo JS externo
- NodeJS

## Clase 2 "Anatomía de una variable"

¿Qué es una variable? Es como un cajón donde guardamos datos para poder retomarlos en otras partes del programa.

## Clase 3 "Tipos de datos: Mutabilidad e inmutabilidad"

Tipos de datos primitivos y tipos de datos no primitivos

Los primitivos cómo number, boolean, string, null, undefine, symbol (este desde 2015) son tipos de datos sencillos y son inmutables.
Hay un nuevo tipo de dato que se ha añadido nuevo al grupo de los Primitivos, ver [este vídeo.](https://www.youtube.com/watch?v=cC65D2q5f8I)

Los no primitivos son todos objetos (arrays, funciones, fechas, etc), todo aquel dato que no tiene característica de primitivo, son tipos de datos complejos y son mutables, pueden cambiar su valor.

## Clase 4 "Paso por valor"

Paso por valor es similar a copiar y pegar un archivo en el SO, que al cambiar el contenido del archivo en uno de ellos no afecta al otro archivo.

## Clase 5 "Paso por referencia"

Paso por referencia es similar a crear un acceso directo del archivo en el SO, al cambiar el contenido del archivo se modifica en los dos accesos.

Garbage Collection --> recolector de basura, lo que hace es eliminar referencias que no se están usando, dejando solo las utilizadas.

## Clase 6 "Creación de String" y Concatenación

string --> dato primitivo
Creación de strings
Concatenación (opciones)
Strings: literals y values
Caracteres de escape
Strings largos
Métodos

## Clase 7: "Caracteres de escape"

Los caracteres de escape se usan para poder poner caracteres que son comunes al lenguaje de programación.

Ejemplo: const variable = 'I'm Software Engineer' --> Esto daría error.
Saltos de línea para crear distintos párrafos.

En el archivo clase-strings.js podemos ver los ejemplos con respecto a todo lo que tiene que ver con strings.

La asignación de un string a una variable se conoce como string literals, el resultado presentado en pantalla, se conoce como strings values.

## Clase 8: "Manipulación de strings" (Métodos)

Tenemos strings primitivos y strings objetos.
En el documento clase-manipulacionStrings.js tenemos varios ejemplos del uso de métodos con strings.
Es solo una pequeña parte de los más usados, en la imagen dentro de la carpeta img, tenemos los más usados. Es un aporte de un compañero del curso.

## Clase 9: "Tipo de dato primitivo: number"

Tres tipos de números en JS:

- Tipo entero y decimal
- Tipo notación científica
- Infinitos y NaN (no es un número) (Not a Number)

Después tenemos las Operaciones Aritméticas que podemos realizar con JS.

Dos grupos:

1. Suma, Resta, Multiplicación y División.
2. Módulo y Exponenciación

Hay ciertos dilemas con respecto a la precisión. JS no es tan preciso con los datos de tipo number decimal (o números de coma flotante)
Ejemplo, si sumamos 0.1 + 0.2 esperaríamos que nos devolviera 0.3, pero el caso es que no es así, nos devuelve 0.3000000...4 dando un número limitado de decimales. Existen varias técnicas para aparentemente solucionan esto.

Podemos usar algún método de redondeo para solucionar el tema de precisión, pero si realizamos una comparación con ambos números nos daremos cuenta que JS dar una información errónea, debido a la representación interna de números de JS.

Operaciones Avanzadas con números.
Son operaciones como la raíz cuadrada de un número, el valor absoluto, aleatorio etc. Todas estas operaciones vienen incluidas en la librería math()

Hay varias librerías de calculo matemático que nos ayudan con la precisión en coma flotante. (investigar)

Ver archivo de ejemplo clase-primitivoNumber.js

## Clase 10: "Tipo de dato primitivo: Boolean"

Los tipos de datos Boolean son datos que solo toman dos posibles valores Verdadero (true) o Falso (false).

Como buenas prácticas en la programación se recomienda declarar las variables de tipo boolean del siguiente modo:

const isActive = true
const hasPermission = false

Es anteponiendo una especie de pregunta, así de este modo sabemos y JS también que esa variable es boolean.

Hay dos maneras de hacer conversión a boolean

1. Conversión implícita: JS internamente realiza la conversión.

    const result = 5 > 3
    console.log(result) --> devuelve un resultado booleano.

    const name = 'Atigra Makers'
    console.log(!!name) --> devuelve un resultado booleano, lo que índica es si tiene contenido la variable.

2. Conversión explícita: Nosotros como programadores realizamos la conversión.

    const value = 0
    const explicitBoolean = Boolean(value)
    console.log(explicitBoolean)

    const otherValue = 24
    const explicitBoolean = Boolean(otherValue)
    console.log(explicitBoolean)

## Clase 11: Tipos de datos primitivos: null, undefined, symbol y bigint

null es un tipo de variable primitivo pero con la particularidad que si le miras que tipo de variable es nos indica JS que es un object. Esto es un error de hace tiempo de JS qeu para no romper programas ya creados se ha dejado de este modo. No se recomienda la asignación a variables con este tipo de dato, si no que se deja a JS que sea el que lo asigne en el momento que necesite. Es un dato vacío.

```javascript
//null
const variableNull = null
console.log(variableNull)
console.log(typeof variableNull)
```

undefined es un tipo de dato primitivo que nos devuelve JS cuando declaramos una variable sin asignarle ningún dato. Al igual que null no se recomienda su asignación a ninguna variable o declarar variables sin asignación de tipo de datos.

```javascript

//undefined
let name
console.log(name)
console.log(typeof name)
```

Symbol es un tipo de dato para definir identificadores únicos, valores únicos y que no queremos que cambien. Podemos crear dos Symbol con valores iguales pero Js los va a asignar con valores diferentes. Los Symbol son útiles para poder crear propiedades únicas para los objetos.

```javascript

//Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2) //devuelve false, se genera un identificador distinto para cada variable.

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

```

bigint es un tipo de dato para representar números muy grandes que sobrepasan los números que puede representar un number, su representación puede ser por expresiones largas y al final hay que añadir una n.
Es un tipo de dato que se ha añadido recientemente para poder realizar operaciones con números muy grandes que superan 2^53 - 1 que es el limite para number y de este modo no perder precisión.

```javascript
const bigNumber = 209348120851029581029581029580245802895038450238945023984530495048n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 10000000000000000000000000000000000000000000000000000000000n
console.log(numberOfParticlesInTheUniverse)
```

## Clase 12: Conversión de tipos: Type Casting y Coercion

Los lenguajes de programación se pueden dividir en varios grupos/categorías según se ejecutan las instrucciones del programa.

Lenguajes compilados: Se crea el programa con las instrucciones en el lenguaje seleccionado y después este tiene que pasar por un proceso de compilación / traducción para que pueda ser ejecutado en una máquina en concreto. Estos lenguajes pueden ser C/C++, Rust, Go, Swift.
En los lenguajes compilados el chequeo de los tipos de datos es estático y se le suelen llamar lenguajes con fuerte tipado.

Lenguajes interpretados: El programa o instrucciones se van ejecutando sobre la marcha e interpretando su función/acción, no necesita de compilación traducción, bueno esta traducción se hace línea a línea. Lenguajes interpretados son: Javascript, PGP, Ruby, Python.
En los lenguajes interpretados el cheque del tipo de datos es dinámico y dependiendo del lenguaje puede ser débilmente tipado o medianamente tipado.

Luego existen unos lenguajes llamados intermedios que son los que realizan un proceso de compilación genérico, creando un bytecode que después será interpretado por una máquina virtual. Lenguajes de programación intermedios JAVA.

Javascript al ser un lenguaje de programación débilmente tipado e interpretado podemos usar una variable y asignarle un valor de tipo number y más adelante asignarle un valor de tipo string.

Ejemplos:

```javascript

let miVariable = 'Ahora soy String'
miVariable = 5 //Ahora es de tipo number

```

En el siguiente código el interprete ejecutaría las instrucciones una a una y cuando llegase a la línea de declaración de la variable título, al ejecutar el console.log, nos devolvería un error por no haber cerrado las comillas simples de un String.

```javascript

const saludo = 'Hola'
console.log(saludo)

const despedida = 'Adiós'
console.log(despedida)

const titulo = 'Me gusta estudiar
console.log(titulo) //Aquí saltaría un error

const descripcion = 'porque aprendo mucho'
console.log(descripción)

```

El proceso que usa javascript para interpretar el programa creado hay que tenerlo en cuenta ya que en casos como el que se presenta a continuación, Javascript realizará una conversión interna de tipos de datos a su conveniencia.

```javascript

const numero = 2
const booleano = true

console.log(numero + booleano)
//Devuelve 3

```

Hay dos tipos de Conversión de tipos:

- Implícita: Es la que hace el propio interprete de JS de manera interna

```javascript
    2 + true
```

- Explícita: Es la que nosotros como programadores realizamos al convertir un tipo en otro.

```javascript
    String()
    Number()
    Boolean()
```

## Clase 13: Conversión de tipos explícita e implícita

En esta clase vemos varios ejemplos en el archivo clase-conversionTipos.js
Descubrimos que en JS al ser débilmente tipado siempre que hay un string en una suma, lo que va a hacer es concatenar. Cuando no haya string en una suma, lo que hará es sumar. Hay que tenerlo en cuenta.

## Clase 14: Crea un perfil para redes sociales con Javascript

En esta clase vamos a realizar un proyecto de perfil de red social, creando un fichero.js con distinta información y tipos de datos tal y como hemos visto hasta ahora.
El archivo con el proyecto es ejercicio-practico-tipos-datos.js

## Clase 15: Anatomía de una función

Una función es un bloque de código en la cuál programamos una funcionalidad especifica que usaremos en distintas partes del programa.

Estructura de una función:

Palabra clave function --> índicamos a JS que vamos a escribir un bloque de código que es una función.
Seguido del nombre de la función en camelCase y unos paréntesis de apertura y cierre.
Dentro de los paréntesis podemos poner varios parámetros (opcionales) que usaremos dentro de la función.
Seguidamente abrimos llaves {} para indicar que entre estas estará el bloque de código que se usará para la función.
Una función puede retornar un valor o no, en el caso de que se retorne un valor se indica con la palabra reservada return.

Ejemplo de una función:

```javascript
    function suma(a, b) {
        return a + b
    }

    suma(3, 5)
```

Cuando creamos una función, para poder usarla, necesitamos llamarla, el modo de hacerlo es como se ve en el ejemplo. Escribimos el nombre de la función con los dos paréntesis y le indicamos los argumentos necesarios en caso de que esta tenga los parámetros declarados.

En el archivo clase-estructuraDeUnaFuncion.js tenemos otro ejemplo de declaración de una función y llamada.

## Clase 16: Funciones vs Métodos

En JavaScript, el término "método" y "función" a menudo se usan de manera intercambiable, pero hay una distinción técnica entre ambos, especialmente cuando se trata de objetos.

1. **Función:**

   - En términos generales, una función en JavaScript es un bloque de código reutilizable que realiza una tarea específica. Puede o no estar asociada a un objeto.

   - Las funciones pueden ser declarativas (mediante la palabra clave function) o expresiones de función (asignadas a una variable o propiedad).

   - Pueden ser invocadas de manera independiente, sin necesidad de estar asociadas a un objeto.

   ```javascript

   // Función independiente

   function suma(a, b) {

   return a + b;

   }

   // Función expresión

   const resta = function(a, b) {

   return a - b;

   };

   ```

2. **Método:**

   - Un método es una función que está asociada a un objeto. Cuando una función se convierte en propiedad de un objeto, se llama método. Los métodos son funciones, pero el término "método" se usa para resaltar su relación con un objeto específico.

   - Dentro de un método, la palabra clave this se refiere al objeto al que pertenece el método.

    ```javascript

    const objeto = {

    propiedad: 'valor',

    miMetodo: function() {

    console.log(this.propiedad); // Accediendo a la propiedad del objeto

    }

    };

    objeto.miMetodo(); // Llamando al método

    ```

En resumen, la diferencia principal radica en la asociación con objetos. Una función se convierte en un método cuando está vinculada a un objeto. En el ejemplo anterior, miMetodo es un método del objeto objeto.

Es importante destacar que, a pesar de estas diferencias conceptuales, en términos prácticos, la línea entre funciones y métodos puede difuminarse, y ambos términos se usan indistintamente en muchos contextos. En JavaScript, todo es un objeto, y las funciones pueden tratarse como ciudadanos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos y devueltas como valores de otras funciones.

## Clase 17: Funciones puras e impuras

Funciones puras: Tienen dos carácteristicas fundamentales.

- Dada una misma entrada vamos a obtener una misma salida.
- No producen efectos secundarios. (side effects)

### ¿Que producen side effects?

- Modificar variables globales
- Modificar parámetros
- Solicitudes HTTP
- Imprimir mensajes en pantalla o consola
- Manipulación del DOM
- Obtener la hora actual

Vamos a ver como es la estructura de una función pura.

```javascript

function suma (a, b){ //Dada una misma entrada (input)
    return a + b //Obtenemos una misma salida.
    //Además no se cumplen ninguno de los side effects
}

function square(x){
    return x * x
}

function addTen(y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)

```

Función impura, es cuando se cumple al menos uno de los side effects

```javascript

function suma (a, b){
    console.log('A: ' + a) //Esto hace que la función pura se convierta en una función impura.
    return a + b
}

```

Otro ejemplo de función impura

```javascript

let total = 0

function sumWithSideEffect (a) {
    total += a //Estamos modificando una variable global.
    return total
}


```

## Clase 18: Identificador this

Ver el ejemplo creado en el archivo clase-identificadorThis.js

El identificador this es una referencia al objeto que está ejecutando el contexto actual del código en JavaScript. Te permite acceder a las propiedades y métodos de ese objeto.
Por ejemplo, dentro de un método de un objeto, this se refiere al objeto que contiene el método.

```javascript

let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    mostrarInfo: function() {
        console.log(this.marca + ' ' + this.modelo);
    }
};

auto.mostrarInfo(); // Imprime: "Toyota Corolla"

```

En este ejemplo, this dentro del método mostrarInfo hace referencia al objeto auto, permitiendo acceder a sus propiedades marca y modelo.
Sin embargo, el valor de this puede cambiar dependiendo del contexto en el que se utilice. Por ejemplo, si usas this en una función que no es un método de un objeto, this se referirá al objeto global (window en el caso del navegador, o global en el caso de Node.js).

```javascript

function demostracion() {
    console.log(this);
}

demostracion(); // Imprime el objeto global (window o global)

```

En este caso, this dentro de la función demostración se refiere al objeto global, ya que la función no es un método de un objeto.
Es importante recordar que this no se refiere a la función en sí misma, sino al objeto que está ejecutando el código actual. Esto puede ser un poco confuso al principio, pero con práctica y experiencia, te familiarizarás con cómo funciona this en diferentes contextos.

### Enlace Implícito y Explícito

El enlace implícito y el enlace explícito son conceptos que están relacionados con cómo se determina el valor de this en JavaScript.

- Enlace implícito: El enlace implícito se refiere a cuando el valor de this se determina por el contexto en el que se llama a la función. En otras palabras, el valor de this es el objeto que está antes del punto (.) en la llamada a la función. Por ejemplo:
  
```javascript
let objeto = {
    nombre: 'Objeto',
    mostrarNombre: function() {
        console.log(this.nombre);
    }
};

objeto.mostrarNombre(); // Imprime: 'Objeto'
```

En este caso, this dentro de la función mostrarNombre se refiere al objeto porque objeto es el que está antes del punto en la llamada a la función.

- Enlace explícito: El enlace explícito se refiere a cuando se asigna explícitamente el valor de this utilizando los métodos .call(), .apply(), o .bind(). Por ejemplo:

```javascript
    let objeto1 = {
        nombre: 'Objeto 1'
    };

    let objeto2 = {
        nombre: 'Objeto 2',
        mostrarNombre: function() {
            console.log(this.nombre);
        }
    };

    objeto2.mostrarNombre.call(objeto1); // Imprime: 'Objeto 1'
```

En este caso, this dentro de la función mostrarNombre se refiere a objeto1 porque hemos llamado a la función con .call(objeto1), que establece explícitamente this a objeto1.

*💡 Recuerda, el valor de this no se decide hasta que la función se llama, y puede ser diferente cada vez que se llama a la función.*

## Clase 19: Métodos bind, call y apply

Son métodos que nos permiten controlar el contexto/valor de this en las funciones.

- Método call 📌

    ✅ Concepto: call() es un método que se utiliza para invocar (llamar) a otra función con un valor específico para this (el contexto de ejecución) y con argumentos proporcionados de forma individual.

```javascript
funcion.call(thisArg, arg1, arg2, ...);

// funcion: La función que se va a llamar.
// thisArg: El valor que se asignará como this cuando la función sea llamada.
// arg1, arg2, ...: Argumentos individuales que se pasarán a la función.
```

Ejemplo🔎

```javascript

const persona = {
  nombre: 'Juan',
  saludar: function(saludo) {
    console.log(`${saludo}, soy ${this.nombre}.`);
  }
};

const otraPersona = {
  nombre: 'Maria'
};

// Llamando a la función saludar de persona con el contexto de otraPersona
persona.saludar.call(otraPersona, 'Hola'); 
// Imprime: Hola, soy Maria.
```

- Método apply 📌

    ✅ Concepto: apply() es una función en JavaScript que se utiliza para llamar a otra función con un valor específico para this y un array (o un objeto similar a un array) de argumentos.

```javascript
funcion.apply(thisArg, [argsArray])

// funcion: La función a la que se llamará.
// thisArg: El valor que será utilizado como this dentro de la función.
// argsArray: Un array o un objeto similar a un array que contiene los argumentos que se pasarán a la función.
```

Ejemplo🔎

```javascript

function saludar(nombre, saludo) {
  console.log(`${saludo}, ${nombre}!`);
}

const persona = {
  nombre: 'Ana'
};

// Usando apply para llamar a la función con un array de argumentos
saludar.apply(persona, ['Hola', 'Señorita']);

```

- Método bind 📌

    ✅ Concepto: bind() crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

```javascript
funcionOriginal.bind(thisArg[, arg1[, arg2[, ...]]]);

// funcionOriginal: La función original que se va a llamar.
// thisArg: El valor que se asignará como this cuando la nueva función sea llamada.
// arg1, arg2, ...: Argumentos opcionales que se predefinirán para la nueva función.
```

Ejemplo🔎

```javascript

const persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
};

const saludarJuan = persona.saludar.bind(persona);
saludarJuan(); // Imprime: Hola, soy Juan.

```

Reto 🦾

¿Qué devuelven las dos últimas instrucciones?

```javascript

const caricatura = { nombre =  'Vaca y Pollo'}

function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita.
    Me encantaba ver las aventuras de ${personaje}.`)

}

recuerdo.call(caricatura, 'Vaca')
recuerdo.bind(caricatura, 'Pollito')

```

## Clase 20: Funciones flecha (Arrow function) y enlace léxico (Lexical Binding)

Las funciones flecha o Arrow function se definieron para reducir o simplificar la creación de una función.
Aparecieron con ES2015 (ES6), estas funciones son limitadas y no es posible usarla en todas las situaciones.

```javascript
//Función tradicional  con devolución de valores
const greeting = function (name) {
    return `Hi, ${name}`
}

//Arrow function de la misma expresión de función anterior (Arrow function - explicit return)
const greetingArrowFunction = (name) => { 
    return `Hi, ${name}` 
}

//Otra forma más sencilla de escribirla en una sola línea. (Arrow function - implicit return)
const greetingArrowFunction = name => `Hi, ${name}` //al tener un solo parámetro la función se pueden obviar los paréntesis.

//Arrow function con varios parámetros
const greetingArrowFunction = (name, lastName) => `Hi, I'm ${name} ${lastName}` //En este caso si hay que poner los paréntesis. 

```

En las Arrow Function no existe el enlace léxico hacia "this" no puede modificarlo. Como vemos en el siguiente ejemplo con los dos formatos de función, la arrow function devuelve undefine en vez del parámetro del objeto.

```javascript

const functionalCharacter = {
    name: 'Uncle Ben',
    messageWithTradicionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },

    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    },    
}

functionalCharacter.messageWithTradicionalFunction('Un gran poder requiere de una gran responsabilidad')
// Uncle Ben says: 'Un gran poder requiere de una gran responsabilidad'
functionalCharacter.messageWithArrowFunction('Cuidado con el doctor Octopus')
//undefine says: 'Cuidado con el doctor Octopus

```

Las funciones flecha (arrow functions) y las funciones normales en JavaScript tienen varias diferencias clave:

Funciones Normales

- Se crean mediante la declaración function, seguida del nombre de la función y un par de paréntesis que pueden definir los parámetros que recibe la función¹.
- Pueden tener un nombre, lo cual es útil para la depuración¹.
- El contexto (this) se define al llamarlas².

Funciones Flecha

- Fueron introducidas en la versión ES6 de JavaScript en 2015¹.
- No tienen un nombre propio¹.
- El contexto (this) se define al declararlas².
- Si solo incluyen una sentencia, es posible omitir las llaves de la función¹.

En resumen, la principal diferencia entre las funciones flecha y las funciones normales es cómo manejan el contexto (this). En las funciones normales, this se define al llamarlas, mientras que en las funciones flecha, this se define al declararlas.

## Clase 21: Implicaciones de duplicar código

```javascript
//Notación literal de un objeto

const cohete = {
    nombre: 'Falcon 9', //Atributo del objeto 
    mensajeDeDespegue: function mensajeDeDespegue () { //método del objeto
        console.log('Despegando')
    }
}

```

*¿Podemos crear objetos a partir de funciones?*

La respuesta es Sí, gracias a las funciones constructoras.

Al nosotros crear un objeto con sus atributos y métodos, si quisiéramos crear otro objeto similar modificando dicho objeto en una parte tendríamos que duplicar dicho objeto y en programación tratamos de evitar esto ya que esto conlleva a lo siguiente.

### Duplicar código implica

1. Mantenimiento difícil: Duplicar código hace que mantener y actualizar el software sea más complicado. Cuando se realiza un cambio en una parte del código duplicado, es necesario recordar y aplicar ese cambio en todas las instancias duplicadas, lo que puede ser propenso a olvidos y errores.

2. Aumento de complejidad: La presencia de código duplicado aumenta la complejidad del sistema. En lugar de tener una única fuente de verdad para una funcionalidad o lógica, hay múltiples instancias que deben ser coordinadas y gestionadas, lo que puede resultar en un código más difícil de entender y mantener.

3. Mayor probabilidad de errores: Duplicar código incrementa la posibilidad de introducir errores, ya que cualquier cambio realizado en una instancia duplicada puede no propagarse de manera consistente a todas las demás. Esto puede conducir a comportamientos inesperados y a la necesidad de corregir errores en múltiples lugares.

4. Dificultad de escalar: A medida que el proyecto crece, la duplicación de código puede volverse más difícil de manejar. La cantidad de código duplicado puede aumentar exponencialmente, lo que dificulta la adición de nuevas funcionalidades, la corrección de errores y la mejora del sistema en general.

5. Tiempo y recursos: Duplicar código implica utilizar más tiempo y recursos en el desarrollo y mantenimiento del software. En lugar de reutilizar y mantener una única implementación, se deben dedicar recursos adicionales a mantener y sincronizar múltiples copias del mismo código.

6. Violación de principios de diseño (DRY): DRY (Don't Repeat Yourself) es un principio de diseño que aboga por la eliminación de duplicación en el código. Duplicar código va en contra de este principio, ya que implica repetir la misma lógica en varios lugares, lo cual es considerado una mala práctica de programación.

7. Dificultad en la identificación de errores: Identificar y corregir errores se vuelve más desafiante cuando el código está duplicado. La propagación de cambios puede no ser evidente de inmediato, lo que dificulta la tarea de encontrar y corregir problemas en el software.

Para evitar esto existen las funciones y objetos. (Los objetos tienen atributos y métodos). Las funciones nos permiten reutilizar un mismo código con una funcionalidad específica.

Dentro de los objetos existen unas funciones especiales que nos permiten crear varios objetos con propiedades similares sin tener que repetir código o crearlo a mano. Estas funciones se llaman funciones constructoras.

## Clase 22: Funciones Constructoras

Ejemplo de esta clase:

```javascript

const personalizedMessage = () => 'Goodbye everybody !' //Arrow function

function Rocket (name,ownMessage) { //Función constructora, la nombramos con la inicial en mayúsculas, se crea al igual que una función normal

    this.name=name
    this.launchMessage=ownMessage

}

const falcon9Rocket = new Rocket ('Falcon 9',personalizedMessage) //Creamos el objeto de la función constructora con la palabra reservada new
const falconHeavyRocket = new Rocket ('Falcon Heavy',personalizedMessage)

console.log (falcon9Rocket.name)
console.log (falcon9Rocket.launchMessage())

const RocketWithArrowFunction = (name,ownMessage) => ({ //Función constructora con Arrow Function, no se utiliza el contexto this.
    name:name,
    launchMessage:ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successful launch !' 

const falcon9Rocket1 = RocketWithArrowFunction ('Falcon 9', personalizedMessageForArrowFunction) //Creando el objeto para la función constructora creada con Arrow function, en este caso solo hay que asociar la función a una variable y no es necesario usar la palabra reservada new

console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())

```

### Caso real para lo que se usaría una función constructora

“Imagina que estás desarrollando una aplicación web para gestionar una biblioteca. Necesitas manejar información sobre los libros, como el título, autor, y número de copias disponibles. Una función constructora puede ser muy útil para crear objetos que representen cada libro, permitiéndote fácilmente crear y manejar múltiples libros con estructuras similares.”

```javascript

function Libro(titulo, autor, copias) { //Función constructora, la nombramos con mayúsculas la primera letra del nombre.
  this.titulo = titulo;
  this.autor = autor;
  this.copias = copias;

  this.mostrarInfo = function() {
    console.log(`${this.titulo} por ${this.autor}, ${this.copias} copias disponibles.`);
  };

  this.prestarLibro = function() {
    if (this.copias > 0) {
      this.copias -= 1;
      console.log(`Libro prestado: ${this.titulo}. Copias restantes: ${this.copias}.`);
    } else {
      console.log(`Lo sentimos, no hay copias disponibles de ${this.titulo}.`);
    }
  };

  this.devolverLibro = function() {
    this.copias += 1;
    console.log(`Libro devuelto: ${this.titulo}. Copias actuales: ${this.copias}.`);
  };
}
```

Creando Instancias de Libros

```javascript

let libro1 = new Libro("El Hobbit", "J.R.R. Tolkien", 3); //Usamos new para crear el objeto con la función constructora.
let libro2 = new Libro("1984", "George Orwell", 5);

```

Mostrando información de los libros

```js
libro1.mostrarInfo(); // El Hobbit por J.R.R. Tolkien, 3 copias disponibles.
libro2.mostrarInfo(); // 1984 por George Orwell, 5 copias disponibles.
```

Prestar y devolver libros

```js
libro1.prestarLibro(); // Libro prestado: El Hobbit. Copias restantes: 2.
libro1.prestarLibro(); // Libro prestado: El Hobbit. Copias restantes: 1.
libro1.devolverLibro(); // Libro devuelto: El Hobbit. Copias actuales: 2.

```

## Clase 23: 10 Tipos de funciones

En JavaScript, los tipos de funciones pueden clasificarse de varias maneras según su comportamiento y uso. Aquí tienes una lista de algunos tipos comunes de funciones en JavaScript:

1. Funciones Declarativas (o con nombre):

    Se definen con la palabra clave function
    Pueden ser referenciadas antes de su declaración.

    ```javascript
    function suma(a, b) { return a + b; } 
    ```

2. Funciones Expresivas (o anónimas):

    Se asignan a variables.
    A menudo se utilizan para asignar funciones como valores a variables.

    ```javascript
    const suma = function(a, b) { return a + b; };
    ```

3. Funciones Flecha:

    Introducidas en ES6, proporcionan una sintaxis más concisa.
    Tienen un comportamiento ligeramente diferente con respecto al valor de this.

    ```javascript
    const suma = (a, b) => a + b;
    ```

4. Funciones Constructoras:

    Utilizadas para crear objetos con new.
    Utilizan this para asignar propiedades al nuevo objeto.

    ```javascript
    function Persona (nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad; 
    } const persona1 = new Persona('Juan', 25);
    ```

5. Funciones de Orden Superior (Higher-Order Functions):

    Aceptan funciones como argumentos o devuelven funciones.
    Ejemplos incluyen map, filter, reduce.

6. Funciones Recursivas:

    Llamadas a sí mismas durante la ejecución.
    Útiles para problemas que se pueden dividir en subproblemas más pequeños.

    ```javascript
    function factorial (n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        
        else {
            return n * factorial(n - 1);
        }
    }
    ```

7. Funciones Anidadas (Nested Functions):

    Definidas dentro de otra función.
    Pueden acceder a las variables de la función contenedora (closure).

    ```javascript
    function exterior() {
        let variableExterior = 'Exterior';
        
        function interior() {
            console.log(variableExterior); 
        }
        
        interior();
    }
        
    exterior();
    ```

8. Métodos de Objeto:

    Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto de ese objeto.

    ```javascript
    const objeto = {
        metodo: function() {
            console.log('Hola desde el método');
            }
        };
        
    objeto.metodo();
    ```

9. Funciones Asíncronas:

    Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await.

    ```javascript
    async function fetchData() {
        const response = await fetch ('<https://api.example.com/data>');
        const data = await response.json();
        console.log(data);
    }
    ```

10. Funciones Puras:

    Dado el mismo conjunto de entradas, siempre producirán el mismo resultado sin causar efectos secundarios observables.
    No dependen ni modifican estados externos.

    ```javascript
    function suma(a, b) {
        return a + b;
    }
    ```

Estas son algunas de las categorías comunes de funciones en JavaScript. Es importante comprender estas diferentes formas de definir y utilizar funciones para escribir código más claro y eficiente.

## Clase 24: Objeto window y modo estricto

En esta clases se trabaja directamente en el navegador para entender estos dos conceptos.

```javascript

function favoriteCharacter () {
    console.log(`I'm ${this.name}`)
}

const character = {
    name: 'Batman',
    age: '49'
}

favoriteCharacter() //Devuelve I'm

```

Al ejecutar esto en el navegador vemos que no nos devuelve this.name, entonces ¿cuál es el contenido de this?
Vamos a averiguarlo.

```javascript
function favoriteCharacter () {
    console.log(this)
}

favoriteCharacter() //Nos devuelve el objeto window
```

El objeto window es un objeto global que pertenece al navegador y el cuál tiene una serie de propiedades y métodos que podemos usar en nuestro proyecto en javascript e interactuar con el navegador. Un ejemplo muy común es usar el método alert().

```javascript

window.alert('Hola mundo')

//Cómo window es un objeto global no es necesario que antepongamos la palabra window y solo ejecutando el método funcionará

alert('Hola mundo') //Saldrá una ventana emergente con el mensaje Hola mundo.

```

Podemos asignarle nuevas propiedades al objeto window, veámoslo en el ejemplo anterior.

```javascript

window.name = 'Batman'

function favoriteCharacter () {
    console.log(`I'm ${this.name}`)
}

favoriteCharacter() //Nos devuelve I'm Batman
```

Javascript por defecto usa un modo de programación permisivo, en el cuál el toma la decisión de que asignar al contexto this, como en este caso, que le ha asignado el objeto window. Pero podemos nosotros hacer que javascript funcione en modo estricto y que tengamos que declarar el contexto de this en cada momento.
Este modo se llama 'use strict'

```javascript

'use strict'

window.name = 'Batman'

function favoriteCharacter () {
    console.log(this.name)
}

favoriteCharacter() //Devolverá un error indicando que no existe la propiedad name.

```

Otro ejemplo al usar 'use strict'

```javascript
//Hacer esto en el navegador

x = 5
x + 4 //Devuelve 9

//Hasta aquí usamos el modo permisivo de js, ahora activamos el modo restringido

'use strict'

z = 3 //devolverá un error de variable no declarada, con lo que nos está obligando a declarar la variable previamente. 

let z = 3
const y = 5

z + y //Devolverá 8

```

## Clase 25: Tipos de binding

Binding en JavaScript se refiere a cómo la palabra clave this está vinculada o asociada en una función. Así que, entender los diferentes tipos de “binding” es esencial para comprender cómo se comporta this en diferentes situaciones. Veamos los cinco tipos principales de “binding”:

### Implicit Binding

Ocurre cuando se invoca un método de un objeto, y this se vincula al objeto que contiene el método.

Ejemplo:

```javascript
const person = {
  name: 'Adam',
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Output: Hello, I'm Adam
```

### Explicit Binding

Ocurre cuando se usan métodos como call, apply, o bind para establecer explícitamente el valor de this.

Ejemplo:

```javascript
function greet() {
  console.log(`Hello, I'm ${this.name}`);
}

const adam = { name: 'Adam' };

greet.call(adam); // Output: Hello, I'm Adam
```

### New Binding

Ocurre cuando una función se invoca con la palabra clave new, creando así un nuevo objeto y vinculando this a ese objeto.

Ejemplo:

```javascript
function Person(name) {
  this.name = name;
}

const adam = new Person('Adam');
console.log(adam.name); // Output: Adam
```

### Lexical Binding

Ocurre cuando se utiliza this en una función dentro de otra función. En este caso, this se vincula al contexto léxico de la función exterior.

Ejemplo:

```javascript
const person = {
  name: 'Adam',
  greet: function() {
    const innerFunction = () => {
      console.log(`Hello, I'm ${this.name}`);
    };
    innerFunction();
  }
};

person.greet(); // Output: Hello, I'm Adam
```

### Window Binding

Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador).

Ejemplo (ejecutar en el navegador):

```javascript
function showName() {
  console.log(this.name);
}

window.name = 'Adam';
showName(); // Output: Adam
```

## Clase 26: Expresiones vs sentencias

En JavaScript, una sentencia es una instrucción que realiza una acción. Por ejemplo, una sentencia podría asignar un valor a una variable, ejecutar una función, o cambiar el flujo de ejecución de un programa a través de una sentencia if o un bucle for. Aquí tienes algunos ejemplos de sentencias:

```javascript
let x = 5; // Esta es una sentencia de asignación

function saludo() { // Esta es una sentencia de función
  console.log("¡Hola mundo!");
}

if (x > 0) { // Esta es una sentencia if
  console.log("x es positivo");
}
```

Por otro lado, una expresión es cualquier código que produce un valor. Las expresiones pueden ser tan simples como un número o una cadena de texto, o tan complejas como una llamada a una función que devuelve un valor. Aquí tienes algunos ejemplos de expresiones:

```javascript
5 // Esto es una expresión

"x" // Esto también es una expresión

2 + 2 // Esto es una expresión que suma dos números

saludo() // Esto es una expresión de llamada a función
```

💡 En resumen, las sentencias realizan acciones y las expresiones producen valores. Un programa en JavaScript está compuesto por una serie de sentencias, y estas sentencias pueden contener expresiones.

## Clase 27: Proyecto Crea biografías de personajes con Javascript

```javascript

//Copia y pegar aquí el código del archivo clase-modulo-funciones-constructoras.js

```

## Clase 28: Operadores de comparación

Estos son los símbolos que se usan para realizar comparaciones en operaciones lógicas:

1. == igualdad
2. === igualdad en el valor y en el tipo de dato
3. != distinto de
4. !== distinto en el valor y en el tipo de dato
5. \> mayor que
6. < menor que
7. \>= mayor igual
8. <= menor igual

Veamos algún ejemplo de uso:

```javascript

const a = 10;
const b = 20;
const c = "10";

a == b; //Devuelve false
a === c; //Devuelve false es igual en valor pero distinto en tipo
a != b; //Devuelve true
a !== c; //Devuelve true es igual en valor pero distinto en tipo
a > b; //Devuelve false
a <= b; //Devuelve true

```

## Clase 28: Operadores lógicos

Estos son los operadores lógicos.

1. && and y (Devuelve true si y solo si las dos comparaciones son true)
2. || or o (Devuelve true si alguna de las comparaciones es true)
3. ! not negación (Devuelve true si el valor es false y false si el valor es true, invierte el valor lógico)

```javascript

const a = 10;
const b = 20;
const c = "10";

a == b && a === c //devuelve un false
a != b || a == c //devuelve true
!(a === c) //devuelve un true por que la comparación es false y la negamos convirtiéndola en false

```

## Clase 29: Ejecución condicional if

if es una estructura de control que nos permite crear una condición a una pregunta, sirve para la toma de decisiones y seguir un camino u otro en el flujo de ejecución del programa.

Estructura de la condición if

if (condición) {
    bloque de código
} else {
    bloque de código
}

Esto se leería del siguiente modo, si condición se cumple ejecuto el primer bloque de código y si no (else) se ejecuta el segundo bloque de código. En algunos casos no usamos else si no hace falta.

if anidados:

if (condición) {
    bloque de código
} else if {
    bloque de código
} else {
    bloque de código
}

En este caso leemos la primera condición, si se cumple ejecutamos el primer bloque, si no se cumple, realizamos la segunda condición, si se cumple ejecutamos el segundo bloque y si no, ejecutaríamos el tercer bloque. Podemos anidar condiciones todo lo que queramos.

```javascript

let nombre = "Antonio"

if (nombre == "Antonio") {
    console.log("Hola Antonio")
} //Escribe en consola Hola Antonio

let nombre2 = "Nuria"

if (nombre2 == "Antonio") {
    console.log("Hola Antonio")
} else {
    console.log("Nombre no encontrado")
} //Escribe en consola "Nombre no encontrado"

let nombre3 = "Luna"

if (nombre2 == "Antonio") {
    console.log("Hola Antonio")
} else if (nombre2 == "Nuria") {
    console.log("Hola Nuria")
} else {
    console.log("Nombre no encontrado")
} //Escribe en consola Hola Nuria

```

## Clase 30: Proyecto Adivina el número

Vamos a crear un proyecto que se llama "Adivina el número secreto" con el que podemos practicar las estructuras de control de tipo condicional.

```javascript

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt("Adivina el número secreto entre el 1 y 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log("Adivinaste el número secreto");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número secreto es mayor");
} else {
    console.log("El número secreto es menor");
}

```

## Clase 30: Ejecución condicional: Ternario

El operador ternario es una forma más corta y concisa de escribir condicionales if-else. Se llama "ternario" porque involucra tres operandos: una condición, un resultado para true y un resultado para false.
La sintaxis del operador ternario es la siguiente:

```javascript
condición ? expresiónSiVerdadero : expresiónSiFalso
```

Primero, se evalúa la condición. Si la condición es verdadera (true), entonces se ejecuta expresiónSiVerdadero. Si la condición es falsa (false), entonces se ejecuta expresiónSiFalso.
Aquí tienes un ejemplo sencillo:

```javascript
let edad = 15;
let tipoDePersona = edad >= 18 ? "adulto" : "niño";
console.log(tipoDePersona); // Imprime: "niño"
```

En este ejemplo, la condición es edad >= 18. Si esta condición se cumple (es decir, si edad es 18 o más), entonces tipoDePersona se vuelve "adulto". Si la condición no se cumple (es decir, si edad es menor a 18), entonces tipoDePersona se vuelve "niño".

Es importante notar que el operador ternario es una expresión, lo que significa que devuelve un valor. En este caso, devuelve "adulto" o "niño", dependiendo de la condición.

El operador ternario es muy útil cuando quieres realizar asignaciones condicionales en una sola línea, pero puede ser difícil de leer si la lógica es muy compleja. En esos casos, puede ser mejor usar una estructura if-else normal.

## Clase 31: Ejecución condicional Switch

Switch es una estructura de control condicional similar a if/else if/else.

La sintaxis es la siguiente: se evalúa la expresión que dará un resultado o valor, después ese valor se compara con cada case (caso) y si devuelve true, se ejecutará el bloque de código correspondiente. En el supuesto de que ninguno de los valores devueltos por la expresión coincida se ejecutará el bloque default.

Es importante poner al final de cada bloque la instrucción break para salir del switch una vez ejecutado el bloque de código que le corresponde. En el default no es necesario.

```javascript
switch(expresión){

    case valor1:
        //bloque de código a ejecutar
        break;
    case valor2:
        //bloque de código a ejecutar
        break;
    case valorn:
        //bloque de código a ejecutar
        break;
    default:
        //bloque de código a ejecutar
}
```

Vamos a ver un ejemplo:

```javascript

let expr = "Papayas"

switch(expr){
    case "Naranjas":
        console.log("Las naranjas cuestan 1,00€ /Kg")
        break;

    case "Manzanas":
        console.log("Las manzanas cuestan 0,98€/Kg")
        break;

    case "Plátanos":
        console.log("Los plátanos cuestan 2,36€/Kg")
        break;
    
    case "Mangos": //Cuando tengamos dos casos en el que el resultado se el mismo lo indicamos así.
    case "Papayas":
        console.log("Los mangos y las papayas cuestan 3.45€/Kg")
        break;

    default:
        console.log(`Lo siento, no tenemos ${expr}`)

}

console.log("Hay algo más que necesites?");

```

## Clase 32: Bucle for

for es un tipo de bucle que nos permite iterar o repetir una serie de instrucciones un número de veces determinado.

Su sintaxis es la siguiente:

```javascript

for(variable; condición; incremento) {
    //Bloque de código a ejecutar
}

```

Ejemplo de uso:

```javascript

let list = ["eat", "sleep", "code", "repeat"];

for(let i = 0; i < list.length; i++){
    console.log(list[i])
} //Imprime en consola eat sleep code repeat


```

## Clase 33: forEach

El bucle "forEach" es una forma de bucle que se usa específicamente con arrays (listas de elementos) en JavaScript. Permite recorrer cada elemento del array y realizar una acción con ese elemento.
La sintaxis del bucle "forEach" es la siguiente:

```javascript

array.forEach((item) => {
    //código a ejecutar
})

```

ejemplo:

```javascript

let list = ["eat", "sleep", "code", "repeat"];

list.forEach((item) => {
    console.log(item);
})//Imprime en consola eat sleep code repeat

```

## Clase 34: for of

El bucle "for of" es una estructura de control que permite recorrer los elementos de objetos iterables en JavaScript, como los arrays o las cadenas de texto. A diferencia de otros bucles, el bucle "for of" te da acceso directo a los elementos individuales del objeto iterable, en lugar de su índice o clave.
La sintaxis del bucle "for of" es la siguiente:

```javascript

for of arrays, strings, [algo]

for (variable of objeto) {
    //bloque de código a ejecutar
}

```

Ejemplo:

```javascript

let canasta = ["manzana", "pera", "naranja", "uva"]

for (fruta of canasta) {
    console.log(fruta)
} //Imprime todas las frutas de la lista canasta.

```

## Clase 35: for in

El bucle "for in" es una estructura de control en JavaScript que te permite recorrer las propiedades de un objeto. Esto es útil cuando quieres realizar una acción para cada propiedad en un objeto. Solo permite recorrer objetos enumerables, no iterables.
La sintaxis del bucle "for in" es la siguiente:

```javascript

/*
for in ---> objeto enumerable
que tiene
propiedades = valor

array, string son listas ---> objetos iterables
que tienen
item

for (variable in objeto) {
    //Código a ejecutar
}
*/
```

Ejemplo:

```javascript

const listaDeCompra = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompra) {
    console.log(fruta)
}

for (fruta in listaDeCompra) { //la variable fruta es un valor numérico que indica el indice de la propiedad
    console.log(`${fruta} : ${ListaDeCompra[fruta]}`); //Nos devuelve la propiedad indicada en el indice y después el valor de dicha propiedad.
}

```

## Clase 36: Bucle while

while es un bucle condicional, se repetirán todas las instrucciones en bloque de código mientras se cumpla la condición.
Hay que tener cuidado con la condición para que se cumpla en algún momento, ya que podríamos entrar en un bucle infinito.

```javascript

while(condicion) {
    //bloque de código a ejecutar.
    //Se puede detener con break - continue
}

```

Ejemplo:

```javascript

let contador = 10;

while (contador < 10){
    console.log(contador)
    contador ++;
} //Imprime 0, 1, 2,,,9

```

Cuando usar for y while

A veces podría parecer confuso o podríamos preguntarnos ¿Para qué me sirve while cuando ya tenemos for?

Es muy útil usar for cuando sabes exactamente cuantas veces tienes que iterar o la cantidad límite, por ejemplo la cantidad de elementos de un array o un número específico que tengamos en mente.

El Loop while es muy útil precisamente cuando no tenemos un límite en mente.

(Ejemplo que puso alguien de la comunidad): Un cocinero (a menos que sea muy profesional) no va a saber en qué minuto y segundo exacto se va a terminar de cocinar bien una comida (por lo que no se va a poner una alarma a un minuto exacto, sino que estará atento o usará un temporizador).

De la misma forma cuando no tenemos un número exacto, es muy útil usar while, ya que el propio programa se encargará de evaluar cuando la condición se rompa (por ejemplo, un bloque de código que esté corriendo hasta que una variable cambie de forma inesperada o que no esperemos que cambie en un buen tiempo)

## Clase 37: do while

do while es un bucle condicional similar a while, la diferencia principal es que con while primero se ejecuta la condición y si esta se cumple ejecutamos el bloque de código. Con do while, primero se ejecuta el bloque de código y después comprueba la condición. Con do while nos aseguramos que al menos una vez se ejecuta el bloque de código.

Sintaxis:

```javascript

do {
    //bloque de código
} while(condición)

```

Ejemplo:

```javascript

let contador = 0

do {
    console.log(contador)
    contador ++
} while (contador < 10)
//Devuelve 0, 1, , , 9 

```

## Clase 38: Reto Juego Adivina la palabra

***Archivo reto-adivina-la-palabra.js.***

Instrucciones:

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

- El juego debe tener una palabra oculta.
- El juego puede dar 1 pista de la palabra.
- El usuario debe ingresar una suposición.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos (3)
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.

## Clase 39: Introducción a los Arrays en Javascript

En JavaScript, un array es un tipo de objeto que se utiliza para almacenar datos ordenados. Puedes declarar un array de varias formas. Aquí tienes algunas de las formas más comunes de declarar arrays en JavaScript:

Formas de construir un Array:

1. Constructor de objeto.

    Con new Array() o Array()

    ```javascript
    const frutas = Array("Plátano", "manzana", "Naranja");
    console.log(frutas)
    //Devuelve ["Plátano", "manzana", "Naranja"]

    //Si creamos un array pero metiendo un solo número, lo que nos va a crear es un array vacío con la cantidad de elementos indicados por el número.

    const soloUnNumero = Array(10)
    console.log(soloUnNumero)
    //Devuelve un array vacío de 10 elementos.

    const number = Array (1, 2, 3, 4, 5)
    console.log(number)
    //Devuelve [1, 2, 3, 4, 5]
    ```

2. Array literal syntax (Creación de un array con sintaxis literal)

    ```javascript
        //Notación de corchetes
        const unSoloNumero = [4]
        console.log(unSoloNumero) //Devuelve [4]

        //Se puede declarar vacío y después inicializarlo con valores.
        const arrayVacio = []
        console.log(arrayVacio) //Devuelve []

        const deportes = ["Futbol", "Tenis", "Ski"]
        console.log(deportes) //Devuelve ["Futbol", "Tenis", "Ski"]

        //Notación literal con elementos de diferentes tipos.
        const arrayMixto = [
            'Harina',
            true,
            2,
            {
                ingrediente: 'leche',
                cantidad: '1 taza'
            
            },
            false
        ]
        console.log(arrayMixto) //Devuelve todo el contenido del array ['Harina', true, 2, {ingrediente: 'leche', cantidad: '1 taza'}, false]

    ```

3. Spread Operator (...): Puedes usar el operador de propagación para combinar arrays o crear una copia de uno existente.

    ```javascript
    var array1 = [1, 2, 3];
    var array2 = [...array1];

    //También puedes usar el spread operator para agregar elementos a un array existente:

    
    var array1 = [1, 2, 3];
    var array2 = [...array1, 4, 5];
    ```

4. Arrays Unidimensionales:

    Son la forma más básica de array.

    Se declaran utilizando corchetes [] y pueden contener cualquier tipo de dato, como números, cadenas, objetos, etc.

    ```javascript
    let miArray = [1, 2, 3, "cuatro", true];
    ```

5. Arrays Multidimensionales:

    Son arrays que contienen otros arrays como elementos.

    Pueden representar matrices o estructuras de datos más complejas.

    ```javascript
    let matriz = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    ```

6. Arrays Asociativos (o Mapas):

    Aunque JavaScript no tiene un tipo de datos específico llamado "array asociativo", puedes usar objetos para lograr una funcionalidad similar.

    Los objetos permiten asignar claves a valores, lo que es similar a un array asociativo.

    ```javascript
    let miObjeto = {
      nombre: "Juan",
      edad: 25,
      ciudad: "Ejemploville"
    };
    ```

7. Arrays Tipados:

    Introducidos en ECMAScript 6, los arrays tipados están asociados con tipos específicos de datos.

    Estos arrays están destinados principalmente para operaciones numéricas y de bytes.

    ```javascript
    let arrayNumerico = new Int32Array([1, 2, 3, 4]);
    ```

8. Arrays de Objetos:

    Puedes tener un array que contenga objetos como elementos.

    ```javascript
    let personas = [
      { nombre: "Ana", edad: 30 },
      { nombre: "Carlos", edad: 25 },
      { nombre: "Elena", edad: 35 }
    ];
    ```

9. Arrays Vacíos:

    Puedes crear un array vacío y luego agregar elementos dinámicamente.

    ```javascript
    let arrayVacio = [];
    arrayVacio.push("elemento1");
    arrayVacio.push("elemento2");
    ```

Accediendo a los elementos de un Array:

Lo hacemos por su indice, este comienza desde el 0 que corresponde al elemento 1 (primer)

```javascript

    const primeraFruta = frutas[0]
    console.log(primeraFruta) //Devuelve Plátano

```

Para saber el tamaño de un array usamos la propiedad length

```javascript

const numeroDeFrutas = frutas.length
console.log(numeroDeFrutas) //Devuelve la cantidad de elementos que hay en un Array

```

## Clase 40: Mutabilidad e Inmutabilidad de los Arrays

Como un array es un objeto, los objetos tienen métodos y con los métodos podemos cambiar y realizar acciones con los arrays. Con algunos métodos podemos intervenir en la mutabilidad e inmutabilidad de un array.

Ejemplo:

```javascript

const frutas = Array("Plátano", "manzana", "Naranja");
console.log(frutas)

//Mutabilidad

frutas.push("Sandía")
console.log(frutas) //Devuelve ["Plátano", "manzana", "Naranja", "Sandía" ]

//Inmutabilidad

const newFrutas = frutas.concat(["Uvas", "Kiwi"])
console.log(frutas) //Devuelve ["Plátano", "manzana", "Naranja", "Sandía" ]
console.log(newFrutas) //Devuelve ["Plátano", "manzana", "Naranja", "Sandía", "Uvas", "Kiwi" ]

//Comprobar si un Array es un Array real

const isArray = Array.isArray(frutas)
console.log(isArray) //Devuelve true

```

Ejemplo práctico: suma de todos los elementos de un Array numérico.

```javascript

const arrayDeNumeros = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < arrayDeNumeros.length; i++ ) {
    sum += arrayDeNumeros[i]
}
console.log(sum) //Devuelve 15

```

## Clase 41: Modificación básica del final de un Array con push() y pop()

El método push() Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

El método pop() Elimina el último elemento de un array y delvuelve el elemento que hay eliminado.

```javascript

    //Métodos que modifican el array original (mutabilidad)
    //push()

    const paises = ['España', 'Italia', 'Francia']
    const nuevosPaises = paises.push('Portugal', 'Alemania')

    console.log(paises) //Devuelve ['España', 'Italia', 'Francia', 'Portugal', 'Alemania']
    console.log(nuevosPaises) //Devuelve 5
    
    //pop()

    const borrarPaises = paises.pop()
    console.log(paises) //Devuelve ['España', 'Italia', 'Francia', 'Portugal']
    console.log(borrarPaises) //Devuelve Alemania

```

## Clase 42: Ejercicio Stack de libros

En esta clase vamos a realizar un Stack de libros.

Administrar una pila

Cree un programa que simule una pila utilizando los métodos push y pop. La pila debe almacenar una colección de libros. Los usuarios pueden realizar las siguientes acciones:

1. Agregue un libro nuevo a la parte superior de la pila.
2. Retire el libro de la parte superior de la pila.
3. Muestre la pila actual de libros.

Implemente un bucle que permita a los usuarios interactuar con la pila hasta que decidan salir.

*Archivo ejercicio_pila_libros.js.*

## Clase 43: Modificación del inicio del Array con shift() y unshift()

Son métodos que modifican el elemento inicial de un array, eliminando el primero con shift() o añadiendo uno o más elementos al inicio de nuestro array unshift().

Ejemplo:

```javascript
//shift()
const colores = ['Amarillo', 'Rojo', 'Verde'];
let colorBorrado = color.shift();

console.log(colores);
console.log(colorBorrado);

//unshift()
const addColor = color.unshift('Verde', 'Violet', 'Pink');

console.log(colores);
console.log(addColor);

```

Ahora haremos un ejercicio.

## Mantenimiento de una Playlist

Imagina que estás creando una aplicación de música, y quieres crear una función que mantenga una playlist. Tu función será coger una lista de canciones, borrar la primera canción usando shift(), añadir una nueva canción al inicio usando unshift() y devolviendo la lista de reproducción actualizada.

*Archivo ejercicio-playlist.js.*

## Clase 44: Modificación avanzada con splice(), reverse(), soft(), fill()

Modificación avanzada de arrays con splice(), reverse(), sort() y fill()

Vamos a aprender sobre algunos métodos más complejos para manipular arrays en JavaScript. Es importante dominar estos métodos, porque son comunes en las entrevistas. 👀

### Método Splice()

El método splice() te permite agregar o quitar elementos de un array en cualquier posición. Aquí tienes un ejemplo:

```javascript
let frutas = ["manzana", "banana", "mango"];
console.log(frutas); // Imprime: ["manzana", "banana", "mango"]

// Usamos splice() para quitar "banana" y agregar "pera" y "melón" en su lugar
frutas.splice(1, 1, "pera", "melón");
console.log(frutas); // Imprime: ["manzana", "pera", "melón", "mango"]
```

En este ejemplo, el primer número que pasamos a splice() es el índice donde queremos empezar a cambiar el array (1 en este caso, que corresponde a "banana"). El segundo número es cuántos elementos queremos quitar (1 en este caso, así que solo quitamos "banana"). Después, todos los argumentos que siguen son los elementos que queremos agregar.

### Método Reverse()

El método reverse() simplemente invierte el orden de los elementos en un array. Mira este ejemplo:

```javascript
let frutas = ["manzana", "pera", "mango"];
console.log(frutas); // Imprime: ["manzana", "pera", "mango"]

// Usamos reverse() para invertir el orden del array
frutas.reverse();
console.log(frutas); // Imprime: ["mango", "pera", "manzana"]
```

En este ejemplo, reverse() cambia el orden del array frutas para que "mango" sea el primer elemento y "manzana" sea el último.

### Método Sort()

El método sort() organiza los elementos de un array en orden alfabético. Aquí tienes un ejemplo:

```javascript
let frutas = ["mango", "pera", "manzana"];
console.log(frutas); // Imprime: ["mango", "pera", "manzana"]

// Usamos sort() para ordenar el array alfabéticamente
frutas.sort();
console.log(frutas); // Imprime: ["manzana", "mango", "pera"]
```

En este ejemplo, sort() reorganiza el array frutas para que "manzana" sea el primer elemento y "pera" sea el último.

#### Método Sort() con números

El método sort() también se puede utilizar con arrays de números. Sin embargo, es importante tener en cuenta que sort() convierte los números a strings y luego los compara según las reglas de ordenación de strings. Esto puede resultar en un ordenamiento que no es numérico. Aquí tienes un ejemplo:

```javascript
let numeros = [10, 5, 100, 2, 50];
console.log(numeros); // Imprime: [10, 5, 100, 2, 50]

// Usamos sort() para ordenar el array
numeros.sort();
console.log(numeros); // Imprime: [10, 100, 2, 5, 50]
```

En este ejemplo, puedes ver que sort() no ordena los números de menor a mayor, sino que los ordena como si fueran strings, lo que produce un resultado inesperado. Para ordenar un array de números de manera numérica, tendrías que proporcionar una función de comparación a sort().

¿Por qué sucede esto con sort() y los números?

El método sort() de JavaScript, cuando se utiliza sin argumentos en un array de números, convierte estos números a strings y los compara en base a su valor Unicode, no en base a su valor numérico. Esto se traduce en un ordenamiento alfabético en lugar de numérico. Aquí te explico paso a paso cómo sucede esto:

   1. Primero, sort() convierte cada número del array a un string. Por ejemplo, si tu array original es [10, 5, 100, 2, 50], después de la conversión a strings tendrías un array que se ve así: ["10", "5", "100", "2", "50"].

   2. Luego, sort() compara cada par de elementos en el array convertido a string uno a uno. La comparación se basa en la posición de los caracteres en la tabla Unicode, no en su valor numérico. Como resultado, los números se ordenan como si fueran strings.

   3. En la tabla Unicode, los números se ordenan de izquierda a derecha. Es decir, sort() primero mira el primer carácter de cada string. Si el primer carácter es igual en ambos strings, entonces mira el siguiente carácter, y así sucesivamente.

   4. En el caso de nuestro array de ejemplo, al comparar "10" y "100", por ejemplo, "10" viene antes que "100" porque el primer carácter que difiere en los dos strings (el tercero) es inexistente en "10", y cualquier string es menor que un string que lo tiene como prefijo seguido de más caracteres.

   5. Como resultado, el array ordenado se ve así: ["10", "100", "2", "5", "50"].

Para ordenar un array de números de manera numérica, tendrías que proporcionar una función de comparación a sort(). Esta función toma dos elementos del array a la vez, los compara y determina su orden en base a si el resultado de la comparación es negativo, cero o positivo.

#### Método Sort() con función de comparación

Para ordenar correctamente un array de números en JavaScript, necesitamos proporcionar una función de comparación a sort(). Esta función define el orden de la clasificación. Aquí tienes un ejemplo:

```javascript
let numeros = [10, 5, 100, 2, 50];
console.log(numeros); // Imprime: [10, 5, 100, 2, 50]

// Usamos sort() con una función de comparación para ordenar el array
numeros.sort((a, b) => a - b);
console.log(numeros); // Imprime: [2, 5, 10, 50, 100]
```

En este ejemplo, la función de comparación (a, b) => a - b ordena los números de menor a mayor. Si a - b es menor que cero, sort() ordena a antes que b. Si a - b es mayor que cero, sort() ordena b antes que a. Si a - b es igual a cero, a y b se dejan sin cambios respecto a su orden en el array original (pero se ordenan con respecto a todos los elementos diferentes).

### Método Fill()

El método fill() cambia todos los elementos en un array por un valor estático. Aquí tienes un ejemplo:

```javascript
let frutas = ["manzana", "pera", "mango"];
console.log(frutas); // Imprime: ["manzana", "pera", "mango"]

// Usamos fill() para cambiar todos los elementos por "naranja"
frutas.fill("naranja");
console.log(frutas); // Imprime: ["naranja", "naranja", "naranja"] 
```

En este ejemplo, fill() cambia todos los elementos de frutas por "naranja".

Nota: mirar la documentación completa de estos métodos para situaciones más complejas y detalladas.

## Clase 45: Juego de Cartas

Implementación del juego de cartas

Imagina que estás creando un juego de cartas sencillo. Tiene una matriz que representa una baraja de cartas y desea realizar las siguientes operaciones:

1. Barajar el mazo: reorganiza aleatoriamente el orden de las cartas en el mazo.

2. Repartir cartas: reparte una cantidad específica de cartas a los jugadores desde la parte superior del mazo.

Este ejercicio implica utilizar el método splice() para unir la baraja y repartir cartas.

*Archivo: reto_juego_cartas.js.*

## Clase 46: Iteración con map() y forEach()

Iteración con map() y forEach()

map() y forEach() son dos métodos que se utilizan en JavaScript para recorrer (o iterar) sobre los elementos de un array. Aquí te explicaré cómo funcionan.

### Método forEach()

forEach() es un método que ejecuta una función para cada elemento en un array. Aquí tienes un ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero * 2);
});
```

En este ejemplo, forEach() recorre cada número en el array numeros y ejecuta la función que le pasamos como argumento. Esta función toma un número y lo imprime multiplicado por 2. Por lo tanto, este código imprimirá los números 2, 4, 6, 8, 10.

### Método map()

Por otro lado, map() también ejecuta una función para cada elemento en un array, pero a diferencia de forEach(), map() devuelve un nuevo array con los resultados. Aquí tienes un ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];

let dobles = numeros.map(function(numero) {
  return numero * 2;
});

console.log(dobles); // Imprime: [2, 4, 6, 8, 10]
```

En este ejemplo, map() recorre cada número en el array numeros y ejecuta la función que le pasamos como argumento. Esta función toma un número y devuelve ese número multiplicado por 2. map() recoge todos estos resultados y los guarda en un nuevo array, que se almacena en la variable dobles. Por lo tanto, dobles es un nuevo array que contiene los números 2, 4, 6, 8, 10.

Veamos un ejercicio práctico:

```javascript

/*
Crear un programa que tome un array de temperaturas en Fahrenheit como entrada y convierta estas temperaturas a Celsius usando la formula:
C = 5/9 * (F - 32)
*/

const tempFahrenheit = [32, 68, 95, 104, 212];

const tempCelsius = tempFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32));

console.log(tempFahrenheit);
console.log(tempCelsius);

```

```javascript
/*
Ejercicio, crea un programa que tome todos los elementos de un array y los sume devolviendo el total. 

*/

const numeros = [5, 78, 3, 90, 12, 8, 34, 87];
let suma = 0;

numeros.forEach(numero => {
    sum += numero;
});

console.log(numeros);
console.log(suma);

```

## Clase 47: Filtrado y reducción con filter() y reduce()

Filtrado y reducción con filter() y reduce()

### Método Filter()

El método filter() te permite crear un nuevo array con todos los elementos que pasen una prueba (o, en términos de programación, una "función de callback"). Veamos un ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];

let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // Imprime: [2, 4]
```

En este ejemplo, filter() recorre cada número en el array numeros y ejecuta la función que le pasamos como argumento. Esta función devuelve true si el número es par (es decir, si el número dividido por 2 no tiene residuo) y false si no lo es. filter() recoge todos los números para los que la función devuelve true y los guarda en un nuevo array, que se almacena en la variable numerosPares. Por lo tanto, numerosPares es un nuevo array que contiene los números 2 y 4.

### Método Reduce()

El método reduce() aplica una función a un acumulador y a cada elemento de un array (de izquierda a derecha) para reducirlo a un solo valor. Echemos un vistazo a un ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(suma); // Imprime: 15
```

En este ejemplo, reduce() utiliza una función y un valor inicial de 0 (el segundo argumento que pasamos a reduce()) para sumar todos los números en el array numeros. La función toma dos argumentos: el "acumulador" (que es el resultado de la operación hasta ahora) y el "número" (que es el elemento actual del array). Para cada número en el array, sumamos el acumulador y el número, y luego devolvemos el resultado. Este resultado se convierte en el nuevo acumulador para la siguiente iteración. Al final de todas las iteraciones, reduce() devuelve el acumulador, que en este caso es la suma de todos los números en el array, y la almacena en la variable suma. Por lo tanto, suma es 15, que es la suma de todos los números en el array numeros.

Método Reduce() para contar palabras repetidas

El método reduce() también puede ser utilizado para contar la frecuencia de palabras en un array. Aquí tienes un ejemplo:

```javascript
let palabras = ["manzana", "banana", "manzana", "banana", "naranja", "manzana"];

let conteo = palabras.reduce(function(acumulador, palabra) {
  if (palabra in acumulador) {
    acumulador[palabra]++;
  } else {
    acumulador[palabra] = 1;
  }
  return acumulador;
}, {});

console.log(conteo); // Imprime: { manzana: 3, banana: 2, naranja: 1 }
```

En este ejemplo, la función que pasamos a reduce() toma dos argumentos: el "acumulador" (que es el objeto donde almacenamos el conteo de palabras) y la "palabra" (que es el elemento actual del array).

Si la palabra ya existe como una propiedad en el acumulador, incrementamos su valor. Si no, la agregamos al acumulador con un valor inicial de 1.
Al final, el acumulador contiene el conteo de todas las palabras en el array, y lo almacenamos en la variable conteo. Por lo tanto, conteo es un objeto que contiene el conteo de todas las palabras en el array.

## Clase 48: Ejercicio Calificación promedio aprobados

Promedio de calificaciones aprobatorias

Cree un programa que tome una serie de calificaciones como entrada y calcule el promedio solo para las calificaciones aprobatorias (mayor o igual a 70).

*Archivo: ejercicio_promedio_aprobados.js.*

## Clase 49: Búsqueda de elementos con find() y findIndex()

Búsqueda de elementos con find() y findIndex()

### Método Find()

El método find() se utiliza para buscar un elemento específico en un array. Este método recorre el array, elemento por elemento, hasta encontrar el primer elemento que cumpla una condición dada. Si no encuentra ningún elemento que cumpla la condición, find() devuelve undefined.
Aquí tienes un ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5, 6];

let numeroBuscado = numeros.find(function(numero) {
  return numero > 3;
});

console.log(numeroBuscado); // Imprime: 4
```

En este ejemplo, find() recorre el array numeros y devuelve el primer número que es mayor que 3. Por lo tanto, numeroBuscado es 4.

### Método FindIndex()

El método findIndex() es similar a find(), pero en lugar de devolver el elemento que cumple la condición, devuelve el índice de ese elemento. Si no encuentra ningún elemento que cumpla la condición, findIndex() devuelve -1.
Aquí tienes un ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5, 6];

let indiceBuscado = numeros.findIndex(function(numero) {
  return numero > 3;
});

console.log(indiceBuscado); // Imprime: 3
```

En este ejemplo, findIndex() recorre el array numeros y devuelve el índice del primer número que es mayor que 3. Por lo tanto, indiceBuscado es 3.

Ejercicio:

#### Programa de verificación de ganadores de una rifa

En este programa podrás verificar si una persona se encuentra entre la lista de ganadores de un sorteo. Simplemente ingrese el nombre o el número del boleto y el programa verificará y mostrará la información del ganador.

*Archivo: ejercicio_verificar_premio.js.*

## Clase 50: Ejercicio Análisis de transacciones

Análisis de transacciones

Imagine que tiene una lista de transacciones financieras y desea realizar varias operaciones de procesamiento de datos. Utilice las siguientes instrucciones como guía para completar el ejercicio:

1. Calcular el saldo total: utilice el método reduce() para calcular y mostrar el saldo total de todas las transacciones.

2. Encuentre la transacción más grande (ingreso o gasto): utilice el método reduce() para encontrar la transacción con el monto más grande (ya sea ingreso o gasto) y muéstrela en la consola.

3. Filtrar Transacciones de Compra: Utilice el método filter() para obtener y mostrar en la consola solo las transacciones de compra (con valores negativos).

4. Buscar una transacción por descripción: utilice el método find() para buscar y mostrar en la consola una transacción específica por su descripción.

5. Encuentre el índice de transacción por monto: emplee el método findIndex para buscar y mostrar en la consola el índice de una transacción específica por su monto.

6. Actualizar descripciones de transacciones: utilice el método forEach() para actualizar las descripciones de las transacciones. Agregue el prefijo "Gastos: " a transacciones con valores negativos e "Ingresos: " a transacciones con valores positivos. Muestra las transacciones de actualización en la consola. Recuerde adaptar y combinar estas operaciones según sea necesario.

*Archivo: ejecicio_analisis_transaccion.js.*

## Clase 51: Unir y entrelazar con concat(), spread operator y join()

### Método Concat()

El método ***concat()*** se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array. Tenemos dos formas de hacer esta concatenación.

Concatenar dos arrays.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayUnido = array1.concat(array2);

console.log(arrayUnido); // Imprime: [1, 2, 3, 4, 5, 6]
```

En este ejemplo, hemos unido ***array1*** y ***array2*** en un nuevo array llamado ***arrayUnido***.

Concatenar dos o más arrays.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let arrayUnido = [].concat(array1, array2, array3);

console.log(arrayUnido) // Imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Spread Operator

El Spread Operator, representado por tres puntos ***...***, se utiliza para expandir elementos iterables en un lugar donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de array), o una expresión de objeto en lugares donde se esperan cero o más pares clave-valor (para literales de objeto).

```javascript
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];

console.log(array2); // Imprime: [1, 2, 3, 4, 5, 6]
```

En este ejemplo, hemos utilizado el operador Spread para "expandir" el ***array1*** dentro del ***array2***.

Veamos el Spread Operator (expandir) en más profundidad. 👀

Para explicar el ***spread*** vamos a crear una función muy sencilla e ilustrar el ejemplo. Dicha función se llamará ***debug()*** y recibirá un parámetro ***param***, el cuál se imprimirá por consola mediante un ***console.log()***:

```javascript
function debug(param) {
  console.log(param);
}

// O igual que:
const debug = (param) => console.log(param);
```

Como ves, muy sencillo. Sin embargo, vamos a hacer un pequeño cambio, primero en el ***param*** que pasamos por parámetro a la función, y luego en otro ejemplo, en el ***param*** que utilizamos en el ***console.log()***, en el cuerpo de la función.
En primer lugar, colocaremos los ***...*** en el ***param*** del ***console.log()***:

```javascript
const debug = (param) => console.log(...param); // ... Expande (o desestructurar) lo que te pasemos como argumento.
const array = [1, 2, 3, 4, 5];
debug(array); // Aquí pasamos como argumento el array.

// Consola imprime: 1 2 3 4 5
```

Analicemos lo que ha ocurrido. Le hemos pasado un array de 5 elementos a la función debug() la cuál ha desestructurado el array y lo ha expandido en elementos individuales (observa como lo devuelve).

#### Reestructuración de arrays con Spread Operator

Aprovechando estas características que hemos visto de desestructuración, también podríamos aprovecharlas para reestructurar un array y recrear arrays. Veámoslo con un ejemplo.

Tenemos un array de 2 elementos [3, 4] y queremos aprovecharlo para crear un nuevo array del 1 al 5. Vamos a hacer uso de la desestructuración para reaprovecharlo:

```javascript
const pair = [3, 4];

// Usando desestructuración + spread
const complete = [1, 2, ...pair, 5];  // [1, 2, 3, 4, 5]

// Sin usar desestructuración
const complete = [1, 2, pair, 5];     // [1, 2, [3, 4], 5]
```

En este caso, tendríamos que complete es el nuevo array [1, 2, 3, 4, 5] que buscábamos si usamos la desestructuración, pero ten en cuenta que si no utilizáramos el ... previo al pair, conseguiríamos algo muy diferente: [1, 2, [3, 4], 5].
Estos ejemplos del Spread Operator … los obtuve la página de Manz (<https://manz.dev/>). Les recomiendo que vayan a darle un vistazo, tiene cosas muy buenas y bien explicadas. 🫡

Desestructuración de arrays - Javascript en español (<https://lenguajejs.com/javascript/arrays/desestructuracion-arrays/#spreadrest>).

### Método join()

El método ***join()*** en JavaScript se utiliza para concatenar los elementos de un array en una cadena. Puedes especificar un separador que se colocará entre los elementos concatenados. Si no se proporciona un separador, por defecto se usa la coma ***(,)***.

```javascript

let cadenaArray = ['H', 'O', 'L', 'A'];
let stringConJoin = cadenaArray.join(''); //Especificamos el separador, en este caso comillas simples para indicar que no usaremos ninguno.

console.log(stringConJoin) // Imprime: 'Hola'
```

## Clase 52: Verificación y evaluación con every() y some()

### Método Every()

El método every() se utiliza para verificar si todos los elementos de un array cumplen con una condición dada. Este método devuelve un valor booleano, es decir, true o false.
Por ejemplo, si tienes un array de números y quieres verificar si todos los números son mayores que 10, puedes usar el método every():

```Javascript
let numeros = [20, 30, 40, 50];

let todosMayoresA10 = numeros.every(function(numero) {
  return numero > 10;
});

//Con Arrow Function
/*
let todosMayoresA10 = numeros.every( numero => numero > 10);
*/

console.log(todosMayoresA10); // Imprime: true
```

En este ejemplo, como todos los números en el array numeros son mayores que 10, el método every() devuelve true.

### Método Some()

El método some() es similar al método every(), pero en lugar de verificar si todos los elementos cumplen con una condición, verifica si al menos un elemento cumple con la condición. Este método también devuelve un valor booleano.
Por ejemplo, si tienes el mismo array de números y quieres verificar si al menos un número es mayor que 40, puedes usar el método some():

```javascript
let numeros = [20, 30, 40, 50];

let algunoMayorA40 = numeros.some(function(numero) {
  return numero > 40;
});

//Con Arrow Function
/*
let algunoMayorA40 = numeros.some(numero => numero > 40);
*/

console.log(algunoMayorA40); // Imprime: true
```

En este ejemplo, como al menos un número en el array numeros es mayor que 40 (en este caso, 50), el método some() devuelve true.

## Clase 53: Métodos de búsqueda con includes(), indexOf(), lastIndexOf()

En esta clase veremos métodos de búsqueda en arrays.

### método includes()

En JavaScript, el método includes() se utiliza para verificar si un array contiene un elemento específico. Devuelve true si el elemento está presente y false si no lo está.

```javascript
// Definimos un array de números
const numbers = [1, 2, 3, 4, 5];

// Utilizamos includes() para verificar si el número 3 está presente en el array
const result1 = numbers.includes(3);
console.log(result1);
```

1. const numbers = [1, 2, 3, 4, 5];: Creamos un array llamado numbers que contiene los números del 1 al 5.
2. const result1 = numbers.includes(3);: Utilizamos el método includes() para verificar si el número 3 está presente en el array numbers. El resultado de esta operación se almacena en la variable result1.
3. console.log(result1);: Imprimimos el resultado en la consola. En este caso, se imprimirá true ya que el número 3 está presente en el array.

```javascript
// Utilizamos includes() para verificar si el número 8 está presente en el array
const result2 = numbers.includes(8);
console.log(result2);
```

1. const result2 = numbers.includes(8);: Utilizamos nuevamente el método includes() para verificar si el número 8 está presente en el array numbers. El resultado se almacena en la variable result2.
2. console.log(result2);: Imprimimos el resultado en la consola. En este caso, se imprimirá false ya que el número 8 no está presente en el array.

### Método indexOf()

En JavaScript, el método indexOf() se utiliza para buscar la primera aparición de un elemento en un array y devuelve el índice de ese elemento. Si el elemento no se encuentra en el array, devuelve -1.

```javascript
// Definimos un array de frutas
const fruits = ['apple', 'cherry', 'grape', 'mango'];

// Utilizamos indexOf() para buscar el índice de la primera aparición de 'grape' en el array
const index1 = fruits.indexOf('grape');
console.log(index1);
```

1. const fruits = ['apple', 'cherry', 'grape', 'mango'];: Creamos un array llamado fruits que contiene cuatro frutas: 'apple', 'cherry', 'grape' y 'mango'.
2. const index1 = fruits.indexOf('grape');: Utilizamos el método indexOf() para buscar el índice de la primera aparición de la cadena 'grape' en el array fruits. El resultado se almacena en la variable index1.
3. console.log(index1);: Imprimimos el resultado en la consola. En este caso, si 'grape' está presente en el array, se imprimirá el índice correspondiente (en este ejemplo, el índice de 'grape' es 2, ya que los índices en JavaScript comienzan desde 0). Si 'grape' no está presente, se imprimirá -1.

### Método lastIndexOf()

En JavaScript, el método lastIndexOf() se utiliza para buscar la última aparición de un elemento en un array y devuelve el índice de esa última aparición. Si el elemento no se encuentra en el array, devuelve -1.

```javascript
// Definimos un array de números
const numbersAgain = [2, 4, 6, 8, 10, 6];

// Utilizamos lastIndexOf() para buscar el índice de la última aparición de 6 en el array
const lastIndex1 = numbersAgain.lastIndexOf(6);
console.log(lastIndex1);
```

1. const numbersAgain = [2, 4, 6, 8, 10, 6];: Creamos un array llamado numbersAgain que contiene varios números, incluyendo dos instancias del número 6.
2. const lastIndex1 = numbersAgain.lastIndexOf(6);: Utilizamos el método lastIndexOf() para buscar el índice de la última aparición del número 6 en el array numbersAgain. El resultado se almacena en la variable lastIndex1.
3. console.log(lastIndex1);: Imprimimos el resultado en la consola. En este caso, si hay más de una aparición del número 6 en el array, se imprimirá el índice de la última aparición (en este ejemplo, el índice de la segunda instancia del 6).

```javascript
// Utilizamos lastIndexOf() para buscar el índice de la última aparición de 3 en el array
const lastIndex2 = numbersAgain.lastIndexOf(3);
```

1. const lastIndex2 = numbersAgain.lastIndexOf(3);: Utilizamos nuevamente lastIndexOf() para buscar el índice de la última aparición del número 3 en el array numbersAgain. El resultado se almacena en la variable lastIndex2.

## Clase 54: Ejercicio Encontrando los índices

### Encontrar Índices de Subcadena

Dado un array de cadenas de texto y una cadena de texto objetivo, escribe una función para
determinar si la cadena objetivo está presente en el array. Si está presente, devuelve el índice de la
primera ocurrencia y el índice de la última ocurrencia; de lo contrario, devuelve -1.

*Archivo ejercicio_busqueda_por_indice.js.*

## Clase 55: Crear copias con slice()

### Método Slice()

El método slice() se utiliza para copiar una sección de un array a otro array, sin modificar el array original.
Para entender cómo funciona, imagina un array como una lista de elementos:

```javascript
let frutas = ["manzana", "banana", "naranja", "limón", "uva"];
```

Si quisieras copiar un subconjunto de este array, por ejemplo, solo "banana" y "naranja", podrías usar el método slice().
El método slice() acepta dos argumentos: el primer índice del elemento que quieres copiar y el índice donde terminar la copia (sin incluir este último índice). En JavaScript, los índices de los arrays comienzan en 0, por lo que "banana" está en el índice 1 y "naranja" está en el índice 2.
Aquí está el código para copiar "banana" y "naranja" a un nuevo array:

```javascript
let algunasFrutas = frutas.let algunasFrutas = frutas.slice(1, 3);slice(1, 3);

console.log(algunasFrutas); // Imprime: ["banana", "naranja"]
```

Como puedes ver, slice() ha copiado los elementos del índice 1 (inclusive) al índice 3 (exclusivo) en un nuevo array.
Si solo proporcionamos un argumento a slice(), copiará desde ese índice hasta el final del array. Por ejemplo:

```javascript
let masFrutas = frutas.slice(2);

console.log(masFrutas); // Imprime: ["naranja", "limón", "uva"]
```

En este caso, slice() ha copiado desde el índice 2 ("naranja") hasta el final del array.
Importante: recuerda que slice() no modifica el array original. Si volvemos a imprimir el array frutas, veremos que sigue intacto:

```javascript
console.log(frutas); // Imprime: ["manzana", "banana", "naranja", "limón", "uva"]
```

También podemos usar slice() con números negativos, si hacemos esto lo que hace es contar a partir del último elemento del array.

```javascript
let algunasFrutas = frutas.slice(-2);

console.log(algunasFrutas); //Imprime: ['limón', 'uva']
```

En resumen, slice() es una forma útil de hacer una copia de parte de un array (o todo si no se especifican argumentos) sin alterar el array original.

## Clase 56: Spread Operator: casos de uso

El operador de propagación "Spread Operator" representado por tres puntos ... es una herramienta muy útil en JavaScript. Se utiliza para "expandir" o "desplegar" elementos de un array o de un objeto. Aquí te dejo algunos ejemplos para que puedas entender mejor cómo funciona:
🔽🔽🔽🔽

1. Copiar un array

    ```javascript
    let frutasOriginales = ['manzana', 'banana', 'naranja'];
    let copiaFrutas = [...frutasOriginales];

    console.log(copiaFrutas); // Imprime: ['manzana', 'banana', 'naranja']
    ```

    En este ejemplo, hemos creado una copia exacta del array frutasOriginales. Por la forma en que JavaScript maneja los objetos y arrays, si simplemente asignáramos copiaFrutas = frutasOriginales, ambos arrays apuntarían al mismo conjunto de datos. Pero con ..., se crea una copia nueva y separada.

2. Combinar arrays

    ```javascript
    let frutas = ['manzana', 'banana', 'naranja'];
    let verduras = ['zanahoria', 'lechuga'];
    let alimentos = [...frutas, ...verduras];

    console.log(alimentos); // Imprime: ['manzana', 'banana', 'naranja', 'zanahoria', 'lechuga']
    ```

    En este caso, hemos combinado dos arrays en uno solo. El operador de propagación toma todos los elementos de frutas y verduras y los pone en el nuevo array alimentos.

3. Usar valores de un array como argumentos en una función

    ```javascript
    let numeros = [1, 2, 3];

    function sumar(a, b, c) {
    return a + b + c;
    }

    console.log(sumar(...numeros)); // Imprime: 6
    ```

    En este ejemplo, el array numeros se expande en tres argumentos separados que luego se pasan a la función sumar.
    Recuerda que el operador de propagación es muy poderoso y estos son solo algunos ejemplos de lo que puedes hacer con él.

## Clase 57: Introducción a Arrays Bidimensionales

Los arrays bidimensionales son, en esencia, un array de arrays. Cada elemento del array principal es también un array, y estos arrays secundarios pueden tener sus propios elementos. Una forma fácil de visualizarlos es como una matriz de filas y columnas, similar a una tabla o una cuadrícula.
Por ejemplo, aquí hay un array bidimensional que representa una simple cuadrícula de 3x3:

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

En este array bidimensional, matriz[0] es el primer array secundario [1, 2, 3], matriz\[1] es el segundo array [4, 5, 6], y así sucesivamente.
Para acceder a un elemento específico dentro de un array bidimensional, necesitas dos índices: uno para el array principal y otro para el array secundario. Por ejemplo, para acceder al número 5 en la matriz anterior, usarías matriz\[1][1] (recuerda que los índices en JavaScript comienzan en 0).
Aquí hay un ejemplo en código:

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][1]); // Imprime: 5
```

Los arrays bidimensionales son particularmente útiles cuando estás trabajando con datos que son naturalmente bidimensionales, como las tablas de datos, las cuadrículas de un juego, las imágenes de píxeles, etc.

### Iterar un array bidimensional

Para iterar o recorrer un array bidimensional, puedes usar bucles anidados. Un bucle "externo" recorre las filas (los arrays internos []), y un bucle "interno" recorre los elementos dentro de cada fila (\[1,2,3,etc.]).

A continuación, se muestra un ejemplo de cómo hacerlo:

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```

En este ejemplo, el bucle externo for (con la variable i) recorre las filas del array matriz. Para cada fila, el bucle interno for (con la variable j) recorre los elementos dentro de esa fila. Entonces, matriz\[i][j] representa el elemento actual en la matriz.

Este código imprimirá todos los números en la matriz, uno por uno, en el orden en que aparecen.
Los arrays bidimensionales pueden parecer complicados al principio, pero con práctica y experimentación, te acostumbrarás a trabajar con ellos.

### Duplicar la matriz

```javascript

function duplicateMatrix(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]];
  }
  return newMatrix;
}
console.log(duplicateMatrix(matrix));

```

- Se define una función llamada duplicateMatrix que toma una matriz como parámetro.
- Se crea un nuevo array newMatrix.
- Se utiliza un bucle para recorrer cada fila de la matriz original (matrix).
- Se crea una copia superficial de cada fila utilizando el operador spread (...) y se almacena en newMatrix.
- Se devuelve el nuevo array newMatrix.
- Se llama a la función con la matriz matrix y se imprime el resultado en la consola.

### Buscar un elemento de una matriz bidimensional

```javascript
function findElement(matrix, element) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === element) {
        return true;
      }
    }
  }
  return false;
}
console.log(findElement(matrix, 5));
```

- Se define una función llamada findElement que toma una matriz y un elemento como parámetros.
- La función busca el elemento en la matriz utilizando bucles anidados.
- Si encuentra el elemento, devuelve true; de lo contrario, devuelve false.
- Se llama a la función con la matriz matrix y el elemento 5, y se imprime el resultado en la consola.

## Clase 58: Proyecto Encuentra al ganador del torneo

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
competitions. Específicamente, results\[i] denota el ganador de competitions[i], donde un 1 en el array results
significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.
Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás
equipos exactamente una vez. Además, se garantiza que el torneo siempre tendrá al menos dos equipos.

*Archivo: proyecto_granador_torneo.js.*

## Clase 59: Anatomía de un Objeto

Un objeto en JavaScript es una colección de propiedades. Cada propiedad tiene un nombre y un valor, y estos valores pueden ser de cualquier tipo, como números, cadenas, booleanos, funciones e incluso otros objetos. Aquí tienes un ejemplo de un objeto simple:

```javascript
let coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  año: 2020,
  encendido: false,
  encender: function() {
    this.encendido = true;
  }
};
```

En este ejemplo, coche es un objeto que representa un coche. Tiene varias propiedades: marca, modelo, año y encendido. También tiene un método, que es una función asociada a un objeto, llamado encender, el cual cambia el valor de encendido a true.
Puedes acceder a las propiedades de un objeto usando la notación de punto o de corchetes:

```javascript
console.log(coche.marca); // Imprime: 'Toyota'
console.log(coche['modelo']); // Imprime: 'Corolla'
```

Puedes cambiar el valor de una propiedad de la siguiente manera:

```javascript
coche.año = 2021;
console.log(coche.año); // Imprime: 2021
```

Y puedes llamar a un método del objeto de la siguiente manera:

```javascript
coche.encender();
console.log(coche.encendido); // Imprime: true
```

En resumen, un objeto en JavaScript es una forma de agrupar datos y funciones relacionadas en una sola estructura, lo que facilita la organización y el manejo de la información en tu código.

## Clase 60: Trabajando con Objetos en JS

Un objeto en JavaScript es una colección de pares de clave-valor (propiedad-valor).

### Creando un objeto

Puedes crear un objeto en JavaScript utilizando la sintaxis de objeto literal. Aquí tienes un ejemplo:

```javascript
let objeto = {
  clave1: 'valor1',
  clave2: 'valor2'
};
```

### Creando un objeto dentro de un objeto

Puedes tener un objeto como valor de una clave dentro de otro objeto. Por ejemplo:

```javascript
let objeto = {
  clave1: 'valor1',
  clave2: {
    subClave1: 'subValor1',
    subClave2: 'subValor2'
  }
};
```

### Accediendo a las propiedades

Puedes acceder a las propiedades de un objeto usando la notación de punto o la notación de corchetes:

```javascript
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Ejemplo"
}

console.log(persona.nombre);// Imprime Juan
console.log(persona["edad"]); // Imprime 25
```

### Modificación de propiedades

Puedes cambiar el valor de una propiedad fácilmente:

```javascript
persona.edad = 26;
console.log(persona.edad); //Imprime 26
```

### Creando un método dentro de un objeto

Un método es una función que se encuentra dentro de un objeto. Aquí te muestro cómo hacerlo:

```javascript
let objeto = {
  clave1: 'valor1',
  metodo: function() {
    console.log('Este es un método de un objeto!');
  }
};

// Para llamar al método, utilizas el nombre del objeto, seguido por un punto, y luego el nombre del método con paréntesis:
objeto.metodo(); // Imprime 'Este es un método de un objeto!'
```

### Añadiendo nuevas propiedades

Puedes agregar nuevas propiedades en cualquier momento:

```javascript
persona.trabajo = "Desarrollador";
console.log(persona.trabajo); // Salida: Desarrollador
```

### Accediendo a un objeto dentro de otro objeto

Puedes acceder a un objeto interno utilizando la notación de punto o la notación de corchetes. Aquí te muestro cómo:

```javascript
let objeto = {
  clave1: 'valor1',
  clave2: {
    subClave1: 'subValor1',
    subClave2: 'subValor2'
  }
};

console.log(objeto.clave2.subClave1); // Imprime 'subValor1'
console.log(objeto['clave2']['subClave2']); // Imprime 'subValor2'
```

### Eliminar una propiedad de un objeto

Puedes eliminar una propiedad de un objeto utilizando la palabra clave delete. Por ejemplo:

```javascript
let objeto = {
  clave1: 'valor1',
  clave2: 'valor2'
};

delete objeto.clave1;
console.log(objeto); // Imprime { clave2: 'valor2' }
```

### Eliminar un método de un objeto

Al igual que las propiedades de un objeto, también puedes eliminar un método de un objeto usando la palabra clave delete. Por ejemplo:

```javascript
let objeto = {
  clave1: 'valor1',
  metodo: function() {
    console.log('Este es un método de un objeto!');
  }
};

delete objeto.metodo; // NO se deben colocar los () ya que los mismos son para llamar a la función (método en este caso).
console.log(objeto); // Imprime { clave1: 'valor1' }
```

### Recorrer propiedades

Puedes recorrer las propiedades de un objeto usando bucles for...in:

```javascript
for (let key in persona) {
    console.log(key + ": " + persona[key]);
}
```

## Clase 61: Función constructora

Una función constructora en JavaScript es una forma especial de crear un objeto. Se utiliza principalmente cuando necesitamos crear varios objetos con las mismas propiedades y métodos.
La función constructora se parece a cualquier otra función en JavaScript, pero con dos diferencias importantes. La primera es que su nombre comienza con una letra mayúscula. La segunda es que se utiliza con la palabra clave new.
Veamos un ejemplo:

```javascript
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  this.arrancar = function() {
    console.log('El coche está arrancando');
  }
}

let miCoche = new Coche('Toyota', 'Corolla', 2020);
```

En este ejemplo, Coche es una función constructora que recibe tres argumentos: marca, modelo y año. Dentro de la función, utilizamos this para asignar estos argumentos a las propiedades del nuevo objeto que se está creando.
También definimos un método llamado arrancar dentro de la función constructora. Este método estará disponible para todos los objetos creados con la función constructora Coche.

Después, creamos un nuevo objeto miCoche utilizando la palabra clave new seguida de la función constructora Coche.
Ahora, miCoche es un objeto con las propiedades marca, modelo, año y el método arrancar.
Podemos acceder a las propiedades y métodos de miCoche de la siguiente manera:

```javascript
console.log(miCoche.marca); // Imprime: 'Toyota'
console.log(miCoche.modelo); // Imprime: 'Corolla'
console.log(miCoche.año); // Imprime: 2020
miCoche.arrancar(); // Imprime: 'El coche está arrancando'
```

De esta manera, podemos utilizar la función constructora Coche para crear tantos coches como queramos, todos con las mismas propiedades y métodos.

### Propiedad .prototype en una función constructora

El .prototype es una propiedad en JavaScript que está asociada con las funciones y los objetos. Es un mecanismo fundamental en JavaScript que permite la creación de objetos complejos y la herencia entre objetos.

En el contexto de una función constructora, .prototype es un objeto que se utiliza para añadir propiedades y métodos que serán compartidos entre todas las instancias de los objetos creados por esa función constructora.
Veamos un ejemplo:

```javascript
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

Coche.prototype.arrancar = function() {
    console.log('El coche está arrancando');
}

let miCoche = new Coche('Toyota', 'Corolla', 2020);
miCoche.arrancar(); // Imprime: 'El coche está arrancando'
```

En este caso, hemos definido una función constructora Coche con tres propiedades: marca, modelo y año. Luego, hemos añadido un método arrancar al objeto prototype de Coche.

Ahora, todas las instancias de Coche tendrán acceso a este método arrancar. Eso significa que si creamos un nuevo coche con new Coche(...), ese coche tendrá el método arrancar disponible.

El uso de .prototype es muy eficiente en términos de memoria, porque solo se crea una copia del método para todas las instancias, en lugar de crear una copia para cada instancia.

Además, el .prototype permite la herencia de objetos en JavaScript. Los objetos en JavaScript tienen una propiedad interna [[Prototype]] que es una referencia al objeto prototype de su constructor. Cuando intentas acceder a una propiedad que no existe en un objeto, JavaScript buscará esa propiedad en el objeto prototype de su constructor, luego en el prototype del prototype, y así sucesivamente, hasta que la propiedad sea encontrada o hasta que se llegue al final de la cadena de prototipos (que es null).

Esto es un resumen básico de cómo funciona .prototype en JavaScript. Es un tema complejo con muchos detalles y sutilezas, pero espero que esto te ayude a entender los conceptos básicos.

## Clase 62: ¿Qué es una clase?

Una clase en JavaScript es una plantilla para la creación de objetos. Es un mecanismo que nos permite crear objetos con propiedades y métodos específicos.

Imagina que estás construyendo un videojuego y necesitas crear varios personajes. Cada personaje tiene su nombre, puntos de vida, y habilidades. Una clase te permite definir una "plantilla" que puedes usar para crear cada personaje.

Aquí hay un ejemplo sencillo de cómo se ve una clase en JavaScript:

```javascript
class Personaje {
  constructor(nombre, vida, habilidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.habilidad = habilidad;
  }

  atacar() {
    console.log(`${this.nombre} usa ${this.habilidad}!`);
  }
}
```

En este ejemplo, Personaje es el nombre de nuestra clase. Dentro de la clase, tenemos un método especial llamado constructor, que se usa para establecer las propiedades iniciales del objeto cuando lo creamos.

Los otros métodos de la clase, como atacar, son funciones que todos los objetos creados a partir de esta clase pueden usar.

Podemos usar esta clase para crear nuevos personajes de la siguiente manera:

 ```javascript
let heroe = new Personaje('Hércules', 100, 'Fuerza divina');
let villano = new Personaje('Hades', 100, 'Fuego oscuro');

heroe.atacar(); // Imprime: 'Hércules usa Fuerza divina!'
villano.atacar(); // Imprime: 'Hades usa Fuego oscuro!'
```

En resumen, las clases en JavaScript son una forma poderosa y flexible de crear y manejar objetos.

## Clase 63: Prototipos y Herencias

En JavaScript, los prototipos y la herencia son conceptos fundamentales que se utilizan para crear y compartir funcionalidades entre objetos.

Prototipos: En JavaScript, cada objeto tiene un enlace interno a otro objeto llamado "prototipo". Este prototipo es como un modelo o plantilla que el objeto utiliza para heredar propiedades y métodos. Cuando accedes a una propiedad o método de un objeto, JavaScript primero busca esa propiedad o método en el propio objeto. Si no lo encuentra, busca en el prototipo del objeto y así sucesivamente, siguiendo la cadena de prototipos hasta llegar al objeto base Object.prototype. Esto se conoce como la "cadena de prototipos" o "cadena de herencia".

Herencia: La herencia en JavaScript se basa en la idea de que un objeto puede heredar propiedades y métodos de otro objeto. Esto se logra estableciendo el prototipo de un objeto como otro objeto. Cuando un objeto hereda de otro, adquiere todas las propiedades y métodos de ese objeto, incluidos los que se encuentran en su cadena de prototipos. Esto permite la reutilización de código y la creación de una jerarquía de objetos.

Veamos un ejemplo de cómo se pueden utilizar prototipos y herencia en JavaScript:

```javascript
// Definimos un constructor de objetos
function Animal(nombre) {
    this.nombre = nombre;
}

// Añadimos un método al prototipo del constructor Animal
Animal.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};

// Creamos un objeto Perro que hereda de Animal
function Perro(nombre, raza) {
    Animal.call(this, nombre); // Llamada al constructor de Animal
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype); // Establecemos el prototipo de Perro como Animal
Perro.prototype.constructor = Perro; // Corregimos la propiedad constructor de Perro

// Creamos un objeto perro
const miPerro = new Perro('Max', 'Labrador');
miPerro.saludar(); // Imprime: Hola, soy Max
```

En este ejemplo, tenemos un constructor Animal que define propiedades y métodos comunes a todos los animales. Luego, creamos un constructor Perro que hereda de Animal y agrega propiedades específicas de los perros. Al establecer el prototipo de Perro como Animal.prototype, los objetos Perro heredan el método saludar de Animal, lo que les permite saludar de la misma manera que los objetos Animal.

Esta es solo una introducción básica a los prototipos y la herencia en JavaScript. Hay muchas más características y conceptos relacionados con este tema que podemos explorar, como la herencia prototípica, las clases (introducidas en ECMAScript 2015), mixins, etc.

## Clase 64: Herencia en la práctica

### Prototipos y Herencias, extends, constructor y super

### Prototipos

En JavaScript, todos los objetos tienen una propiedad interna llamada [[Prototype]] que es una referencia a otro objeto. Cuando intentas acceder a una propiedad que no existe en un objeto, JavaScript intentará buscar esa propiedad en el objeto [[Prototype]] de ese objeto.
Por ejemplo, considera el siguiente código:

```javascript
let objetoA = {
  nombre: 'Objeto A'
};

let objetoB = Object.create(objetoA);
console.log(objetoB.nombre); // Imprime: 'Objeto A'
```

Aquí, objetoB fue creado con objetoA como su prototipo. Cuando intentamos acceder a la propiedad nombre en objetoB y no la encontramos, JavaScript busca en su prototipo (objetoA) y encuentra la propiedad allí. En caso de que no la encontrase devolvería undefine.

### Herencia

La herencia en JavaScript se realiza a través de prototipos. Cuando creas un nuevo objeto, puedes elegir otro objeto para ser su prototipo, lo que permite al nuevo objeto heredar todas las propiedades del prototipo.
Considera el siguiente ejemplo con las clases Animal y Perro:

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

class Perro extends Animal {
  hablar() {
    console.log(`${this.nombre} ladra.`);
  }
}

let miPerro = new Perro('Rex');
miPerro.hablar(); // Imprime: 'Rex ladra.'
```

En este caso, la clase Perro hereda de la clase Animal a través de la palabra clave extends. Esto significa que un Perro es un Animal, pero con algunas características adicionales o modificadas (en este caso, su método de hablar es diferente).
Por lo tanto, cuando creamos una instancia de Perro y llamamos a su método hablar, se utilizará el método hablar definido en la clase Perro, no el que se encuentra en Animal. Sin embargo, si Perro no definiera un método hablar, se utilizaría el método hablar de Animal.

### Extends, constructor y super

### Extends

La palabra clave extends en JavaScript se utiliza para crear una subclase o un hijo de otra clase.
Por ejemplo:

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

class Perro extends Animal {
  ladrar() {
    console.log(`${this.nombre} ladra.`);
  }
}

let miPerro = new Perro('Rex');
miPerro.hablar(); // Imprime: 'Rex hace un ruido.'
miPerro.ladrar(); // Imprime: 'Rex ladra.'
```

En este ejemplo, la clase Perro extiende la clase Animal, lo que significa que hereda todas sus propiedades y métodos. Por lo tanto, un objeto Perro puede usar el método hablar() de la clase Animal y el método ladrar() de la clase Perro.

___

### Constructor

Un constructor es un método especial que se utiliza para crear e inicializar un objeto creado a partir de una clase.
Por ejemplo:

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

let miAnimal = new Animal('Misi');
miAnimal.hablar(); // Imprime: 'Misi hace un ruido.'
```

En este ejemplo, la clase Animal tiene un constructor que toma un argumento nombre. Cuando creamos un nuevo objeto Animal, debemos pasar un nombre, que se asignará a la propiedad nombre de ese objeto.

___

### Super

La palabra clave super en JavaScript se utiliza para llamar a funciones en el objeto padre de un objeto.
Por ejemplo:

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre} ladra.`);
  }

  info() {
    console.log(`Este perro es un ${this.raza}`);
  }
}

let miPerro = new Perro('Rex', 'Golden Retriever');
miPerro.hablar(); // Imprime: 'Rex hace un ruido.'
miPerro.ladrar(); // Imprime: 'Rex ladra.'
miPerro.info(); // Imprime: 'Este perro es un Golden Retriever'
```

En este ejemplo, la clase Perro tiene un constructor que toma dos argumentos, nombre y raza. Dentro del constructor de Perro, llamamos a super(nombre) para pasar el nombre al constructor de la clase padre Animal. Luego, asignamos raza a la propiedad raza del objeto Perro.

## Clase 65: Prototipos en la práctica

### ¿Qué es la cadena de prototipo en Javascript?

La cadena de prototipos (también conocida como "prototype chain") es un mecanismo que JavaScript utiliza para buscar propiedades y métodos de un objeto. Cuando se accede a una propiedad o método de un objeto, JavaScript intentará buscar esta propiedad o método en el propio objeto. Si no puede encontrarlo ahí, buscará en el objeto prototipo del objeto actual, y luego en el prototipo de ese prototipo, y así sucesivamente, hasta que encuentre la propiedad o llegue al final de la cadena de prototipos (que es null).

Aquí tienes un ejemplo sencillo:

```javascript
let animal = {
  nombre: 'Fido',
  sonido: function() {
    console.log('Hace un ruido');
  }
};

let perro = Object.create(animal);
perro.sonido(); // Imprime 'Hace un ruido'
```

En este caso, perro es un objeto que fue creado con animal como su prototipo. Cuando llamamos al método sonido en perro, JavaScript no encuentra este método en el objeto perro y por lo tanto busca en su prototipo, que es el objeto animal, y lo encuentra allí.

Si agregamos un método al objeto perro con el mismo nombre, este sobrescribirá el método en animal:

```javascript
perro.sonido = function() {
  console.log('Ladra');
};

perro.sonido(); // Imprime 'Ladra'
```

Ahora, cuando llamamos al método sonido en perro, JavaScript lo encuentra inmediatamente en el objeto perro y no necesita buscar en la cadena de prototipos.

En el ejemplo de la clase anterior:

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre} ladra.`);
  }

  info() {
    console.log(`Este perro es un ${this.raza}`);
  }
}

let miPerro = new Perro('Rex', 'Golden Retriever');
miPerro.hablar(); // Imprime: 'Rex hace un ruido.'
miPerro.ladrar(); // Imprime: 'Rex ladra.'
miPerro.info(); // Imprime: 'Este perro es un Golden Retriever'
```

Tenemos que la clase Animal es el prototipo de la clase Perro y que Perro es el prototipo de la instancia miPerro.

Si queremos añadir una nuevo método a alguna de las clases para que este pueda ser heredado por la instancia, debemos realizarlo de la siguiente manera:

```javascript

Animal.prototype.nuevoMetodo = function(){
  console.log("Este es un nuevo método");
}
```

Nota: Investigar si se puede crear nuevas propiedades en las clases una vez creada, al igual que los métodos.

## Clase 66: this en Javascript

En JavaScript, la palabra clave this se refiere al contexto de ejecución actual y suele ser una fuente común de confusión para los desarrolladores, ya que su comportamiento puede variar dependiendo de cómo se utiliza.

1. En el contexto de una función:

      - Cuando se usa dentro de una función normal, this hace referencia al objeto que llama a la función. Este objeto puede ser dinámico y depende de cómo se invoca la función.

        ```javascript
        javascriptCopy code
        function ejemplo() {
          console.log(this);
        }

        // Ejemplo 1
        ejemplo(); // this se refiere al objeto global (window en el navegador, global en Node.js)

        // Ejemplo 2
        const objeto = { metodo: ejemplo };
        objeto.metodo(); // this se refiere al objeto 'objeto'
        ```

2. En el contexto de un método de objeto:

    - Cuando se utiliza dentro de un método de un objeto, this se refiere al objeto que contiene el método.

      ```javascript
      javascriptCopy code
      const objeto = {
        propiedad: 'valor',
        metodo: function() {
          console.log(this);
        }
      };


      objeto.metodo(); // this se refiere al objeto 'objeto'
      ```

3. En el contexto de una clase:

    - Dentro de una clase, this también se refiere al objeto actual creado a partir de la clase.

      ```javascript
      javascriptCopy code
      class Ejemplo {
        constructor() {
          console.log(this);
        }
      }

      const instancia = new Ejemplo(); // this se refiere a la instancia de la clase 'Ejemplo'
      ```

4. En funciones de flecha:

    - Las funciones de flecha no tienen su propio this. En su lugar, this en una función de flecha se toma del ámbito circundante (lexical scoping).

        ```javascript
          javascriptCopy code
          const funcionFlecha = () => {
            console.log(this);
          };

          funcionFlecha(); // this se refiere al objeto que rodea a la función de flecha
        ```

En resumen, el valor de this en JavaScript depende del contexto de ejecución. Puede referirse al objeto global, al objeto que llama a una función, al objeto que contiene un método o a la instancia de una clase, entre otros casos. Es fundamental comprender cómo se utiliza this en diferentes situaciones para evitar errores y aprovechar su funcionalidad de manera efectiva.

### Otra explicación de this

La palabra clave this en JavaScript es un término especial que se refiere al contexto en el que se está ejecutando una función. Es decir, this se refiere al objeto que está "poseyendo" o "conteniendo" la función actual.

Considera el siguiente ejemplo con un objeto que representa a una persona:

```javascript
let persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};

persona.saludar(); // Imprime: 'Hola, mi nombre es Juan'
```

En este ejemplo, dentro del método saludar, this se refiere al objeto persona. Por eso, cuando decimos this.nombre, estamos accediendo a la propiedad nombre del objeto persona.

Ahora, ¿qué pasaría si intentamos usar this fuera de un objeto?

```javascript
console.log(this); // Imprime el objeto global (`window` en los navegadores, `global` en Node.js)
```

En este caso, this se refiere al objeto global porque no estamos dentro de ningún otro objeto.
Es importante notar que el valor de this puede cambiar dependiendo del contexto. Por ejemplo, si usamos this dentro de una función que es llamada por un evento de un elemento HTML, this se referirá a ese elemento HTML.

```html
<button id="miBoton">Haz click en mí</button>

<script>
document.getElementById('miBoton').addEventListener('click', function() {
  console.log(this); // Imprime el elemento HTML button
});
</script>
```

En este caso, this se refiere al elemento button porque la función es llamada cuando ocurre el evento de click en el botón.
En resumen, this en JavaScript es una referencia al objeto que está actualmente en contexto o que está "usando" la función actual.

## Clase 67 y 68: Reto Crea una red social

Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.

*Archivo reto_Red_Social.js.*
