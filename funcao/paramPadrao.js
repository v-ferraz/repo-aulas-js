//estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //passando 0 nos parametros a função vai intender como 'false' e vai usar o valor 'default' 1 e somar

//estrategia 2, 3 e 4 para gerar o valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //usando operador ternario; se 'a' for !== de undefined, atribua 'a', se não 1
    b = 1 in arguments ? b : 1 //dentro de 'arguments' possui indice 1? se sim, atribua esse valor na variavel 'b', se não 1
    c = isNaN(c) ? 1 : c // a mais segura das opções; testa se o valor da variavel não é um numero, e caso não seja vai usar 1, se for um numero, vai usar o valor de 'c'

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) /*passando valor '0' como parametro, 
a função vai entender como valores numericos e realizar a soma, não como valores booleanos como na função anterios*/

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))