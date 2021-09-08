function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

/*Com do/while é uma estrutura que garante que ao menos uma vez o laço vai ser executada, 
pois a validação se certo valor é verdadeiro ou falso será depois da primeira execução;
Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, apenas inicializa-la*/
do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)

} while (opcao != -1)

console.log('Até a próxima')
