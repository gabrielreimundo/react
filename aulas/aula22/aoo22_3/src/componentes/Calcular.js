import React from 'react';

export default class Classe extends React.Component{
    constructor(){
        super()
    }
    render(){
        const calc=()=>{
            const r=this.props.peso/(this.props.Altura*this.props.Altura)
            this.props.sr(r)
            console.log(r)
        }
        return (
            <div>  
                <button onClick={calc}>Calcular</button>
            </div>
        )   
    }
}