/*
Elabore um programa que leia um número. 
Se positivo armazene-o em A, se for negativo, em B. 
No final mostrar o resultado
*/

const readline = require("readline-sync");

const numero = readline.questionInt("Informe um numero: ");

let A;
let B;

// se o número for maior que zero, ou seja, positivo
// armazene em A
// senão, armazene em B

// if/else - se/senão

// se o numero for maior que zero, 
// a variável A recebe o numero
// senão, a variável B recebe o número
if (numero > 0) {
  A = numero;
} else { 
  B = numero;
}

console.log("Valor de A: ", A);
console.log("Valor de B: ", B);