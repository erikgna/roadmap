const convidados = [
    { nome: 'erik', convidou: ['joao', 'elias'] },
    { nome: 'fernando', convidou: ['nicoli', 'evilen'] },
    { nome: 'pedro', convidou: ['rosane', 'jorema'] }
]

function checkValidation(param){
    let nomeChecked = convidados.find(function(nome1){
        return nome1.nome === param
    })
    if (nomeChecked === undefined){
        console.log('oi')
    } else {
        console.log('xau')
    }
}

function buttonFunction(){
    const name = document.getElementById('name').value
    const invite = document.getElementById('invite').value
    checkValidation(name)
}