import React from 'react';
import LedVerde from './imgs/ledVerde.png'
import LedVermelho from './imgs/ledVermelho.png'

export default function Led(props){

   return(
    <>
        <img style={{width:'50px',margin:'5px'}} alt='' src={props.ligado?LedVerde:LedVermelho}/>

        <button onClick={()=>{props.setLigado(!props.ligado)}}>
            {props.ligado?'Desligar':'Ligar'}
        </button>
    </>
   )
}