let a = 3

global.b = 123

this.c = 456
this.d = false
this.e ='teste'

console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel doida: sem var e let!
abc = 3 // não faça isso em casa!!! vai definir uma variavel global e não é legal, pois pode gerar um bug
console.log(global.abc)
