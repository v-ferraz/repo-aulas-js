let compararComThis = function (param) {
    console.log(this === param)
    
}

compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let compararComThisArrow = param => console.log(this === param) //Arrow é mais previsivel; Dentro do arrow, o this aponta para o objeto corrente dentro da função
compararComThisArrow(global)
compararComThisArrow(module.exports)

//Usando um bind dentro de uma função arrow para ver se é possivel alterar a referencia this
compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj)
compararComThisArrow(module.exports)
