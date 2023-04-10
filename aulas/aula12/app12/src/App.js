import React from 'react';
import Caixa from './componentes/Caixa'
import Canal from './componentes/Canal'

export default function App(){
  return (
    <>
      <Caixa>
        <h1>CFB Cursos</h1>
        <p>Curso de React</p>
        <Canal/>
      </Caixa>
    </>
  );
}
