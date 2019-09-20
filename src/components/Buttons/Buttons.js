import React from 'react';
import Button from './Button/Button';

export default function Buttons(props) {
    return (<div> 
        <Button color={(!props.active) ? 'green' : 'red'} clicked={props.clicked}>{(!props.active) ? 'Iniciar' : 'Pausar'}</Button>
    <Button color={'blue'} clicked={props.reset}>Resetar</Button>
    </div>);
}