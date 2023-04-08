import React from 'react'

export default function Numero(props){
    return(
        <div>
            <p>Valor do state em Numero: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}> Soma 10</button>
        </div>
    )
}