const menssagem = new String(' olá mundo')

menssagem.trim()
menssagem[2]
menssagem.includes('mundo')
menssagem.startsWith('olá')
menssagem.endsWith('mundo')
menssagem.indexOf('mundo')
menssagem.replace('mundo', 'world')
menssagem.split(' ')

// template literal
const nome = 'erik'

const outraMsg = `Oi ${nome} isso é minha primeira
"menssagem"`

console.log(outraMsg)