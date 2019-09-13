import React from 'react';
import './FilterContainer.scss';

const FilterContainer = ({title, className, children}) => (
    <div className={`filter-container ${className} ${title}`}>
        <div className='filter-title'>{title}</div>
        {children}
    </div>
)

export default FilterContainer