//Usando callback; A ideia é passar uma função para outra função, 
// e dependendo de determinada ação, a função vai ser chamada de volta;
//Pode ser chamada varias vezes, ou uma unica vez
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)

}

//forEach é uma função dentro de 'fabricante'
//para cada elemento que ele encontrar dentro do array fabricante, ele vai chamar a função imprimir
fabricantes.forEach(imprimir)

fabricantes.forEach( fabricante => console.log(fabricante))