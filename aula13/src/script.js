// Arrays
// Primeiro Array
const frutas = ["Banana", "Tomate", "Manga", "Melância"];
console.log(frutas);

console.log("");

// Array com itens adicionados posteriormente
let carros = [];
carros[0] = "Punto";
carros[1] = "Celta";
carros[2] = "Uno";
console.log(carros);

console.log("");

// Criando Array com Construtor
const motos = new Array("CB-500", "MT-07", "Panigale");
console.log(motos);

console.log("");

// Acessando Elementos de Arrays
const frutas2 = ["Melão", "Uva", "Maçã"];
let fruta1 = frutas2[0];
let fruta2 = frutas2[1];
let fruta3 = frutas2[2];

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

console.log("");

// Alterando Elemento de Array
const comidas = ["Pizza", "Sanduíche", "Macarrão"];
console.log(comidas);
comidas[1] = "Churrasco";
console.log(comidas);

console.log("");

// Convertendo Array para String
const frutas3 = ["Carambola", "Kiwi", "Framboesa"];
console.log(frutas3);
let frutas3String = frutas3.toString();
console.log(frutas3String);

console.log("");

// Utilizando a propriedade length
let comprimentoFrutas3 = frutas3.length;
console.log(comprimentoFrutas3);

console.log("");

// Acessando o Último Item do Array
const carros2 = ["McLaren", "Porsche", "Audi", "Toyota", "Nissan", "Cadillac"];
let comprimentoCarros2 = carros2.length;
console.log(comprimentoCarros2);
let ultimoItemCarros2 = comprimentoCarros2 - 1;
console.log(carros2[ultimoItemCarros2]);
console.log(carros2);

console.log("");

// Utilizando Laço de Repetição para Percorrer o Array
const alunos = ["Madu", "Giovanna", "Paulo", "Daiana", "Igor"];
let comprimentoAlunos = alunos.length;
console.log(alunos);
console.log(comprimentoAlunos);
for (let acumuladora = 0; acumuladora < comprimentoAlunos; acumuladora++) {
  console.log(alunos[acumuladora]);
}

console.log("");

// Percorrendo Array com o Método forEach
alunos.forEach( (aluno) => {
  console.log(aluno);
} );

console.log("");

// Adicionando Elementos no Array com o Método Push
console.log(alunos);
alunos.push("Cristiano", "Pedro");
console.log(alunos);

console.log("");

// Adicionando Elementos no Array com a Propriedade Length
alunos[alunos.length] = "Danilo";
console.log(alunos);

console.log("");

// Exemplo de Índices Altos Sendo Preenchidos em Array e Gerando Buracos
alunos[14] = "Sara";

console.log(alunos);

console.log("");