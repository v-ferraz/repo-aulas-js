/* Função em JS é First-Class Object (Citizens)
Higher-order function
Valores de uma função é opcional, você pode ou não retornar algo, e caso você não retorne nada, 
a função retorna undefined por default
Em função, criar um bloco é obrigatório, mesmo que esteja vazia'{}', 
diferente de outras estruturas que não são obrigatorias definir os blocos
*/

// Criar de forma literal
function fun1() { }

/* Armazenar em uma variável
Nota: a função foi definida como anonima, e atribuida para uma constante. 
Apartir disso, a função pode ser referenciada pela constante seguoda dos parenteses, 
que vai invocar diretamente a função
*/
const fun2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
