// Animação no DOM
const frame = document.querySelector("#frame");
let id = null;
function animar() {
  let posicao = 0;
  clearInterval(id);
  id = setInterval(atualizarFrame, 5);
  
  function atualizarFrame() {
    if (posicao == 300) {
      clearInterval(id);
    } else {
      posicao++;
      frame.style.top = posicao + "px";
      frame.style.left = posicao + "px";
    }
  }
}