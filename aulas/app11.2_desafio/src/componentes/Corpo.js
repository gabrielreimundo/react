import React from "react";
import Dados from './Dados.js'

export default function Corpo(){
    const cnl=()=>{
        return ' CFB Cursos'
    }
    const somar=(v1,v2)=>{
        return v1+v2
    }
    return (
        <section>
            <h2>Curso de react</h2>
            <p>Se inscreva no canal</p>
            <p>Ativa o xininho</p>
            {/* componentes dentro de componentes */}
            <Dados 
                canal={cnl()}
                youtube=' youtube.com/CFBcursos'
                curso=' React.js'
                somar={somar}
            />
        </section>
    )
}