/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:
*/
let teclado = require(`prompt-sync`)();

let soma: number = 0;
let quantidade: number = 0;
let numero: number = 0;
let saida: string = 'n';

do {
    let numero: number = parseInt(teclado("Digite um número:"));

    if (numero != 0) {
        soma = soma + numero;
        quantidade = quantidade + 1;
    }

    saida = teclado('Deseja sair? (s/n)');
} while (saida != 's')

if (quantidade > 0) {
    let media: number = soma / quantidade;
    console.log("A média dos números digitados é: " + media);
} else {
    console.log("Nenhum número válido foi digitado.");
}
