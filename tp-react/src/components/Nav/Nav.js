import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CurrencyModal from 'components/CurrencyModal/CurrencyModal';
import LanguageModal from 'components/LanguageModal/LanguageModal';
import AccountMenu from 'components/AccountMenu/AccountMenu';
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
        <div className='right-buttons'>
        <Button
            type={BUTTON_TYPES.BOLD} 
            text='USD'
            />
        <Button
            type={BUTTON_TYPES.BOLD} 
            text='Flag'
            />
        <Button
            type={BUTTON_TYPES.BOLD} 
            icon={faUser}
            text='My Account'
            />
        </div>
        <CurrencyModal></CurrencyModal>
        <LanguageModal></LanguageModal>
        <AccountMenu></AccountMenu>
    </div>
)

export default Nav