const endereco = {
    Rua: 'João Pedroso',
    Cidade: 'Torres',
    CEP: '8898000-000',
}

function exibirEndereco(endereco) {
    for (let obj in endereco) {
        console.log(obj, endereco[obj])
    }
}

exibirEndereco(endereco)