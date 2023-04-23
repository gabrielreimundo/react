import React from 'react';

export default class Classe extends React.Component{
    constructor(props){
        super(props)
    }
        render(){

        return  (
            <div className='res'>
                <p>Resultado: {this.props.r.toFixed(2)}</p>
            </div>
        )
    }
}
