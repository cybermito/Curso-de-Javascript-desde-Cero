/*

Este ejercicio consiste en crear una función para una aplicación de música donde controlemos una lista de reproducción.

Añadiremos y/o borraremos canciones con los métodos shift() y unshift() al inicio de la lista.

Después visualizaremos la lista de reproducción actualizada.

*/

let playlistInicial = ['Carros de Fuego', 'Oxigene', 'Tubulars Bells'];
let playlistActualizada = [];

function managePlaylist(accion, playlist, nombreCancion) {

    switch (accion) {

        case 'addSong':
            console.log(`Esta es la playlist actual: ${playlist}`);
            playlist.unshift(nombreCancion);
            console.log(`Playlist actualizada: ${playlist}`);

        case 'removeSong':
            console.log(`Esta es la playlist actual: ${playlist}`);
            if (playlist.length === 0){
                console.log('Lista vacía, no se puede eliminar nada');
            } else {
                playlist.shift();
                console.log(`Playlist actualizada: ${playlist}`);
            }
            
    }

    return playlist;

}

playlistActualizada = managePlaylist('removeSong', playlistInicial);
console.log(playlistActualizada);

