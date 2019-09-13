import React from 'react';
import './Filter.scss';

const Filter = ({
    label,
    price,
    info,
    className = '' }) => (
        <div className={`filter ${className}`}>
            <div className='filter-info-top'>
                <div className='filter-checkbox'></div>
                <div className='filter-label'>{label}</div>
                <div className='filter-price'>{price}</div>
            </div>
            {
                info &&
                <div className='filter-info'>{info}</div>
            }
        </div>
    )

export default Filter