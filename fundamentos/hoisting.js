/*Uma curiosidade: o JS joga a criação da variavel 'pra cima', então mesmo 'a' estando definido apenas
depois de ser imprimida a primeira vez, por tras, o js já colocou a variavel definida e sem valor (undefined)
*/
console.log('a = ', a)
var a = 2
console.log('a = ', a)

//Esse efeito de "içamento" não ocorre com let
console.log('b = ', b)
let b = 2
console.log('b = ', b)
