import React from 'react'
import logo from './componentes/imgs/logocfb.png'


export default function App(){
  const canal=()=>{
    return('CFB Cursos')
  }
  const curso='Curso de React'
  return(
    <section>
      <p>Canal: {canal() + ' é o melhor'}</p>
      <p>Curso de react, {curso}</p>
      <img src={logo} alt=''/>
      <img src='/imgs/gatofelix.jpg' alt=''/>
    </section>
  )
}
