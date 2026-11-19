// Métodos de Arrays
const frutas = ["Morango", "Abacaxi", "Maracujá", "Caju", "Uva", "Abacate"];
console.log(frutas);

console.log("");

// Método at()
let frutasAt = frutas.at(2);
console.log(frutasAt);

console.log("");

// Método join()
let frutasJoin = frutas.join(" - ");
console.log(frutasJoin);

console.log("");

// Método pop()
let frutasPop = frutas.pop();
console.log(frutas);
console.log(frutasPop);

console.log("");

// Método push()
let frutasPush = frutas.push("Maçã");
console.log(frutas);

console.log("");

// Método shift()
let frutasShift = frutas.shift();
console.log(frutas);
console.log(frutasShift);

console.log("");

// Método unshift()
let frutasUnshift = frutas.unshift("limão");
console.log(frutas);

console.log("");

// Alterando Elemento de Array
frutas[1] = "Kiwi";
console.log(frutas);

console.log("");

// Método isArray()
console.log(Array.isArray(frutas));

console.log("");

// Método concat()
const frutas2 = ["Melancia", "Jabuticaba", "Pêssego"];
const frutasConcat = frutas.concat(frutas2);
console.log(frutasConcat);

console.log("");

// Método copyWithin()
const frutasCopyWithin = frutas.copyWithin(3, 0);
console.log(frutasCopyWithin);

console.log("");

// Exemplo de Matriz em Arrays
// const matriz = [[0, 1, 2], [3, 4, 5]];
const matriz = [
  [0, 1, 2],
  [3, 4, 5],
];
console.log(matriz);
console.log(matriz[1][2]);

console.log("");

// Método flat()
const matrizFlat = matriz.flat();
console.log(matrizFlat);

console.log("");

// Método flatMap()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
const numerosFlatMap = numeros.flatMap( (numero) => {
  return [numero, numero * 10];
} );
console.log(numerosFlatMap);

console.log("");

// Método splice()
const cores = ["Azul", "Branco", "Laranja"];
console.log(cores);
cores.splice(1, 0, "Roxo", "Verde");
console.log(cores);

console.log("");

// Método toSpliced()
const meses = ["Jan", "Fev", "Mar", "Abr"];
console.log(meses);

const mesesAlterado = meses.toSpliced(0, 2);
console.log(mesesAlterado);
console.log(meses);

console.log("");

// Método slice()
const frutas3 = ["Laranja", "Limão", "Pitanga", "Acerola",];
console.log(frutas3);
const frutasSlice = frutas3.slice(2);
console.log(frutasSlice);
const numeros2 = [1, 2, 3, 4];
const numeros2Slice = numeros2.slice(0, 3);
console.log(numeros2Slice);

console.log("");