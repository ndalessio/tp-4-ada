import React from 'react';
import './MainFlights.scss';
import FilterAside from 'components/FilterAside/FilterAside';
import SortBar from 'components/SortBar/SortBar';


const MainFlights = () => (
    <div className='main-flights'>
        <FilterAside></FilterAside>
        <SortBar></SortBar>
    </div>
)

export default MainFlights