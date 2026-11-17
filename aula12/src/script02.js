// Objetos
// Construtores de Objetos

// const pessoa = {
//   nome: "Pedro",
//   sobrenome: "Liberato",
//   idade: 18,
//   altura: 1.73,
// };

function Pessoa(nome, sobrenome, idade, altura) {
  this.nomePessoa = nome;
  this.sobrenomePessoa = sobrenome;
  this.idadePessoa = idade;
  this.alturaPessoa = altura;
}
const minhaPessoa = new Pessoa("Pedro", "Liberato", 18, 1.73);
const meuIrmao = new Pessoa("Guilherme", "Carneiro", 30, 1.83);
console.log(minhaPessoa);
console.log(meuIrmao);

meuIrmao.carro = "Eclipse";
minhaPessoa.moto = "Ducati";

console.log(Pessoa);