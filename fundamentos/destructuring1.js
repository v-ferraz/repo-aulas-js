// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// o par de chaves representa o destructure; descontruir algo
const { nome, idade} = pessoa // tire de dentro do objeto 'nome' e 'idade'; qual objeto: pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //definindo valor default caso não retorne nada 
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: {numero, agencia}} = pessoa
console.log(numero, conta)
