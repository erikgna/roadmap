// function 

let corSite = "azul";

function trocaCor(cor, tonalidade) {
    corSite = cor + " " + tonalidade;
};

trocaCor("vermelho", "escarlate")
console.log(corSite)

// function that returns something

function multiplicarPorDois(valor) {
    return valor * 2;
}

console.log(multiplicarPorDois(5))