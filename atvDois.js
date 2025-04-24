/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno:
*/
var teclado = require("prompt-sync")();
var n1 = 0;
var n2 = 0;
var n3 = 0;
var variavelMaior = 0;
var variavelMeio = 0;
var variavelMenor = 0;
n1 = parseInt(teclado("Digite o valor do n\u00FAmero 1:"));
n2 = parseInt(teclado("Digite o valor do n\u00FAmero 2:"));
n3 = parseInt(teclado("Digite o valor do n\u00FAmero 3:"));
if (n1 > n2 && n1 > n3) {
    variavelMaior = n1;
    if (n2 > n3) {
        variavelMeio = n2;
        variavelMenor = n3;
    }
    else {
        variavelMeio = n3;
        variavelMenor = n2;
    }
}
else if (n2 > n1 && n2 > n3) {
    variavelMaior = n2;
    if (n1 > n3) {
        variavelMeio = n1;
        variavelMenor = n3;
    }
    else {
        variavelMeio = n3;
        variavelMenor = n1;
    }
}
else {
    variavelMaior = n3;
    if (n1 > n2) {
        variavelMeio = n1;
        variavelMenor = n2;
    }
    else {
        variavelMeio = n2;
        variavelMenor = n1;
    }
}
console.log("Os n\u00FAmeros em ordem decrescente s\u00E3o: ".concat(variavelMaior, ", ").concat(variavelMeio, ", ").concat(variavelMenor));
