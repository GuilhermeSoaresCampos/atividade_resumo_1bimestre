/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno:Guilherme Henrique Soares Campos
*/
var valor = 37;
var dentroDoIntervalo = false;
var mensagem = "";
if (valor >= 10 && valor < 20) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 10 e 20.";
}
else if (valor >= 20 && valor < 30) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 20 e 30.";
}
else if (valor >= 30 && valor < 40) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 30 e 40.";
}
else if (valor >= 40 && valor < 50) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 40 e 50.";
}
else if (valor >= 50 && valor < 60) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 50 e 60.";
}
else if (valor >= 60 && valor < 70) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 60 e 70.";
}
else if (valor >= 70 && valor < 80) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 70 e 80.";
}
else if (valor >= 80 && valor < 90) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 80 e 90.";
}
else if (valor >= 90 && valor <= 100) {
    dentroDoIntervalo = true;
    mensagem = "O valor está entre 90 e 100.";
}
else {
    mensagem = "O valor está fora dos intervalos de 10 até 100.";
}
console.log(mensagem);
