console.log('01)', '1' == 1) // é igual pois os valores são os mesmos
console.log('02)', '1' === 1) // embora os valores sejam iguais, são estritamente diferentes, pois um é string e outro number
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >=2)

const d1 = new Date(0) //Como referencia de marco '0', js usa a data 01/01/1970
const d2 = new Date(0)

console.log('09)', d1 === d2) //retorna falso pois neste caso a comparação feita na referencia de memoria são diferentes
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)
