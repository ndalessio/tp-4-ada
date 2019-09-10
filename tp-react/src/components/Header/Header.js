import React from 'react';
import Nav from 'components/Nav/Nav';
import './Header.scss';
import SearchContainerFlights from 'components/SearchContainerFlights/SearchContainerFlights';

const Header = () => (
    <div className='header'>
        <Nav></Nav>
        <SearchContainerFlights></SearchContainerFlights>
    </div>
)

export default Header