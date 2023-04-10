import React,{useEffect,useState} from 'react';

export default function App(){

  const [contagem,setContagem]=useState(0)
  {/*useEffect executa sempre que a pagina é atualizada */}

  useEffect(
    ()=>{
      console.log("Pagina carregada")
      document.title='Contagem'+contagem
    }
  )


  return (
    <>
      <p>Contagem:{contagem}</p>
      <button onClick={()=>setContagem(contagem+1)}>Contar</button>
    </>
  );
}