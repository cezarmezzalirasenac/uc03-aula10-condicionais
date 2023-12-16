
const readline = require("readline-sync")

// 1- Ler o valor do salário base
const salario_base = readline.questionFloat("Informe o salário base: ")

// 2- Ler o valor da gratificação
const gratificao = readline.questionFloat("Informe a gratificacao: ")

// 3- Preciso somar ambos os valores 
// em uma variável chamada salario bruto

const salario_bruto = salario_base + gratificao

// 4- Se o salário for menor que 1000, 
// calcular o valor de IR sobre 15% 
// do salário bruto
// 5- Senão,  calcular o valor de IR sobre 
// 20% do salário bruto

let valor_ir = 0;

if (salario_bruto < 1000) {
  valor_ir = salario_bruto * (15 / 100)
} else {
  valor_ir = salario_bruto * (20 / 100)
}


// 6- Calcular o salário liquido,
// que é a diferença entre
// o salário bruto e o IR

const salario_liquido = salario_bruto - valor_ir;

// 7- Imprimir o salário liquido

console.log(`Salário líquido: ${salario_liquido}`)