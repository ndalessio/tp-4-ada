import React from 'react';
import './Input.scss';

export const INPUT_KIND = {
    ROUND: 'round',
    SEARCH: 'search'
}

const Input = ({ 
    kind,
    className = ''}) => (
    <input className={`input ${className} ${kind}`}/>
)

export default Input