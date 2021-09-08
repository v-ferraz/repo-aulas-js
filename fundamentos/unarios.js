let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //retorna true nesta comparação pois ela é verificada antes do decremento da var num2 devido a procedencia 
console.log(num1 === num2)