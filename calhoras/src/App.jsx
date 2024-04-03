import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHf] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("Resultado");

  const soma = () => {
    let somaHora = Number(hi) + Number(hf);
    let somaMinuto = Number(mi) + Number(mf);
    
    while (somaMinuto > 59) {
      somaMinuto -= 60;
      somaHora++;
    }
    
    setResultado(`${somaHora}:${somaMinuto}`);
  }

  const sub = () => {
    let momentoInicial = hi * 60 + Number(mi);
    let momentoFinal = hf * 60 + Number(mf);
    let resultadoEmMinutos = Math.abs(momentoInicial - momentoFinal);
    let resultadoEmHoras = 0;

    while (resultadoEmMinutos > 59) {
      resultadoEmHoras++;
      resultadoEmMinutos -= 60;
    }

    setResultado(`${resultadoEmHoras}:${resultadoEmMinutos}`);
  }

  return (
    <>
      <h1>Calculadora</h1>
      <div className="samba">
        <h3>Escolha os horários que deseja calcular!</h3>
        <input type="number" value={hi} onChange={(e) => setHi(e.target.value)} placeholder="Hora Inicial" />&nbsp;:&nbsp;
        <input type="number" value={mi} onChange={(e) => setMi(e.target.value)} placeholder="Minuto Inicial" /><br />
        <input type="number" value={hf} onChange={(e) => setHf(e.target.value)} placeholder="Hora Final" />&nbsp;:&nbsp;
        <input type="number" value={mf} onChange={(e) => setMf(e.target.value)} placeholder="Minuto Final" /><br /><br />
        <button onClick={soma}>Soma</button>
        <button onClick={sub}>Diferença</button>
        <h3 id="r">{resultado}</h3>
      </div>
    </>
  )
}

export default App
