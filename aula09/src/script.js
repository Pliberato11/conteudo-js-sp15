// Laços de Repetição (Loops)

// Laço for
for (let acumuladora = 0; acumuladora <= 10;  acumuladora++) {
  console.log(acumuladora);
}

console.log("");

const carros = ["Brasília", "Porsche", "Opala", "Audi", "BMW"];
let tamanhoArray = carros.length;

for (let acumuladora = 2; acumuladora < tamanhoArray; acumuladora++) {
  console.log(carros[acumuladora]);
}

console.log("");

let i, x = '';
for (i = 0; i <= 5; i++) {
  x += i;
//Aqui vai contar do 0 até 5
}

console.log("");

// Laço while
let acumuladora = 0;
while (acumuladora <= 0) {
  console.log(acumuladora);
  acumuladora++;
}
console.log("");

//Laço do While

let acumuladora2 = 0;
do {
  console.log(acumuladora2);
  acumuladora2++;
} while (acumuladora2 <= 10);

console.log("");

//Calculadora
do {
alert("Calculadora");
let numero1 = parseFloat(prompt("Inserir primeiro número do cálculo: "));
let operador = prompt("Informe o operador aritmético: ");
let numero2 = parseFloat(prompt("Inserir segundo número do cálculo: "));
switch (operador) {
//Adição
  case"+":
  let soma = numero1 + numero2;
  alert(`${numero1} + ${numero2} = ${soma}`);
  break;

//Substração
  case"-":
  let subtracao = numero1 - numero2;
  alert(`${numero1} - ${numero2} = ${subtracao}`);
  break;
  
//Multiplicação
  case"*":
  let multiplicacao = numero1 * numero2;
  alert(`${numero1} * ${numero2} = ${multiplicacao}`);
  break;

//Divisão
  case"/":
  let divisao = numero1 / numero2;
  alert(`${numero1} / ${numero2} = ${divisao}`);
  break;
}

condição = prompt("Você deseja continuar calculando (y/n)?");

} while (condição === "y");