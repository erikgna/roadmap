const convidados = [
    { nome: 'erik', convidou: ['joao', 'elias'] },
    { nome: 'fernando', convidou: ['nicoli', 'evilen'] },
    { nome: 'pedro', convidou: ['rosane', 'jorema'] }
]

function checkValidation(param1, param2) {
    let achado = convidados.find(function (nome1) {
        return nome1.nome === param1
    })
    if (achado === undefined) {
        document.getElementById('permission').innerHTML = 'Você não foi convidado'
    } else {
        let a = achado.convidou
        for (e of a)
            if (e === param2) {
                document.getElementById('permission').innerHTML = 'Você foi convidado'
                break
            } else {
                document.getElementById('permission').innerHTML = 'Você não foi convidado'
                console.log('not ok')
            }
    }
}

function buttonFunction() {
    const name = document.getElementById('name').value
    const invite = document.getElementById('invite').value
    checkValidation(name, invite)
}