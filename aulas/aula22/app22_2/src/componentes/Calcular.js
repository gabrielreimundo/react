import React from 'react';

export default function Calcular(props) {
    const calc=()=>{
        const r=props.peso/(props.Altura*props.Altura)
        props.sr(r)
        console.log(r)
    }
    return (
        <div>  
            <button onClick={calc}>Calcular</button>
        </div>
           
    )   
}