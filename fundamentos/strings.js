const escola = "Cod3r"

console.log(escola.charAt(4)) //Vai pegar o valor da posição 4 da string e imprimir
console.log(escola.charAt(5)) //Se a posição passada não tiver nenhuma letra para retornar, não vai gerar erro e vai voltar nula
console.log(escola.charCodeAt(3)) //Esse metodo vai pegar o valor da string na posição passada, e converter o valor usando a tabela ASC em unicode
console.log(escola.indexOf('3')) //Vai retornar em que index este valor está na string

console.log(escola.substring(1)) //Metodo para retornar o valor apartir do indice denominado
console.log(escola.substring(0, 3)) //Vai do indice 0 até o indice 3, mas sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!")) //Usado para concatenar os valores
console.log('Escola ' + escola + "!") 
console.log(escola.replace(3, 'e')) //Substitui o valor do indice 3 pelo valor 'e'
console.log(escola.replace(/\d/, 'e')) //Usando expressoes regulares, vai pegar todos os digitos na variavel e substituir pelo valor 'e'
console.log(escola.replace(/\w/g, 'e')) //Espressão regular para substituir todas as letras e digitos - flag global 'g'

console.log('Ana,Maria,Pedro'.split(',')) //Cria um array com a string, usando o delimitador ','
