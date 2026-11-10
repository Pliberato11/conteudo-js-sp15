// Funções

// Função de Multiplicação
function multiplicar (a,b) {
  return a * b;
}

console.log(multiplicar(10, 3));
console.log(multiplicar(4, 7));
console.log(multiplicar(20, 8));
console.log(multiplicar(3, 5));

console.log("");

// Função de Adição
function somar (a,b) {
  return a + b;
}

console.log(somar(7, 8));
console.log(somar(6, 7));
console.log(somar(14, 15));
console.log(somar(9, 20));

console.log("");

// Função de Subtração
function subtrair (a,b) {
  return a - b;
}

console.log(subtrair(8, 3));
console.log(subtrair(7, 4));
console.log(subtrair(19, 5));
console.log(subtrair(2, 1));

console.log("");

// Função de Divisão
function dividir (a,b) {
  return a / b;
}

console.log(dividir(10, 2));
console.log(dividir(22, 7));
console.log(dividir(1028, 27));
console.log(dividir(16, 4));

console.log("");

let carName = "Porshe";
function myFunction() {
  let carName = "Volvo";
  console.log(carName)
}

// Função com parâmetro
function paraCelsius(grausFahrenheit) {
  let calculoConversao = (5/9) * (grausFahrenheit - 32);

  return `${grausFahrenheit}º Fahrenheit convertido para Celsius é igual a: ${calculoConversao}ºC`;
}
console.log(paraCelsius(212));