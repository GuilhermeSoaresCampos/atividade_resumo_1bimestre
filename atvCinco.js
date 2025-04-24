/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno
*/
var teclado = require('prompt-sync')();
var nota1 = parseInt(teclado("Digite a nota: "));
var nota2 = parseInt(teclado("Digite a nota: "));
var nota3 = parseInt(teclado("Digite a nota: "));
var nota4 = parseInt(teclado("Digite a nota: "));
var nota5 = parseInt(teclado("Digite a nota: "));
var n1 = (nota1);
var n2 = (nota2);
var n3 = (nota3);
var n4 = (nota4);
var n5 = (nota5);
var maior = n1;
var menor = n1;
if (n3 > maior)
    maior = n3;
if (n4 > maior)
    maior = n4;
if (n5 > maior)
    maior = n5;
if (n2 < menor)
    menor = n2;
if (n3 < menor)
    menor = n3;
if (n4 < menor)
    menor = n4;
if (n5 < menor)
    menor = n5;
var media = (n1 + n2 + n3 + n4 + n5) / 5;
var mostrar = true;
if (mostrar) {
    console.log("Maior nota:", maior);
    console.log("Menor nota:", menor);
    console.log("Média:", media);
}
