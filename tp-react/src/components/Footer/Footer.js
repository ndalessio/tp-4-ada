import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './Footer.scss';

const Footer = () =>(
    <div className='footer'>
        <div className='footer-top'>
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
        <div className='footer-bottom'>Copyright © 2019 Adantrip. All rights reserved.</div>
    </div>
)

export default Footer