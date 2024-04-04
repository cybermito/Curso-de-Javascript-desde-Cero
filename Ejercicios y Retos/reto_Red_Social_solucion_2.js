/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.

*/

const userDatabase = [
    {
        username: 'pepito',
        password: '123'
    },
    {
        username: 'grillo',
        password: '456'
    },
    {
        username: 'luna',
        password: '789'
    },
];

const usersTimeline = [
    {
        username: 'Nuria',
        timeline: 'Me encanta ser'
    },
    {
        username: 'Luna',
        timeline: 'Programar es crear'
    },
    {
        username: 'Mito',
        timeline: 'Maker por naturaleza'
    },
    {
        username: 'Pablo',
        timeline: 'Quiero ser DJ'
    },
];

const username = prompt('Ingrese su usuario').toLowerCase();
const password = prompt('Ingrese la contraseña');
const isValidado = validarUsuario(username, password);

function validarUsuario (username, password){
    const user = userDatabase.find(usuario => { 
        if ((usuario.username === username) && (usuario.password === password)) {
            console.log(`Usuario verificado. Bienvenido: ${user['username']}`);
            console.log('Timeline: ');
            return true;
        } else {
            console.log('Error: El usuario o contraseña no son correctos');
            return false;
        }
    
    });
    
}

function mostrarTimeline(){
    usersTimeline.forEach(function(mensaje){
        console.log(`El usuario ${mensaje['username']} dice:
        ${mensaje['timeline']}`);
    });
}

if (isValidado) {
    mostrarTimeline();
}