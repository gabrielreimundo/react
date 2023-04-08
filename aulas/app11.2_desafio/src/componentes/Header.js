import React from "react";
import Logo from './imgs/logocfb.png'

export default function Header(){
    return(
        <header>
            <img alt="" src={Logo}/>
            <h1>CFB Cursos</h1>
        </header>
    )
}