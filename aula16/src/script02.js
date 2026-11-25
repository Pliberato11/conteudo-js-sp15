// Eventos
// Evento keydown com o addEventListener()
const paragrafo1 = document.querySelector("#ex1-p");
const input1 = document.querySelector("#ex1-inpt");
let digitos = "";

input1.addEventListener("keydown", (evento) => {
  if (evento.key.length === 1) {
    digitos += evento.key;
  } else if (evento.key === "Backspace") {
    digitos = digitos.slice(0, -1);
  }
  paragrafo1.innerHTML = `O usuário clicou em: ${digitos}`;
});