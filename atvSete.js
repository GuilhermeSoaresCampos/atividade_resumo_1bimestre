/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:
*/
var soma = 0;
var continuar = true;
while (continuar) {
    var entrada = prompt("Digite um número:") || "0";
    var numero = parseFloat(entrada);
    soma += numero;
    console.log("Soma atual: ".concat(soma));
    if (soma > 100) {
        continuar = false;
    }
}
console.log("A soma dos números digitados superou 100.");
