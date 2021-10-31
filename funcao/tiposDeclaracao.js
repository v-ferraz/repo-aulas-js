/*essa chamada da função funciona por que o interpretador do js carrega 
todas as funções antes de executar as linhas de codigo, assim é possivel
chamar a função por que ela já existe*/
console.log(soma(3, 4))

//function declaration
function soma(x ,y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x -y
}
console.log(sub(3, 4))

//named function expression; menos comum de se usar
//util para debugar, pois no stacktrace aparece o nome da função que gerou erro
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))