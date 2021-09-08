const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    /* break vai interromper a execução do laço e seguir para a próxima sentença/bloco de código corrente.
    O break não age dentro do 'if', mas no bloco externo mais proximo suportado(apenas for ou switch),
    e neste caso de bloco superior 'for*/
    } 
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue
        /* continue vai interromper a execução atual e seguir para a próxima sem sair do laço.
        Da mesma forma que o 'break', o continue não age no if, mas sim no laço mais externo suportado
        */
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('Usando rotulos')
/*Não usar esse metodo!!! 
Isso remete muito a forma de programação procedural onde tinha apenas pilhas de códigos feitas uma sob a outra.
A forma mais interessante é criar metodos separados e ir quebrando para fazer algo mais elegante e mais facil de manter*/
externo: for(a in nums){
    for (b in nums){
        if (a == 2 && b == 3) break externo //este 'break' vai parar o 'for' do rotulo. Se deixar sem o rotulo, vai parar o 'for' mais interno
        console.log(`Par = ${a},${b}`)
    }
}
