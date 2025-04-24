/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno:Guilherme Henrique Soares Campos
*/
const teclado = require (`prompt-sync`)();
let valor: number = parseInt(teclado(`Digite um valor: `)); 
let intervalo: string = "";
let dentroDoIntervalo: boolean = false;

if (valor >= 10 && valor <= 100) {
    dentroDoIntervalo = true;

    if (valor >= 10 && valor < 20) {
        intervalo = "entre 10 e 20";
    } else if (valor >= 20 && valor < 30) {
        intervalo = "entre 20 e 30";
    } else if (valor >= 30 && valor < 40) {
        intervalo = "entre 30 e 40";
    } else if (valor >= 40 && valor < 50) {
        intervalo = "entre 40 e 50";
    } else if (valor >= 50 && valor < 60) {
        intervalo = "entre 50 e 60";
    } else if (valor >= 60 && valor < 70) {
        intervalo = "entre 60 e 70";
    } else if (valor >= 70 && valor < 80) {
        intervalo = "entre 70 e 80";
    } else if (valor >= 80 && valor < 90) {
        intervalo = "entre 80 e 90";
    } else if (valor >= 90 && valor <= 100) {
        intervalo = "entre 90 e 100";
    }
} else {
    dentroDoIntervalo = false;
    intervalo = "fora do intervalo de 10 a 100";
}


if (dentroDoIntervalo) {
    console.log(`O valor ${valor} está ${intervalo}.`);
} else {
    console.log(`O valor ${valor} está fora do intervalo de 10 a 100.`);
}
