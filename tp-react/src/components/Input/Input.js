import React from 'react';
import './Input.scss';

export const INPUT_KIND = {
    ROUND: 'round',
    SEARCH: 'search'
}

export const INPUT_COLOR = {
    BLUE: 'blue',
    ORANGE: 'orange'
}

const Input = ({ 
    kind,
    color,
    className = ''}) => (
    <input className={`input ${className} ${kind} ${color}`}/>
)

export default Input