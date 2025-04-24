/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:Guilherme Henrique Soares Campos
*/
var teclado = require('prompt-sync')();
console.log("Escolha um modelo de carro:");
console.log("1 - Fusca - R$ 20000");
console.log("2 - Gol - R$ 30000");
console.log("3 - Civic - R$ 60000");
console.log("4 - Opala - R$ 120000");
var escolhaCarro = parseInt(teclado("Digite o número do carro que você deseja comprar: "));
var formaPagamento = parseInt(teclado("Escolha a forma de pagamento (à vista = 0 ou parcelado = 1): "));
var modelo, preco;
if (escolhaCarro === 1) {
    modelo = "Fusca";
    preco = 20000;
}
else if (escolhaCarro === 2) {
    modelo = "Gol";
    preco = 30000;
}
else if (escolhaCarro === 3) {
    modelo = "Civic";
    preco = 60000;
}
else if (escolhaCarro === 4) {
    modelo = "Opala";
    preco = 120000;
}
else {
    console.log("Escolha inválida.");
}
var precoFinal;
if (formaPagamento === 0) {
    precoFinal = preco * 0.85;
}
else if (formaPagamento === 1) {
    precoFinal = preco * 1.13;
}
else {
    console.log("Forma de pagamento inválida.");
}
console.log("Voc\u00EA escolheu o ".concat(modelo, " por R$ ").concat(preco));
console.log("Forma de pagamento: ".concat(formaPagamento));
console.log("Valor final: R$ ".concat(precoFinal));
