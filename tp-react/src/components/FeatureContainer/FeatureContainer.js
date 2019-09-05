import React from 'react';
import Icon, { ICON_TYPES } from 'components/Icon/Icon';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import './FeatureContainer.scss';

const FeatureContianer = ({title, description}) =>(
    <div className='feature-container'>
        <Icon
        icon={faCheck}
        type={ICON_TYPES.SOLID}
        />
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
)

export default FeatureContianer