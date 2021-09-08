const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá,
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Essa é uma função para converter a string em maiuscula
console.log(`Ei... ${up('cuidado')}!`) //Chamando a função dentro da expressão
