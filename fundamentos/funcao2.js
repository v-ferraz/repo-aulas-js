// Armazenando uma função em uma variavel
const imprimirSoma = function(a, b) { //função anonima = função sem nome
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
// Forma reduzida de criar uma função

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')
