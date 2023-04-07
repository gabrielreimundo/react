import React,{useState} from 'react';
import './App.css'

export default function App (){

  const [form,setForm]=useState({"nome":"","curso":"","ano":""})

  const handFormChange=(e)=>{
    if(e.target.getAttribute('name')=='fnome'){
      setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fcurso'){
      setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fano'){
      setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
    }
  }

  return(
    <>
      <label>Nome</label>
      <input type='text' name='fnome' value={form.nome} onChange={(e)=>handFormChange(e)}/>

      <label>Curso</label>
      <input type='text' name='fcurso' value={form.curso} onChange={(e)=>handFormChange(e)}/>

      <label>Ano</label>
      <input type='text' name='fano' value={form.ano} onChange={(e)=>handFormChange(e)}/>

      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
    </>
  );
}
