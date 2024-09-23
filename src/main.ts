import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Calculadora</h1>
    <h2>Adição:</h2>
    <label>
      <input> + <input> = <input>
    </label>

    <h2>Subtração:</h2>
    <label>
      <input> - <input> = <input>
    </label>

    <h2>Multiplicação:</h2>
    <label>
      <input> x <input> = <input>
    </label>

    <h2>Divisão:</h2>
    <label>
      <input> : <input> = <input>
    </label>
      
  </div>
`

