/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:
*/

let soma: number = 0;
let continuar: boolean = true;

while (continuar) {
    
    let entrada: string = prompt("Digite um número:")||"0";
    
    
    let numero: number = parseFloat(entrada);


    soma += numero;

    
    console.log(`Soma atual: ${soma}`);

    
    if (soma > 100) {
        continuar = false;
    }
}

console.log("A soma dos números digitados superou 100.");
