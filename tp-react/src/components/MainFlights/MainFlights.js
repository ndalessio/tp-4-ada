import React from 'react';
import './MainFlights.scss';
import FilterAside from 'components/FilterAside/FilterAside';
import SortBar from 'components/SortBar/SortBar';
import ResultsContainer from 'components/ResultsContainer/ResultsContainer';


const MainFlights = () => (
    <div className='main-flights'>
        <FilterAside></FilterAside>
        <div>
            <SortBar></SortBar>
            <ResultsContainer></ResultsContainer>
        </div>
    </div>
)

export default MainFlights