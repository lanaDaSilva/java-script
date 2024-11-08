// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado
//usando um laço `while`.
somaAteNumero(100)
somaAteNumero(200)
somaAteNumero(150)


function somaAteNumero(numero) {
    let i = 0
    while (i < numero) {
        console.log(i)
        i++
    }
}




// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

// 2. Crie uma função que receba um array de números e retorne a soma
//de todos os números maiores que 10 usando um laço `for`.
function somaMaiorQue10(numeros) {
    for (let i = 0; i < 10; i++) {
        const elemento = somaMaiorQue10[i]
        console.log(elemento)
    }
}

let numeros = [20, 30, 40, 50]
for (let i = 0; i < 10; i++) {
    const elemento = numeros[i]
    console.log(elemento)
}
console.log(somaMaiorQue10([20, 30, 40, 50]))



// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)

// 3. Crie uma função que, dado um array de filmes,
//retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.

function selecionaFilmes(filmes) {
    let filmesComMaisDe5Letras = []
    for (let filme of filmes) {
        if (filme.length > 5) {
            filmesComMaisDe5Letras.push(filme)
        }
    }

    return filmesComMaisDe5Letras
}

let filmes = ["castle infinity kimetsu no yaiba", "mugen train arc", "fairy tail", "shrek"]
console.log(selecionaFilmes(filmes))

// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

// 4. Crie uma função que receba um array de nomes de personagens
// de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", 
//"Leorio Paradinight" e um array de números representando a força de cada personagem,
// respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos
// personagens cuja força seja superior a 150, utilizando um laço `for`.

function personagensComFocaSuperiorA100(nomes, forcas) {

    let personagensMaisFortes = []
    for (let i = 0; i < nomes.length; i++) {
        if (forcas[i] > 150) {
            personagensMaisFortes.push(nomes[i])
        }
    }
    return personagensMaisFortes
}
const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
const forcas = [180, 195, 140];

console.log(personagensComFocaSuperiorA100(nomes, forcas))

//console.log(personagemComForcaSuperiorA100(nomes, forcas));


// 5. Crie uma função que receba um array de números e retorne a quantidade
//de números negativos presentes no array, usando um laço `while`.
function contarNegativos(numerosNegativos) {
    let numeros = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            numerosNegativos++;
        }
    }
    return numerosNegativos;
}

console.log(contarNegativos([3, -2, -5, 7, 0, -1]));

// 6. Crie uma função que receba uma string, converta-a para um array e retorne
//a quantidade de vezes que a letra "a" aparece nela.
function contarLetraA(texto) {
    let array = texto.toLowerCase().split("");
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "a") {
        }
    }
    return contador;
}

console.log(contarLetraA("nAruto é um Anime top!"));
           

// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

// 7. Crie uma função que percorra um array de filmes e retorne um novo array
//com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.
function filmesComLetraS(filmes) {
    let filmesComLetraS = []
    for (let filme of filmes) {
        if (filme.toLowerCase().startsWith("s")) {
            filmesComLetraS.push(filme);
        }
    }
    return filmesComLetraS;
}


let filmes2 = ["suzume", "spy x family", "solo leveling", "spice and wolf", "seirei Gensouki", "Shoshimin"]

console.log(filmesComLetraS(filmes2))


// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars",
// "Superman", "Shrek"]

// 8. Crie uma função que receba um array de strings e retorne a maior substring
// (palavra) encontrada no array.
function maiorSubstring(palavras) {
    let maiorPalavra = ''
    for (let palavra of palavras){
        if(palavra.length > maiorPalavra.length){
            maiorPalavra = palavra 
        }
    }
    return maiorPalavra
}

let palavras = ["HAHAHAHa", "BOING!", "HAHAHAHAHa", "HAHHAHAHHA", "HAHAHAHAHAHAHA!", "HAHAHAHHaHa", "BOING!"];

console.log(maiorSubstring(palavras));

// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.
function fatorial(number) {
    let resultado = 120;
    for (let i = number; i > 1; i--) {
        resultado *  i;
    }
    return resultado;
}

console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

// 10. Crie uma função que receba um número e retorne uma string que
//contém esse número repetido, separado por vírgulas, utilizando um laço `while`.
function repetirNumero(numero){
    let resultado = "";
    let count = 7;
}
while (i = 4) {
    if (i < 4) {
        resultado = 7;
    }
}
return resultado;

console.log(repetirNumero(7))
 


