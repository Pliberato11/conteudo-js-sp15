//Condições Lógicas

// If
const hora = new Date().getHours();

if (hora < 18) {
  // alert("Bom dia!");
}

let pais = "Brasil";
let idade = 25;
let mensagem = "Você não pode dirigir.";

// if (pais == "Brasil") {

//   if (idade >= 18) {
//     mensagem = "Você pode dirigir.";
//   }

// }

if (pais === "Brasil" && idade >= 18) {
  mensagem = "Você pode dirigir.";
}


console.log(mensagem);

console.log("");

// If Else
const hora2 = new Date().getHours();
let saudacao;

if (hora2 >= 18) {
  saudacao = "Boa noite!";
} else {
  saudacao = "Bom dia!";
}

console.log(saudacao);

console.log("");

// Else If
const hora3 = new Date().getHours();
let saudacao2;

if (hora3 < 12) {
  saudacao2 = "Bom dia!";
} else if (hora3 <= 18 && hora3 >= 12) {
  saudacao2 = "Boa tarde!";
} else {
  saudacao2 = "Boa noite!";
}

console.log(saudacao2);

console.log("");

// If Ternário
const dia = new Date().getDate();

let diaMes = (dia === 4) ? "Hoje é dia 4 de Novembro." : "Hoje não é dia 4 de Novembro.";

console.log(diaMes);

console.log("");

// Switch
let diaSemana;
const diaSemanaHoje = parseInt(prompt("Informe um número para o dia da semana: \n 0 - Domingo \n 1 - Segunda-Feira \n 2 - Terça-Feira \n 3 - Quarta-Feira \n 4 - Quinta-feira \n 5 - Sexta-Feira \n 6 - Sábado"));

switch (diaSemanaHoje){
  case 0:
    diaSemana = "Domingo";
    break;
  
  case 1:
    diaSemana = "Segunda-Feira";
    break;

  case 2:
    diaSemana = "Terça-Feira";
    break;

  case 3:
    diaSemana = "Quarta-Feira";
    break;


  case 4:
    diaSemana = "Quinta-Feira";
    break;

  case 5:
    diaSemana = "Sexta-Feira";
    break;


  case 6:
    diaSemana = "Sábado";
    break;
    

  
  default:
    diaSemana = "Informe um valor válido";
}

alert(diaSemana);