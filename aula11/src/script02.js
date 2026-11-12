// Objetos

// Objetos simples no JavaScript
const carro = {
  marca: "Porshe",
  modelo: 911,
  cor: "Vinho",
  ano: 2022,
}
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);

console.log("");

const pessoa = {
  nome: "Pedro",
  peso: 58,
  altura: 1.73,
  registro: 67455476,
  idade: 18,
  emprego: false,
  exibirInformacoes: function () {
    
    let saidaEmprego = (this.emprego === false) ? "Não" : "Sim";
    
    return `
      Meu nome é: ${this.nome}
      Minha idade é: ${this.idade}
      Minha altura é: ${this.altura}
      Eu trabalho?: ${saidaEmprego}
      Eu peso: ${this.peso} kg
      E meu número de registro é: ${this.registro}
    `;
  },
};

console.log(pessoa.exibirInformacoes());

console.log(document);