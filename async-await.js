const url = 'https://jsonplaceholder.typicode.com/users'


// const getPosts = () => fetch(url)

// getPosts().then(response => {
//     console.log(response)
// })


// //utilizando async await
// const getPosts = async () =>{ 
//     const response = await fetch(url) 
//     console.log(response);
// }

// getPosts()



// //utilizando async await e axios
// const getPosts = async () => {
//     const response = await axios.get(url)
//     console.log(response.data);
// }

// // chamada da função com tratamento de erro
// getPosts()
//     .catch(error => {
//         console.log('Mensagem de erro', error)
//     })



//mesma função, mas com tratamento de erro dentro
// const getPosts = async () => {
//     try {
//         const response = await axios.get(url)
//         console.log(response.data);
//     } catch (error) {
//         console.log('Mensagem de erro:', error)
//     }
// }

// // getPosts()


const getPokemonUrl = pokemonNumber => 
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`

// // REQUESTS SEQUENCIAIS
// const get3Pokemon = async () => {
//     const pokemon1 = await axios.get(getPokemonUrl(1))
//     const pokemon5 = await axios.get(getPokemonUrl(5))
//     const pokemon10 = await axios.get(getPokemonUrl(1)')

//     console.log(pokemon1.data)
//     console.log(pokemon5.data)
//     console.log(pokemon10.data)
// }
// get3Pokemon()


// REQUESTS PARALELOS
const get3Pokemon = async () => {
    const promisePokemon1 = axios.get(getPokemonUrl(1))
    const promisePokemon5 = axios.get(getPokemonUrl(5))
    const promisePokemon10 = axios.get(getPokemonUrl(10))

    const pokemons = await Promise.all([promisePokemon1, promisePokemon5, promisePokemon10])

    console.log(pokemons)
    
}
get3Pokemon()