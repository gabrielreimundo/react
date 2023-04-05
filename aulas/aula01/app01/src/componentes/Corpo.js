import React from "react";
import Dados from './Dados.js'

export default function Corpo(){
    const cnl=' CFB Cursos'
    return (
        <section>
            <h2>Curso de react</h2>
            <p>Se inscreva no canal</p>
            <p>Ativa o xininho</p>
            {/* componentes dentro de componentes */}
            <Dados 
                canal={cnl}
                youtube=' youtube.com/CFBcursos'
                curso=' React.js'
            />
        </section>
    )
}