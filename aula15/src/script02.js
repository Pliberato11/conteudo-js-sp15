// Compreendendo o DOM
// Alterando Elemento
const elemento1 = document.querySelector("#ex1");
elemento1.innerHTML  = "Somente a dor coletiva gera união.";

console.log("");

// Alterando Atributo de Elemento
const elemento2 = document.querySelector("#ex2");
elemento2.src = "l-apagada.gif";

console.log("");

// Adicionando Conteúdo Dinâmico com JavaScript
const elemento3 = document.querySelector("#ex3");
elemento3.innerHTML = Date();