//passando um destructuring para uma função
//vai passar um objeto para a função - vai tirar esses dois valores e já entregar para quem chamar a função esses 2 valores prontos
function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({ max: 60 }))
console.log(rand({}))
console.log(rand())
