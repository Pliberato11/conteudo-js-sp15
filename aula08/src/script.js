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