/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno:Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();
let x : number = 0;
let y : number = 0;
let y2 : number = 0;

x = parseInt(teclado(`Digite o valor de x:`));
y = parseInt(teclado(`Digite o valor de y:`));

y2 = x
x = y 
y = y2 

console.log(`O valor de X é ${x} e o valor de Y é ${y}`);


