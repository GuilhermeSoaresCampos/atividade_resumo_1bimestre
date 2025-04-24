/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:Guilherme Henrique Soares Campos
*/

let teclado = require('prompt-sync')();

const totalPessoas: number = 50;

let somaIdadeHomens: number = 0;
let quantidadeHomens: number = 0;

let somaIdadeMulheres: number = 0;
let quantidadeMulheres: number = 0;

let pessoasLidas: number = 0;

while (pessoasLidas < totalPessoas) {
  const idade: number = parseInt(teclado(`Digite a idade da pessoa ${pessoasLidas + 1}: `));
  const sexo: string = teclado(`Digite o sexo (M/F) da pessoa ${pessoasLidas + 1}: `)();

  if (sexo === 'M') {
    somaIdadeHomens += idade;
    quantidadeHomens++;
    pessoasLidas++;
  } else if (sexo === 'F') {
    somaIdadeMulheres += idade;
    quantidadeMulheres++;
    pessoasLidas++;
  } else {
    console.log("Sexo inválido. Use 'M' ou 'F'.");
  }
}

const mediaHomens: number = quantidadeHomens > 0 ? somaIdadeHomens / quantidadeHomens : 0;
const mediaMulheres: number = quantidadeMulheres > 0 ? somaIdadeMulheres / quantidadeMulheres : 0;

console.log(`Média de idade dos homens: ${mediaHomens}`);
console.log(`Média de idade das mulheres: ${mediaMulheres}`);

