import React from 'react';

export default function App(){

  const carros=[
    {categoria: "Esporte", preco: "1100000.00", modelo: "Golf GTI"},
    {categoria: "Esporte", preco: "1200000.00", modelo: "Camaro"},
    {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
    {categoria: "SUV", preco: "83000.00", modelo: "T-Cross"},
    {categoria: "Ultilitario", preco: "120000.00",modelo: "Hillux"},
    {categoria: "Ultilitario", preco: "90000.00", modelo: "Ranger"}
  ];

  const listaCarros=carros.map(
    (c,i)=>
      <li key={i}>{i} - {c.categoria} {c.modelo}- R${c.preco}</li>
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