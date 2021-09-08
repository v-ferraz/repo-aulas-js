//fuja de escopo global; var tem apenas 2 escopo (até onde uma variavel pode ser acessada): global em todo o código, ou dentro de uma função

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
