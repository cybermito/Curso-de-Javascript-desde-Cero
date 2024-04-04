/*
Administrar una pila

Cree un programa que simule una pila utilizando los métodos push y pop. La pila debe almacenar una colección de libros. Los usuarios pueden realizar las siguientes acciones:

1. Agregue un libro nuevo a la parte superior de la pila.
2. Retire el libro de la parte superior de la pila.
3. Muestre la pila actual de libros.

Implemente un bucle que permita a los usuarios interactuar con la pila hasta que decidan salir.

*/

let bookCart = [];

const ADD_TO_CART_ACTION = 'añadir';
const REMOVE_FROM_CART_ACTION = 'borrar';
const VIEW_CART_ACTION = 'ver';
let isExit = false;
let libro;

function viewCart () {
    alert(`Carrito actual de Libros: ${bookCart}`);
}

function performCartAction (action, newBook) {
    switch (action) {

        case ADD_TO_CART_ACTION:

            bookCart.push(newBook);
            break;

        case REMOVE_FROM_CART_ACTION:

            if (bookCart.length === 0){
                alert("Pila vacía. No se puede borrar.")
            } else {
                const removedBook = bookCart.pop();
                alert(`Removed book from the cart: ${removedBook}`);
            }            
            break;

        case VIEW_CART_ACTION:
            viewCart();
            break;

        default:
            alert('Acción invalida. Por favor seleccione otra opción.');
    }
}

//En este punto de llamada a las funciones deberíamos hacer un bucle que nos pidiera que queremos hacer hasta que decidamos salir del programa.
while (!isExit) {

    alert("Carrito de la compra de libros");
    orden = prompt("Seleccione que quiere hacer: (Añadir, Borrar o Salir");

    if (orden.toLowerCase() === 'salir') {
        isExit = true;
    } else if (orden.toLowerCase() === 'añadir') {
        libro = prompt('Introduzca el nombre del libro que quiere añadir: ');
        performCartAction(ADD_TO_CART_ACTION, libro);
        performCartAction(VIEW_CART_ACTION);
    } else if (orden.toLowerCase() === 'borrar') {
        performCartAction(REMOVE_FROM_CART_ACTION);
        performCartAction(VIEW_CART_ACTION);
    } else if (orden.toLowerCase() === 'ver') {
        performCartAction(VIEW_CART_ACTION);
    } else {
        alert('Orden incorrecta. Es Añadir, Borrar o Salir');
    }
    
}

