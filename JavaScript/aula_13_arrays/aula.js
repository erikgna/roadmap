//mudar valores
const numeros = [1, 2, 3];

//inicio 
numeros.unshift(0);
console.log(numeros)

//meio
numeros.splice(1, 3, 'a');
console.log(numeros)

//final
numeros.push(5);
console.log(numeros)
//=========================

//encontrar valores
const numeros1 = [1, 2, 3, 1, 4]
console.log(numeros1.indexOf(10))
console.log(numeros1.includes(2))
console.log(numeros1.lastIndexOf(1))

const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' },
    { id: 3, nome: 'c' }
]

console.log(marcas.find(function (marca) {
    return marca.nome === 'a'
}))
//=======================
//arrow functions
console.log(marcas.find(marca => marca.nome === 'a'))

//=============
//remover valores 
//final
console.log(numeros.pop())
//inicio
console.log(numeros.shift())
//meio
console.log(numeros1.splice(1, 2))
// =================
//esvaziar um array
numeros.length = 0

//=================
//combinar e dividir arrays
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]
//combinar
console.log(primeiro.concat(segundo))
//dividir
console.log(primeiro.slice(0, 2))
//spread
console.log(...primeiro, 'a', ...segundo)
//clonar 
const clonado = [...primeiro]
console.log(clonado)
//==================
//iterando arrays
const numeros2 = [1, 2, 3, 4, 5, 6]
numeros2.forEach((element, indice) => console.log(element, indice)
)
//=============
//combinar a arrays
console.log(numeros2.join('.'))
const frase = 'olá mundo, sou programador'
const resultado = frase.split(' ')
console.log(resultado.join('-'))