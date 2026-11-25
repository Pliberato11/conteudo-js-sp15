// Compreendendo o DOM
  // Alterando Estilos dos Elementos com o JavaScript
  // Alterando cor de elemento
const elemento1 = document.querySelector("#ex1");
elemento1.style.color = "darkred";
// Alterando visibilidade de elemento
const elemento2 = document.querySelector("#ex2");
function mostrarElemento() {
  elemento2.style.display = "block";
}
function esconderElemento() {
  elemento2.style.display = "none";
}