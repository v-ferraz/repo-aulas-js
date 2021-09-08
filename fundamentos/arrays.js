const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
//valores[10] = 11 - Essa atribuição vai funcionar, mas os valores no intervalo ficarão 'Undefined'
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Usado para adicionar novos elementos dentro de um array
console.log(valores)

console.log(valores.pop()) //pegar ultimo valor e retornar, retirando valor do array

delete valores[0] //deleta o valor pelo indice informado
console.log(valores)
console.log(typeof valores) //Um array é um object dentro do js
