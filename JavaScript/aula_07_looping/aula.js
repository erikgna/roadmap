// For 
console.log('for')
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// while
console.log('while')
let i = 5;

while (i >= 1) {
    i -= 1
    console.log(i)
}

// do
console.log('do')
let j = 0;
do {
    console.log("digitando!")
    j++
} while (j < 20)

// for in
console.log('for in----------------------')
const pessoa = {
    "nome": "erik",
    "idade": 17
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// for of
console.log('for of--------------------------')
const cores = ['vermelho', 'azul', 'verde']

for (let cor of cores) {
    console.log(cor)
}