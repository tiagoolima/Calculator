import './style.css'






document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Calculadora</h1>
    <h2>Adição:</h2>
    <label>
      <input id="addNumber1"> + <input id="addNumber2">
      <Button>Calcular</Button>
    </label>

    <h2>Subtração:</h2>
    <label>
      <input id="subNumber1"> - <input id="subNumber2">
      <Button>Calcular</Button>
    </label>

    <h2>Multiplicação:</h2>
    <label>
      <input id="multNumber1"> x <input id="multNumber2">
      <Button>Calcular</Button>
    </label>

    <h2>Divisão:</h2>
    <label>
      <input id="divNumber1"> : <input id="divNumber2">
      <Button>Calcular</Button>
    </label>
      
  </div>
`

