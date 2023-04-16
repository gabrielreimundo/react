import React,{useEffect,useState} from 'react';
import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';

export default  function App() {

  const [pagina,setPagina]=useState(0)

  const retornarPagina=()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{
      return
    }
  }

  return (
    <>
      {retornarPagina()}
    </>

  );
}

