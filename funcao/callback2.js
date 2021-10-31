const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Listar notas menores que 7 sem callback
const notaBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notaBaixas1.push(notas[i])
    }
}

console.log(notaBaixas1)

//Listar notas menores que 7 com callback
/*Filter vai criar um novo array com base em uma função callback. 
Se essa função retornar True, significa que aquele elemento deve ser adicionado.
Se a função restornar False, o elemento não será adicionado.*/
const notaBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notaBaixas2)

const notaBaixas3 = notas.filter(nota => nota < 7)
console.log(notaBaixas3)

//Deixando o codigo mais funcional e criando uma função que podera ser reutilizado mais tarde em todo o sistema
const notasMenoresQue7 = nota => nota < 7
const notaBaixas4 = notas.filter(notasMenoresQue7)
console.log(notaBaixas4)
