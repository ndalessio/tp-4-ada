import React from 'react';
import Input, { INPUT_KIND } from 'components/Input/Input';
import Icon from 'components/Icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InputContainer.scss';

export const INPUTCONTAINER_COLORS = {
    SOLID: 'solid',
    TRASLUCID: 'traslucid',
}

export const INPUTCONTAINER_SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    SMALLFLIGHTS: 'small-flights',
    MEDIUMFLIGHTS: 'medium-flights'
}

const InputContainer = ({
    kind,
    icon,
    color,
    size,
    className = '' }) => (
        <div className={`input-container ${className} ${color} ${size}`}>
            {
                icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className='button-icon'
                />
            }
            <Input className={`${kind}`} ></Input>
        </div>
    )

export default InputContainer