import React from 'react';

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld=this.ligarDesligar.bind(this)
    }
  
    ligarDesligar(){
        //this.state.ligado=true
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>({
                ligado:!state.ligado
            })
        )
    }
    acelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:state.velAtual + props.fator}
            )
        )
    }
    componentDidMount(){
        console.log('O carro foi chamado')
    }
    componentDidUpdate(){
        console.log('O carro foi atualizado')
    }
    componentWillUnmount(){
        console.log('O carro foi removido')
    }
    render(){
        return (
            <div>
                <h1> Meu carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado?'Sim':'Não'}</p>
                <p>Vel.Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado?'Desligar Carro':'Ligar Carro'}</button><br/>
                <button onClick={()=>this.acelerar()}>Acelerar</button>
            </div>
        )
    }
}