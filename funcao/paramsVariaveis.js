//função sem parametros definidos para ser chamado, sendo possivel enviar varios parametros para ser executado
function soma() {
    let soma = 0
    for(i in arguments) { //'arguments' é uma array interno de uma função que possui todos os argumentos que possui
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
