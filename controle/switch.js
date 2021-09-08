const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){ //valores passados como parametros para o switch não retorna 'true' or 'false'
        case 10: 
        //Se deixado sem um bloco seguinte do case, ele vai entender que vai ser este valor ou o proximo e imprimir o que está no proximo case
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: //Inserindo vários case em uma unica linha
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //Se o valor não se encaixar em nenhum dos case anteriores, este será o valor default de retorno
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
