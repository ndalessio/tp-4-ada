import React from 'react';
import Result from 'components/Result/Result';
import './ResultsContainer.scss';
import { O_CREAT } from 'constants';

const ResultsContainer = () => (
    <div className='results-container'>
        <Result 
            goTimeTakeOff='8:20pm'
            goPlaceTakeOff='Buenos Aires'
            goDateTakeOff='sept. 28, 2019'
            goTimeLand='9:30pm'
            goPlaceLand='Londres'
            goDateLand='sept. 27, 2020'
            returnTimeTakeOff='5:30pm'
            returnPlaceTakeOff='Londres'
            returnDateTakeOff='oct. 25, 2019'
            returnTimeLand='4:25am'
            returnPlaceLand='Buenos Aires'
            returnDateLand='oct. 26, 2019'
            price='$825'
            flightClass='economy'>
        </Result>
    </div>
)

export default ResultsContainer