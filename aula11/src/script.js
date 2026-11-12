// Funções

// Arrow  Function

// function multiplicar(a, b) {
//   return = a * b;
// }

// const multiplicar = function (a, b) {
//   return = a * b;
// }

const multiplicar = (a, b) => a * b;
console.log(multiplicar(7, 4));

console.log("");

// Arrow Function com apenas 1 parâmetro
const numeroQuadrado = a => a * a;
console.log(numeroQuadrado(10));

console.log("");

// Arrow Function em Método de Objeto
const pessoa = {
  nome: "Pedro",
  idade: "18",
    cumprimentar: function () {
      return "Olá, eu sou o " + this.nome + " e tenho " + this.idade + " anos de idade.";
    },
};

console.log(pessoa.cumprimentar());