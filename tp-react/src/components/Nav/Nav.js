import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './Nav.scss';



const Nav = () => (
    <div className='nav'>
        <div className='left-buttons'>
            <Button
            type={BUTTON_TYPES.ITEM} 
            text='Hotels'
            />
            <Button
            type={BUTTON_TYPES.ITEM} 
            text='Rooms'
            />
            <Button
            type={BUTTON_TYPES.ITEM} 
            text='Flights'
            />
            <Button
            type={BUTTON_TYPES.ITEM} 
            text='Cars'
            />
            <Button
            type={BUTTON_TYPES.ITEM} 
            text='Experiences'
            />
        </div>
        <div className='right-buttons'></div>
    </div>
)

export default Nav