import React,{useState} from 'react';

export default function App(){
  
  const [nome,setNome]=useState()

  const armazenar=(chave,valor)=>{
    localStorage.setItem(chave,valor)
  }
  const consultar=(chave)=>{
    alert(localStorage.getItem(chave))
  }
  const apagar=(chave)=>[
    localStorage.removeItem(chave)
  ]
  return(
    <>
      <label>Digite um nome</label><br/>
      <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
      <button onClick={()=>armazenar('is_nome',nome)}>Gravar Nome</button>
      <button onClick={()=>consultar('is_nome',nome)}>Consultar Nome</button>
      <button onClick={()=>apagar('is_nome',nome)}>Remover Nome</button>
    </>
  );
}