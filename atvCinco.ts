/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno
*/

const teclado = require('prompt-sync')();

let nota1: number = parseInt(teclado(`Digite a nota: `));
let nota2: number = parseInt(teclado(`Digite a nota: `));
let nota3: number = parseInt(teclado(`Digite a nota: `));
let nota4: number = parseInt(teclado(`Digite a nota: `));
let nota5: number = parseInt(teclado(`Digite a nota: `));

let n1: number = (nota1);
let n2: number = (nota2);
let n3: number = (nota3);
let n4: number = (nota4);
let n5: number = (nota5);


let maior: number = n1;
let menor: number = n1;


if (n3 > maior) maior = n3;
if (n4 > maior) maior = n4;
if (n5 > maior) maior = n5;

if (n2 < menor) menor = n2;
if (n3 < menor) menor = n3;
if (n4 < menor) menor = n4;
if (n5 < menor) menor = n5;


let media: number = (n1 + n2 + n3 + n4 + n5) / 5;


let mostrar: boolean = true;

if (mostrar) {
  console.log("Maior nota:", maior);
  console.log("Menor nota:", menor);
  console.log("Média:", media);
}
