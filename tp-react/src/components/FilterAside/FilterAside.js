import React from 'react';
import FilterContainer from 'components/FilterContainer/FilterContainer';
import Filter from 'components/Filter/Filter';
import './FilterAside.scss';

const FilterAside = () => (
    <div className='filter-aside'>
        <FilterContainer title='STOPS'>
            <Filter label='nonstop' price='$256'></Filter>
            <Filter label='1 stop' price='$256'></Filter>
            <Filter label='2 stops' price='$256'></Filter>
        </FilterContainer>
        <FilterContainer title='FLIGHT-CLASS'>
            <Filter label='Economy' price='$256'></Filter>
            <Filter label='Business' price='$256'></Filter>
            <Filter label='First' price='$256'></Filter>
        </FilterContainer>
        <FilterContainer title='PRICE'>

        </FilterContainer>
        <FilterContainer title='TAKE-OFF LONDON'>
            <Filter label='Economy' price='$256' info='05:00am - 11:59am'></Filter>
            <Filter label='Business' price='$256'info='12:00- 05:59pm'></Filter>
            <Filter label='First' price='$256' info='06:00am - 11:59pm'></Filter>
        </FilterContainer>
        <FilterContainer title='LANDING NEW WORK'>
            <Filter label='Economy' price='$256' info='05:00am - 11:59am'></Filter>
            <Filter label='Business' price='$256'info='12:00- 05:59pm'></Filter>
            <Filter label='First' price='$256' info='06:00am - 11:59pm'></Filter>
        </FilterContainer>
        <FilterContainer title='TAKE-OFF NEW YORK'>
            <Filter label='Economy' price='$256' info='05:00am - 11:59am'></Filter>
            <Filter label='Business' price='$256'info='12:00- 05:59pm'></Filter>
            <Filter label='First' price='$256' info='06:00am - 11:59pm'></Filter>
        </FilterContainer>
        <FilterContainer title='LANDING LONDON'>
            <Filter label='Economy' price='$256' info='05:00am - 11:59am'></Filter>
            <Filter label='Business' price='$256'info='12:00- 05:59pm'></Filter>
            <Filter label='First' price='$256' info='06:00am - 11:59pm'></Filter>
        </FilterContainer>
        <FilterContainer title='LONDON AIRPORT'>
            <Filter label='CLY: City' price='$256'></Filter>
        </FilterContainer>
        <FilterContainer title='NEW YORK AIRPORT'>
            <Filter label='CLY: City' price='$256'></Filter>
        </FilterContainer>
        <FilterContainer title='AIRLINES'>
            <Filter label='AERO' price='$256'></Filter>
        </FilterContainer>
    </div>
)
export default FilterAside