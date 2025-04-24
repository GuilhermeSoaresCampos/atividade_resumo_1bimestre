/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:Guilherme Henrique Soares Campos
*/
var teclado = require("prompt-sync")();
var totalPessoas = 50;
var somaIdadeHomens = 0;
var quantidadeHomens = 0;
var somaIdadeMulheres = 0;
var quantidadeMulheres = 0;
for (var i = 0; i < totalPessoas; i++) {
    var idade = parseInt(teclado("Digite a idade da pessoa ".concat(i + 1, ": ")));
    var sexo = teclado("Digite o sexo (M/F) da pessoa ".concat(i + 1, ": "));
    if (sexo === 'M') {
        somaIdadeHomens += idade;
        quantidadeHomens++;
    }
    else if (sexo === 'F') {
        somaIdadeMulheres += idade;
        quantidadeMulheres++;
    }
    else {
        console.log("Sexo inválido. Use 'M' ou 'F'.");
        i--;
    }
}
var mediaHomens = quantidadeHomens > 0 ? somaIdadeHomens / quantidadeHomens : 0;
var mediaMulheres = quantidadeMulheres > 0 ? somaIdadeMulheres / quantidadeMulheres : 0;
console.log("M\u00E9dia de idade dos homens: ".concat(mediaHomens));
console.log("M\u00E9dia de idade das mulheres: ".concat(mediaMulheres));
