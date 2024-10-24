// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Exiba o nome no console.

 let nome = "Alane"

 console.log(nome)

// 2. Crie uma constante chamada `PI` e atribua o valor 3.14. Exiba o valor no console.

const PI = 3.14
console.log(PI)

// 3. Crie uma variável `idade`, atribua um valor e depois altere para um novo valor. Exiba ambos no console.

let idade = 15 
let numero = idade + 16 
console.log(idade + numero)
// 4. Crie duas variáveis de string, `primeiroNome` e `sobrenome`, e exiba o nome completo concatenado.
let primeiroNome = "Alane"
let sobrenome = "Thewes"
console.log(primeiroNome + sobrenome)

// 5. Dada a string `mensagem = "Olá, mundo!"`, exiba a mensagem em letras maiúsculas.

let mensagem = "Olá mundo!"
let fraseMaiuscula = console.log(mensagem.toUpperCase())

// 6. Crie um array com os nomes de três frutas e exiba o segundo elemento do array.

const cestafrutas = ["cacau","abacaxi","amora"]
console.log(cestafrutas[1])

// 7. Crie um array com três números e adicione um novo número no final. Exiba o array atualizado.

let numeros = [1, 2, 3 ]

numeros.push(4)

console.log(numeros) // [ 1, 2, 3, 4 ]

// 8. Crie duas variáveis, `a` e `b`, atribua valores numéricos a elas e exiba a soma.
let primeiro = 20 
let segundo = 10 
let resultado = primeiro + segundo
console.log(resultado)
// 9. Calcule a média de três números armazenados em variáveis e exiba o resultado.

let numero2 = 4
let  numero3=6
let numero4=9
let media1 = (numero2 + numero3 + numero4)/3
console.log(media1)

// 10. Crie uma variável `contador` inicializada em 0, incremente-a três vezes e exiba seu valor final.
let contador = 0 
contador++
contador++
contador++
console.log(contador)

// 11. Crie duas variáveis booleanas, `chuvendo` e `frio`, e use um operador lógico para verificar se deve levar um guarda-chuva.
let chuvendo = true 
let fria = false
console.log("preciso levar guarda - chuva?" , chuvendo || fria)

// 12. Crie uma variável `idade` e use um operador lógico para verificar se a pessoa pode dirigir (idade >= 18).
let idade1 = 16
console.log(idade1>=18)

// 13. Crie duas variáveis `x` e `y`, atribua valores diferentes e verifique se são iguais.
let x = 21 
let y = 12 
console.log(x===y)

// 14. Crie uma variável `idade` e verifique se a pessoa é maior de idade (idade >= 18) e exiba uma mensagem correspondente.
let idade2 = 18 
console.log(idade2 >=18)

// 15. Crie duas strings, `senha1` e `senha2`, e verifique se elas são iguais.
let  senha1 = "lovelinha099"
let  senha2 = "lovelinha099"
console.log("essas senhas não são iguais?" , senha1 === senha2 )

// 16. Crie uma string e exiba o número de caracteres que ela contém.
let numeroDeCaracteristicas="eu chorei lágrimas de ouro por você"
console.log(numeroDeCaracteristicas.length)

// 18. Crie uma variável numérica e verifique se é par ou ímpar usando um operador aritmético.
let numero1 = 9
console.log(`${numero1} é par? ${ numero1 % 2 === 0 } `)

// 20. Crie duas variáveis, `nota1` e `nota2`, calcule a média e verifique se a média é maior ou igual a 7.
 let nota1=9
let nota2=5
console.log(nota1 + nota2)/2

let media = (nota1 + nota2)
console.log("aluno passou?",media >=7)
