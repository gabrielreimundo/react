import React,{useState} from 'react';
import Led from './componentes/Led';

export default function App(){

  const [ligado,setLigado]=useState(false)

   return(
    <>
      <h1>CFB</h1>
      <Led ligado={ligado} setLigado={setLigado}/>
    </>
   )
}