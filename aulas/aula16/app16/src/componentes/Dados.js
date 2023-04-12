import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Canal:{props.canal}</p>
            <p>youtube:{props.youtube}</p>
            <p>Curso:{props.curso}</p>
            <p>Calculo : {props.somar(22,55)}</p>
        </section>
    )

}