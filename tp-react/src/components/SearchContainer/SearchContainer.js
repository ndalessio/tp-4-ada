import React from 'react';
import './SearchContainer.scss';
import SearchBar from 'components/SearchBar/SearchBar';
import FlightTypeContainer from 'components/FlightTypeContainer/FlightTypeContainer';

const SearchContainer = () => (
    <div className='search-container'>
        <h1>Cheap Flights Best Deals</h1>
        <h3>Search hundreds of travel sites at once</h3>
        <SearchBar></SearchBar>
        <FlightTypeContainer></FlightTypeContainer>
    </div>
)

export default SearchContainer