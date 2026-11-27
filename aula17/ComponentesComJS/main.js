import { TextBoxComponent } from "./components/caixaDeTexto.js";
document.body.innerHTML = `
  <h1>Pedro Henrique</h1>
  ${new TextBoxComponent({
    className: "control-3d dark",
    placeholder: "Digite sua senha",
    type: "password",
    label: "Senha:",
    
  }).render()}

`;