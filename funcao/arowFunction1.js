//função "normal"
let dobro = function (a) {
    return 2 * a
}

//função arrow
dobro = (a) => {
    //essa função sempre vai ser anonima
    //se precisar chamar ela depois, vai precisar armazenar ela em uma variavel ou constante
    return 2 * a
}

//forma mais reduzida; funciona se tiver um unico parametro
//tirando o corpo da função, temos o retorno implicito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //Uma função sem parametros e que retorna o "'Olá'"; o return está implicito
ola = _ => 'Olá' //Uma função com um unico parametro, e que pode ser ignorado
console.log(ola())
