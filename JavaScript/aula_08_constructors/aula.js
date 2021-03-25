// Factory function

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Asus', 5.5, 5000)
console.log(celular1)

// Constructor function

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('fazendo ligação..')
    }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular)