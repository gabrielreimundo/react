import React,{useState} from 'react'
import Numero from './componentes/Numero'
import './App.css'

export default function App(){

  const [num,setNum]=useState(10)
  const [fruta,setfruta]=useState('Banana')

  return(
    <>
      <p>Valor do state em app: {num}</p>
      <Numero num={num} setNum={setNum}/>
      <p>{fruta}</p>
      <button onClick={()=>{setfruta('Laranja')}}>Laranja</button>
    </>
  )

}