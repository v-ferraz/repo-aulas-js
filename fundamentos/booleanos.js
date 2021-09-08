let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Converte o valor para booleano; o ! nega o valor, e o segundo nega o primeiro !

console.log('Os verdadeiros ...') 
//Todos esses valores vão ser considerados como 'verdadeiros'; 
//numeros inteiros são verdadeiros, mesmo os negativos, menos o 0 que é falso
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos ...')
console.log(!!0)
console.log(!!'') //String vazia é falso
console.log(!!null)
console.log(!!NaN) //Not a Number; vai ser falso
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar ...')
console.log(!!('' || null || 0 || ' ')) //Usando 'ou'; vai retornar verdadeiro se uma das expressoes for verdadeiro; isso 'ou' isso 'ou' isso
console.log()

let nome = ''

console.log(nome || 'Desconhecido') //Caso isso ('nome') não esteja definido, use isso como valor
