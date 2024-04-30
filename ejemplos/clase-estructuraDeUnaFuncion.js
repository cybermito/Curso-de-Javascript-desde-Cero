// Vamos a crear una función que nos servirá para aplicar un descuento a una serie de artículos que tenemos rebajados

function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)

//Cómo vemos ya tenemos una función que podrémos usar para calcular el porcentaje de descuento de cualquier artículo. 
//Podemos hacer varias pruebas cambiando los valores de originalPrice y discountPercentage