//Social media profile

// 1. User information
const username = 'Cybermito'
const fullName = 'Pepito Grillo'
const age = 50
const isStudent = true

// 2. Address

const address = {
    street: '123 Main Street',
    city: 'Granada',
    state: 'Codingland',
    zipCode: 54365
}

// 3. Hobbies

const hobbies = ['Coding', 'Reading', 'Moutain Sport']

// 4. Generating personalized bio

//Colocaremos un texto con template literals

const personalizedBio = `
    Hola, soy ${fullName}.
    Tengo ${age} años.
    Vivo en ${address.city}.

    Mis hobbies son: ${hobbies.join(', ')}.

    Sígueme para aventuras en la programación y mundo maker.
`

// 5. Print the user profile and bio

console.log(personalizedBio)