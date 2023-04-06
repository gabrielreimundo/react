import React from 'react';
import LedVerde from './componentes/imgs/ledVerde.png'
import LedVermelho from './componentes/imgs/ledVermelho.png'

export default function App(){
   return(
    <>
      <h1>CFB</h1>
      <img style={{width:'50px',margin:'5px'}} alt='' src={LedVermelho}/>
      <button >Ligar/Desligar</button>
    </>
   )
}