import React from 'react';
import Header from 'components/Header/Header';
import './Flights.scss';
import MainFlights from 'components/MainFlights/MainFlights';

const Flights = () => (
    <div className='flights'>
        <Header></Header>
        <MainFlights></MainFlights>
    </div>
)

export default Flights