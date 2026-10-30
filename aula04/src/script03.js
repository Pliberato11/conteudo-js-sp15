// Operadores de Comparação

// Comparador de Igualdade
let a = 5;
let comparadorIgualdade = a == 6; //Tá falando que 5 = 6
console.log(comparadorIgualdade);

console.log("");

// Comparador de Igualdade e Tipo
let comparadorIgualdadeTipo1 = (a == 5); //Tá falando que 5 = 5
let comparadorIgualdadeTipo2 = (a == "5"); //Tá falando que o número 5 = um texto escrito 5. nn deixa de tar certo
console.log(comparadorIgualdadeTipo1);
console.log(comparadorIgualdadeTipo2);

console.log("");

// Comparador de Não Igualdade (Diferenças) e Tipos
let comparadorDiferenca1 = (a != 8);
let comparadorDiferenca2 = (a != 5);
let comparadorDiferenca3 = (a != "5");
console.log(comparadorDiferenca1);
console.log(comparadorDiferenca2);
console.log(comparadorDiferenca3);

console.log("");

// Comparador de Não Igualdade (Diferenças) e Tipos
let comparadorDiferencaTipo1 = (a != 8);
let comparadorDiferencaTipo2 = (a != 5);
let comparadorDiferencaTipo3 = (a != "5");
console.log(comparadorDiferencaTipo1);
console.log(comparadorDiferencaTipo2);
console.log(comparadorDiferencaTipo3);

console.log("");

// Comparador Maior Que
let maiorQue1 = (a > 5);
let maiorQue2 = (a > 3);
let maiorQue3 = (a > 8);
console.log(maiorQue1);
console.log(maiorQue2);
console.log(maiorQue3);

console.log("");

//Comparador Menor Que
let menorQue1 = (a < 5);
let menorQue2 = (a < 3);
let menorQue3 = (a < 8);
console.log(menorQue1);
console.log(menorQue2);
console.log(menorQue3);

console.log("");

//Comparador Maior ou Igual
let maiorIgualQue1 = (a >= 5);
let maiorIgualQue2 = (a >= 3);
let maiorIgualQue3 = (a >= 8);
console.log(maiorIgualQue1);
console.log(maiorIgualQue2);
console.log(maiorIgualQue3);

console.log("");

//Comparador Menor ou Igual
let menorIgualQue1 = (a <= 5);
let menorIgualQue2 = (a <= 3);
let menorIgualQue3 = (a <= 8);
console.log(menorIgualQue1);
console.log(menorIgualQue2);
console.log(menorIgualQue3);

//Condicionais
let idade = 13;
let mensagem;
if (idade < 18) {
  mensagem = "Proibido para menores";
  console.log(mensagem);
}
// if (idade >= 18) {
//   mensagem = "Permitido"
//   console.log(mensagem)
// }