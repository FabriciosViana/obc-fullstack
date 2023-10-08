const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Harry', 'Hermione', 'Svelte', 'Roni', 'Dumbledore']


// Adicionando elemento no fim do array
arr.push('Boromir')


// Adicionando elemento no começo do array
arr.unshift('stir')


// Remover elementos no final
arr.pop()


// Remover elementos no começo
arr.shift()




// Pesquisar por um elemento
// include()

const inclui = arr.includes('Gandalf')


// Pesquisar por indice
// indexOf()

const indice = arr.indexOf('Gandalf')

console.log(indice)

// cortar e concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)

console.log(outros)
console.log(arr)
console.log(hobbits)