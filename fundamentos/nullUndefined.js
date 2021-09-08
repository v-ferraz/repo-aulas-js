let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.toString()) //Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined, isso não é legal!!!
console.log(!!produto.preco)
//delete produto.preco melhor forma de tirar o valor de algo
console.log(produto)

produto.preco = null //sem preço - Sempre optar por nulo, não undefined
console.log(!!produto.preco)
console.log(produto)
