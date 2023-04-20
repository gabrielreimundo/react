import React,{useState} from 'react';
import Tabela from './componentes/Tabela'
import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import Calcular from './componentes/Calcular'
import Resultado from './componentes/Resultado'
export default function App() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return (
    <>
    <main>
      <h1>Calculadora IMC</h1>
      <Peso peso={peso} setPeso={setPeso}/>
      <Altura Altura={altura} setAltura={setAltura}/>
      <Calcular peso={peso} Altura={altura} sr={setResultado}/>
      <Resultado r={resultado}/>
      <Tabela/>
    </main>
    </>
  );
}

