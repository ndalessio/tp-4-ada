import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon.scss'

export const ICON_TYPES = {
    SOLID: 'solid',
    LIGHT: 'light',
    SEARCH: 'search'
}

const Icon = ({
    icon, 
    type, 
    className = ''
    }) =>(
    <div className={`icon ${className} ${type} ${icon}`}>
        <FontAwesomeIcon 
            icon={icon} 
            className='search-bar-icon'
        />
    </div>
)

export default Icon