//Enlace implícito (implicit binding)

const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`) //this se refiere a la propia variable del objeto creado house.
    }

}

house.dogGreeting()

// Esto daría error porque la variable no está en el contexto del objeto.
/* function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`)
}

const house2 = {
    dogName: 'Fido',
    dogAge: 3

} */
// Para arreglarlo tenemos que crear un enlace explícito

//Enlace explícito (explicit binding)

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newHouse)

function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address} `)
}

const owner = 'Lucy'
const address = 'Avenue 123'

newDogGreeting.call(newHouse, owner, address)