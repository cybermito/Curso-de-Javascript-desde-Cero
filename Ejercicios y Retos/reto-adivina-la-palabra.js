/*

Instrucciones:

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

- El juego debe tener una palabra oculta.
- El juego puede dar 1 pista de la palabra.
- El usuario debe ingresar una palabra.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos (3)
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.


*/

let palabraOculta = "javascript";
let intentos = 3;

//Comprobamos si la palabra introducida por el usuario es igual a la palabra oculta.
//Cambiamos la palabra escrita por el usuario a todo en minúsculas antes de comprobar la igualdad.

function verificarPalabraUsuario (palabraUsuario, palabraOculta){
    if (palabraUsuario.toLowerCase() === palabraOculta){
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra(){
    alert("Bienvenido a jugar Adivina la Palabra Oculta")
    alert("Tienes tres intentos para adivinar la palabra oculta")
    alert("Pista: la palabra oculta es un lenguaje de programación")

    while (intentos > 0){
        let palabraUsuario = prompt("Adivina la palabra")
        
        if (verificarPalabraUsuario(palabraUsuario, palabraOculta)){
            alert("Correcto")
            alert("Has adivinado la palabra")
            break;
        } else {
            intentos --;
            if (intentos > 0) {
                alert(`Incorrecto, aún tienes ${intentos} restantes`);
            } else {
                alert(`Agotaste los intentos, la palabra oculta era ${palabraOculta}`);
            }
        }
    }
}

jugarAdivinaLaPalabra();