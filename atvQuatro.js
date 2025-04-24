/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:
*/
var teclado = require("prompt-sync")();
var soma = 0;
var quantidade = 0;
var numero = 0;
var saida = 'n';
do {
    var numero_1 = parseInt(teclado("Digite um número:"));
    if (numero_1 != 0) {
        soma = soma + numero_1;
        quantidade = quantidade + 1;
    }
    saida = teclado('Deseja sair? (s/n)');
} while (saida != 's');
if (quantidade > 0) {
    var media = soma / quantidade;
    console.log("A média dos números digitados é: " + media);
}
else {
    console.log("Nenhum número válido foi digitado.");
}
