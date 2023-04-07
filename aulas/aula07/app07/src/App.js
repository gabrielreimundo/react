import React,{useState} from 'react';
import Cum from './componentes/CumBoom'

export default function App(){

  const [cor,setCor]=useState(1)

  const vermelho={color:'#f00'}
  const verde={color:'#0f0'}
  const azul={color:'#00f'}

  const retCor=(c)=>{

    if(c==1){
      return vermelho
    }else if(c==2){
      return verde
    }else {
      return azul
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)
    if(cor > 2){
      setCor(1)
    }
  }

  return(
  <>
    <h1>CFB</h1>

    <Cum/>

    <p>----------------------------</p>

    <p style={retCor(cor)}>Cores</p>

    

    <button onClick={()=>{mudaCor()}} >Muda Cor</button>
  </>
   )
}
