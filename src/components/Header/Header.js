import React from 'react';

export default function Header(props) {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        padding: '16px',
        fontWeight: 'bold'
    }
    
    return (<header style={style}>{props.children}</header>);
}