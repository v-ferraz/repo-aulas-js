//variaveis definidas como 'var' fica visivel em todo o código independente do bloco que esteja definida

{ { { { var sera = 'Será???' } } } }

console.log(sera)

//Quando variavel definida dentro de uma função, ficara visivel apenas dentro desta função
function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)
