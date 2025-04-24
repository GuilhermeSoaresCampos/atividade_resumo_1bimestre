/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno:
*/
var teclado = require("prompt-sync")();
var entrada1 = parseInt(teclado("Digite um n\u00FAmero: "));
var entrada2 = parseInt(teclado("Digite um n\u00FAmero: "));
var numero1 = parseInt(entrada1);
var numero2 = parseInt(entrada2);
var inicio = Math.min(numero1, numero2);
var fim = Math.max(numero1, numero2);
var impar;
console.log("N\u00FAmeros \u00EDmpares entre ".concat(inicio, " e ").concat(fim, ":"));
for (var i = inicio; i <= fim; i++) {
    impar = i % 2 !== 0;
    if (impar) {
        console.log(i);
    }
}
