let filme = {
    nome1: "movie1",
    ano1: 1991,
    nome2: "movie2",
    ano2: 2002
}

exibirPropriedades(filme)

function exibirPropriedades(objeto){
    for (let item of Object.keys(objeto)) {
        if (typeof objeto[item] == 'string'){
            console.log(item, objeto[item])
        }
    }
}