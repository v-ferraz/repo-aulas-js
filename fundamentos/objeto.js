//{} par de chaves representa um objeto
//Dentro de js objeto é um conjunto de coleção 'chave=valor'
//objetos sãp != de json
//json é um formato textual
const prod1 = {}
prod1.nome = 'Celular Ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaços

console.log(prod1)

prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla : 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
