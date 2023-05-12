import React,{useState,useEffect} from 'react';

export default function ListaCarros(){
    
    const [carros,setCarros]=useState([])

    useEffect(()=>{

        fetch('https://carros.gabrielreimundo.repl.co')
            .then(res=>res.json())
            .then(
                (res)=>{
                    setCarros(res)
                }
            )
        }
    )

    return(           
        <div>
            {carros.map(
                carro => <div key={carro.id} >{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}
        </div>
    )
}