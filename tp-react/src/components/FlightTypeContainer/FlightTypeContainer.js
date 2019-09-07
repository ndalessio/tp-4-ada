import React from 'react';
import Input, { INPUT_KIND } from 'components/Input/Input';
import './FlightTypeContainer.scss';

const FlightTypeContainer = () =>(
    
    <div className='flight-type-container'>
        <div className='flight-type'>
            <Input kind={INPUT_KIND.ROUND}/>
            <p>Round Trip</p>
        </div>
        
        <div className='flight-type'>
            <Input kind={INPUT_KIND.ROUND}/>
            <p>One way</p>
        </div>
    </div>
)

export default FlightTypeContainer
