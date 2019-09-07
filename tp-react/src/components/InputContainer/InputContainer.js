import React from 'react';

import './InputContainer.scss';

export const INPUTCONTAINER_COLORS = {
    SOLID: 'solid',
    TRASLUCID: 'traslucid',
}

export const INPUTCONTAINER_SIZES = {
    SMALL: 'small',
    MEDIUM:'medium'
}

const InputContainer = ({ 
    color,
    size,
    className = ''}) => (
    <div className={`input-container ${className} ${color} ${size}`}></div>
)

export default InputContainer