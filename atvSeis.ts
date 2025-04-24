/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno:Guilherme Henrique Soares Campos
*/

let teclado = require('prompt-sync')();

let contador: number = 0;
let quantidadePares: number = 0;
let quantidadeImpares: number = 0;
let numerosPares: string = '';
let numerosImpares: string = '';

while (contador < 10) {
    let numero: number = parseInt(teclado("Digite um número inteiro: "));

    if (numero % 2 === 0) {
        quantidadePares++;
        numerosPares += numero + ' ';
    } else {
        quantidadeImpares++;
        numerosImpares += numero + ' ';
    }

    contador++;
}

console.log("Resultado:");
console.log("Quantidade de números pares:", quantidadePares);
console.log("Números pares digitados:", numerosPares);
console.log("Quantidade de números ímpares:", quantidadeImpares);
console.log("Números ímpares digitados:", numerosImpares);

