import React from 'react';

export default function Button(props) {
    const style ={
        backgroundColor: props.color,
        color: 'white',
        padding: '10px',
        margin: '10px',
        width: '100px',
        border: '1px solid black'
    }

    return (<button style={style} onClick={props.clicked}>{props.children}</button>);
}