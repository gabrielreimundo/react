import React,{useState} from 'react';
import Carro from './componentes/Carro'
import Classe from './componentes/Classe'

export default function App(){
  const [carro, setCarro]=useState(true)
  const mostrarOcultarCarro=()=>{
    setCarro(!carro)
  }
  return(
    <>
      <h1>Componentes de Classe</h1>
      
      <Classe canal='CFB cursos' curso="Curso de React"/>
      {carro?<Carro fator={10}/>:''}
      <button onClick={()=>mostrarOcultarCarro()}>Ocultar</button>
    </>
  );
}
