const url = 'https://jsonplaceholder.typicode.com/users'

const isNumber = value => typeof value === 'number' //verifica se o valro é um number

// usando then 'encadeado' e função callback
const getUsers = () => {
    const usersData = fetch(url).then(usersData => {
        console.log(usersData);
    })
    console.log(usersData);
}

// getUsers()



// usando async/await
const getUsersTwo = async () => {
    const usersData = await fetch(url)
    console.log(usersData);
}

// getUsersTwo()

async function greet() {
    return 'Hello world'
}

//encadeando then em uma função assíncrona
greet().then(value => {
    console.log(value)
})


// retornando erro (rejected) em uma função assíncrona
// os dois parâmetros devem ser números
//função não assíncrona
// function add(firstNumber, secondNumber) {
//     if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
//         throw 'firstNumber e secondNumber devem ser números'
//     }
//     return firstNumber + secondNumber

// }

// função async
//retorna a promise com status resolvida (resolver) ou rejeitada (rejected)
async function add(firstNumber, secondNumber) {
    if (!isNumber(firstNumber) || !isNumber(secondNumber)) {
        throw 'firstNumber e secondNumber devem ser números'
    }
    return firstNumber + secondNumber
}

// chamada da função
// nesse caso retorna a mensagem de erro
// add('x', 'y').then(value => {
//     console.log(value)
// }).catch(error => {
//     console.log(error)
// })

// cahamada sa função
// nesse caso retorna o cálculo
// add(5, 10).then(value => {
//     console.log(value)
// }).catch(error => {
//     console.log(error)
// })



