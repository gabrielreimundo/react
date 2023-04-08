import React,{useState} from 'react';

export default function App(){

  const [log,setLog]=useState(false)

  const msglogin=()=>{
    return 'Usuario Logado'
  }
  const msgloginoff=()=>{
    return 'Usuario não Logado'
  }

  const comprimento=()=>{
    const hora=new Date().getHours()
    if(hora >=0 && hora <13){
      return <p>Bom dia</p>
    }else if(hora >=13 && hora <18){
      return <p>Boa tarde</p>
    }else {
      return <p>Boa noite</p>
    }

  }

   return(
    <>
      {comprimento()}
      <br/>
      <p>{log?msglogin():msgloginoff()}</p>
      <br/>
      <button onClick={()=>{setLog(!log)}}>{log?'LoginOff':'Login'}</button>
    </>
   )
}