const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

/*vai imprimir o valor 'Global', por que a função carregou 
o valor da variavel no contexto em que ela estava definida*/
exec()