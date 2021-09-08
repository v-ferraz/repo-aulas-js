//let tem escopo de bloco; os valores definidos ficam apenas dentro do bloco que está
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora = ', numero)
