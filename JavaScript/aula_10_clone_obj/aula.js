const celular = {
    marcaCelular: 'asus',
    tamanhoTela: 5.5,
    bateria: 4000,
    ligar (){
        console.log('ligando...')
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
},celular);
console.log(novoObjeto)

const objetoDois = {...celular}
console.log(objetoDois)