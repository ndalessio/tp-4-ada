import React from 'react';
import Button, { BUTTON_TYPES} from 'components/Button/Button';
import './Result.scss';

const Result = ({
    goTimeTakeOff,
    goPlaceTakeOff,
    goDateTakeOff,
    goTimeLand,
    goPlaceLand,
    goDateLand,
    returnTimeTakeOff,
    returnPlaceTakeOff,
    returnDateTakeOff,
    returnTimeLand,
    returnPlaceLand,
    returnDateLand,
    price,
    flightClass }) => (
        <div className='result'>
            <div className='flights-go-land-container'>
            <div className='go-flight'>
                <div className='logo-airline'></div>
                <div className='take-off-info'>
                    <div className='time'>{goTimeTakeOff}</div>
                    <div className='place'>{goPlaceTakeOff} </div>
                    <div className='date'>{goDateTakeOff}</div>
                </div>
                <div className='land-info'>
                    <div className='time'>{goTimeLand}</div>
                    <div className='place'>{goPlaceLand}</div>
                    <div className='date'>{goDateLand}</div>
                </div>
            </div>

            <div className='return-flight'>
                <div className='logo-airline'></div>
                <div className='take-off-info'>
                    <div className='time'>{returnTimeTakeOff}</div>
                    <div className='place'>{returnPlaceTakeOff}</div>
                    <div className='date'>{returnDateTakeOff}</div>
                </div>
                <div className='land-info'>
                    <div className='time'>{returnTimeLand}</div>
                    <div className='place'>{returnPlaceLand}</div>
                    <div className='date'>{returnDateLand}</div>
                </div>
            </div>
            </div>
            
            <div className='price-info'>
                <div className='price'>{price}</div>
                <div className='flight-class'>{flightClass}</div>
                <Button type={BUTTON_TYPES.BOOK} text='Book Now'></Button>
            </div>
  
            {/* <h5>Operated by Wow Airlines</h5> */}
        </div>
    )

export default Result