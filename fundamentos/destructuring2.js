const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] /* Dificilmente usado; Desistruturando o array seria, 
                                              ignore o primeiro valor (a posição está vazia do lado da constante), no segundo array, 
                                              ignore o primeiro valor novamente, e pegue o valor da segunda posição e atribua na variavel 'nota'*/
console.log(nota)