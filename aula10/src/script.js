// Funções
// Definindo valor padrão para parâmetros de função
function soma(a, b = 6) {
  let resultadoSoma = a + b;
  return resultadoSoma;
}
console.log(soma(4, 10));

console.log("");

// Utilizando retorno de função em expressão
function multiplicar(a, b) {
  return a * b;
}
let resultadoExpressao = multiplicar(4, 5) * 4;
console.log(resultadoExpressao);

console.log("");

// Função retornando String
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("Richard", "Oliveira"));

console.log("");

// Retorno para encerrar execução de função
function subtracao(a, b) { 
  return "Somente a dor coletiva gera união."
  return a - b;

}
console.log(subtracao(5, 2));

console.log("");

// Retorno em condição lógica
function verificarIdade(idade) {
  if (idade < 18) {
    return "Você é menor de idade.";
  }
  return "Você é maior de idade.";
}
console.log(verificarIdade(16));

console.log("");

// Retornando valor no HTML
const elementoh4 = document.querySelector(".ex1");
function exibirMensagem() {
  return "Você é legal!";
}
elementoh4.innerHTML = exibirMensagem();

console.log("");

// Expressão de Função
let multiplicar2 = function (a, b) {
  return a * b;
};
console.log(multiplicar2(5, 6));

console.log("");

// Expressão de função sendo retornada em uma função
function executarSaudacao(funcao) {
  return funcao();
}
let saudacao = function (){
  return "Olá, SP15!";
};
console.log(executarSaudacao(saudacao));