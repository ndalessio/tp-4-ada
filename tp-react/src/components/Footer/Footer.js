import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import Icon, { ICON_TYPES } from 'components/Icon/Icon';
import { faFacebookF, faTwitter, faGoogle, faInstagram  } from '@fortawesome/free-brands-svg-icons';
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
            <div className='right-buttons'>
                <Icon
                type={ICON_TYPES.LIGHT}
                icon={faFacebookF}/>
                <Icon
                type={ICON_TYPES.LIGHT}
                icon={faTwitter}/>
                <Icon
                type={ICON_TYPES.LIGHT}
                icon={faGoogle}/>
                <Icon
                type={ICON_TYPES.LIGHT}
                icon={faInstagram}/>
            </div>
        </div>
        <div className='footer-bottom'>Copyright © 2019 Adantrip. All rights reserved.</div>
    </div>
)

export default Footer