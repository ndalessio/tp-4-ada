import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

export const BUTTON_TYPES = {
    ITEM: 'item',
    BOLD: 'bold',
    SEARCH: 'search',
    SEARCHFLIGHTS: 'search-flights'
}

const Button = ({
    text, 
    icon, 
    type,
    className = ''}) => (
    <div className={`button ${className} ${type}`}>
        {
            icon && 
            <FontAwesomeIcon 
                icon={icon} 
                className='button-icon' 
            />
        }
        {text}
    </div>
)

export default Button