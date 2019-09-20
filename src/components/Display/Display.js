import React from 'react';

export default function Display(props) {
    const style ={
        fontSize: '36px'
    }
    return (<div style={style}><h1>{props.children}</h1></div>);
}