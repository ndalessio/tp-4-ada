import React from 'react';
import SearchBarFlights from 'components/SearchBarFlights/SearchBarFlights'
import './SearchContainerFlights.scss';

const SearchContainerFlights = () => (
    <div className='search-container-flights'>
        <h3>50 flights to Buenos Aires</h3> 
        <SearchBarFlights></SearchBarFlights>
    </div>
)

export default SearchContainerFlights