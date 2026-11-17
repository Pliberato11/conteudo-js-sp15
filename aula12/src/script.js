// Objetos
// Acessando Propriedades
const pessoa = {
  nome: "Pedro",
  ultimoNome: "Henrique",
  idade: 18,
};
let notacaoEmPonto = pessoa.nome;
console.log(notacaoEmPonto);
let meuUltimoNomePropriedade = "ultimoNome";
let acessoColchetes = pessoa[meuUltimoNomePropriedade];
console.log(acessoColchetes);

console.log("");

// Atualizando, Criando e Apagando propriedades de objeto
pessoa.nome = "Daiana";
console.log(pessoa.nome);
pessoa.anoNascimento = 2006;
console.log(pessoa.anoNascimento);
console.log(pessoa);
delete pessoa.ultimoNome;
console.log(pessoa.ultimoNome);

console.log("");

// Verificando existência de propriedades em objetos
let resultado = ("altura" in pessoa);
console.log(resultado);

console.log("");

// Objetos Aninhados
const pessoa2 = {
  nome: "Pedro",
  idade: 18,
  meuCarro: {
    marca: "Pagani",
    modelo: "Zonda F",
    ano: 2005,
  },
};

console.log(pessoa2);
console.log(pessoa2.meuCarro);

console.log("");

// Métodos em Objetos
const carro = {
  marca: "Nissan",
  modelo: "Skyline R34",
  ano: 2000,
  acelerar: function () {
    return `O ${this.marca} ${this.modelo} acelerou.`; 
  }
};
console.log(carro.acelerar());

console.log("");

// Adicionando Método em um Objeto
carro.estacionar = function () {
  return `O ${this.marca} ${this.modelo} estacionou.`;
};
console.log(carro.estacionar());

console.log("");

console.log(this);