import React from 'react';

export default function Altura(props) {

    return (
        <div className='res'>
            <p>Resultado: {props.r.toFixed(2)}</p>
        </div>
    )
}
