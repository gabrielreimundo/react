//manual de ultilização de componentes de classe

import React from 'react';

export default class BaseClasse extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        //Para permitir o uso de props
        super(props)

        //state
        this.state={
            canal:'CFB Cursos',
            curso:'React',
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status

        //bindagem
        let ad=this.ativarDesativar.bind(this)
        //Intruções do constructor
    }
    //Função para manipular state
    ativarDesativar(){
        this.setState(
            state=>({
                ativo=!state.ativo
            })
        )
    }
    componentDidMount(){
        console.log('Componente criado')
    }
    componentDidUpdate(){
        console.log('Componete Atualizado')
    }
    componentWillUnmount(){
        console.log('Componente removido')
    }
    render(){
        return(
            <>
                <h1>Componente de Classe</h1>
                {/*Chamada da função com bind*/}
                <button onClick={this.ad}>Ativar/Desativar</button>
                {/*sem o bind */}
                <button onClick={this.ativarDesativar}>Ativar/Desativar</button>
            </>
        )
    }

}