import React from 'react';
import Carro from './componentes/Carro'
import Classe from './componentes/Classe'

export default function App(){
  
  return(
    <>
      <h1>Componentes de Classe</h1>
      <Classe canal='CFB cursos' curso="Curso de React"/>
      <Carro fator={10}/>

    </>
  );
}
