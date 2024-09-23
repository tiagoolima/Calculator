import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Calculadora</h1>
    <h2>Adição:</h2>
    <label>
      <input id="addNumber1"> + <input id="addNumber2">
      <Button id="calcAdd">Calcular</Button>
    </label>

    <h2>Subtração:</h2>
    <label>
      <input id="subNumber1"> - <input id="subNumber2">
      <Button id="calcSub">Calcular</Button>
    </label>

    <h2>Multiplicação:</h2>
    <label>
      <input id="multNumber1"> x <input id="multNumber2">
      <Button id="calcMult">Calcular</Button>
    </label>

    <h2>Divisão:</h2>
    <label>
      <input id="divNumber1"> : <input id="divNumber2">
      <Button id="calcDiv">Calcular</Button>
    </label>
      
  </div>
`


function somar() {
  let addNumber1 = document.getElementById("addNumber1") as HTMLInputElement;
  let addNumber2 = document.getElementById("addNumber2") as HTMLInputElement;

  const resultSoma = Number(addNumber1.value) + Number(addNumber2.value)
  alert(`O valor da adição: ${addNumber1.value} + ${addNumber2.value} = ${resultSoma}`)
}

const botaoSomar = document.getElementById("calcAdd") as HTMLButtonElement;
botaoSomar.onclick = somar;

const subNumber1 = document.getElementById("subNumber1") as HTMLInputElement;
const subNumber2 = document.getElementById("subNumber2") as HTMLInputElement;
const multNumber1 = document.getElementById("multNumber1") as HTMLInputElement;
const multNumber2 = document.getElementById("multNumber2") as HTMLInputElement;
const divNumber1 = document.getElementById("divNumber1") as HTMLInputElement;




