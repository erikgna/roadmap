// IF ELSE
let hora = 20

if (hora > 6 && hora < 12) {
    console.log("Bom dia")
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}

// Switch

let permissao = 'diretor';

switch (permissao) {
    case 'comum':
        console.log("usuario comum")
        break

    case 'gerente':
        console.log("usuario gerente")
        break

    case 'diretor':
        console.log("usuario diretor")
        break

    default:
        console.log('usuario não RECONHECIDO')
}