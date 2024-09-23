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
  const addNumber1 = document.getElementById("addNumber1") as HTMLInputElement;
  const addNumber2 = document.getElementById("addNumber2") as HTMLInputElement;

  const resultSoma = Number(addNumber1.value) + Number(addNumber2.value);
  alert(`O valor da adição: ${addNumber1.value} + ${addNumber2.value} = ${resultSoma}`);
}

const botaoSomar = document.getElementById("calcAdd") as HTMLButtonElement;
botaoSomar.onclick = somar;


function subtrair() {
  const subNumber1 = document.getElementById("subNumber1") as HTMLInputElement;
  const subNumber2 = document.getElementById("subNumber2") as HTMLInputElement;

  const resultSubtracao = Number(subNumber1.value) - Number(subNumber2.value);
  alert(`O valor da subtração: ${subNumber1.value} - ${subNumber2.value} = ${resultSubtracao}`)
}

const botaoSubtrair = document.getElementById("calcSub") as HTMLButtonElement;
botaoSubtrair.onclick = subtrair;


function multiplicar() {
  const multNumber1 = document.getElementById("multNumber1") as HTMLInputElement;
  const multNumber2 = document.getElementById("multNumber2") as HTMLInputElement;

  const resultMultiplicacao = Number(multNumber1.value) * Number(multNumber2.value);
  alert(`O valor da multiplicação: ${multNumber1.value} x ${multNumber2.value} = ${resultMultiplicacao}`)

}

const botaoMultiplicar = document.getElementById("calcMult") as HTMLButtonElement;
botaoMultiplicar.onclick = multiplicar;


function dividir() {
const divNumber1 = document.getElementById("divNumber1") as HTMLInputElement;
const divNumber2 = document.getElementById("divNumber2") as HTMLInputElement;

const resultDividir = Number(divNumber1.value) / Number(divNumber2.value);
  alert(`O valor da divisão: ${divNumber1.value} : ${divNumber2.value} = ${resultDividir}`)
}

const botaoDividir = document.getElementById("calcDiv") as HTMLButtonElement;
botaoDividir.onclick = dividir;



