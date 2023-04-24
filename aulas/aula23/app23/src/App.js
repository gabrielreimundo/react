import React, { useState } from 'react';

export default function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)



  //COMPONENTES
  const Tela=(valor,res)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }
  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  //FUNÇÕES
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d),
      setOperado(false)
      return
    }
  }


  //ESTILOS
  const cssTela={
    diplay:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alingItems:'flex-start',
    backgroundColor:'#444',
    flexDirection:'colum',
    width:260
  }
  const cssTelaOper={
    fontSize:25,
    color:'#fff',
    height:20
  }
  const cssTelaRes={
    fontSize:50,
    color:'#fff',
  }
  const cssBtn={
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    borderColor:'#000',
    textAling:'center',
    outline:'none'
  }

  return (
    <>
   
    </>
  );
}

