import React from 'react';
import './SortBar.scss';

const SortBar = () => (
    <div className='sort-bar'>
        <div className='sort-item'>Sort by:</div>
        <div className='sort-item'>
            <p className='sort-category'>Price</p>
            <p className='sort-variables'>Low - High</p>
        </div>
        <div className='sort-item'>
            <p className='sort-category'>Duration</p>
            <p className='sort-variables'>Short - Long</p>
        </div>
        <div className='sort-item'>
            <p className='sort-category'>Recommended</p>
            <p className='sort-variables'>High - Low</p>
        </div>
        <div className='sort-item'>
            <p className='sort-category'>Airline Name</p>
            <p className='sort-variables'> Name A - Z</p>
        </div>
        <div className='sort-item-more'>More
        {/* Menú desplegable */}
        </div>
        
    </div>

)
export default SortBar