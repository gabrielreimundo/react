import React from 'react';

export default function App(){

  const carros=["Carro1","Carro2","Carro3"];

  const listaCarros=carros.map(
    (c,i)=>
      <li key={i}>{i} - {c}</li>
  )

  return (
    <>
      <h1>CFB cursos</h1>
      <br/>
      <p>ANTES</p>
      {carros}  
      <br/>
      <p>DEPOIS</p>
      <ul>{listaCarros}</ul>
    </>
  );
}