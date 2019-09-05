import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon.scss'

export const ICON_TYPES = {
    SOLID: 'solid',
    LIGHT: 'light'
}

const Icon = ({
    icon, 
    type, 
    className = ''
    }) =>(
    <div className={`icon ${className} ${type}`}>
        <FontAwesomeIcon 
            icon={icon} 
        />
    </div>
)

export default Icon