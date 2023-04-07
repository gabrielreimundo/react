import React,{useState} from 'react';
import './App.css'

export default function App (){

  const [nome,setNome]=useState('')
  const [carro,setCarro]=useState('')
  return(
    <>
      <label>Digite seu Nome</label>
      <input 
      type='text' 
      name='fname'
      value={nome}
      onChange={(e)=>setNome(e.target.value)}
      />


      <p>Nome digitado: {nome}</p>
      <label>Selecione um carro</label>
      <select 
      value={carro}
      onChange={(e)=>setCarro(e.target.value)}
      >
        <option value="Supra">Supra</option>
        <option value="Mustang">Mustang</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Jeep">Jeep</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  );
}
