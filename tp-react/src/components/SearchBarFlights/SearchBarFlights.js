import React from 'react';
import InputContainer, { INPUTCONTAINER_COLORS, INPUTCONTAINER_SIZES } from 'components/InputContainer/InputContainer';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import Input, { INPUT_KIND } from 'components/Input/Input';
import Icon, { ICON_TYPES } from 'components/Icon/Icon';
import { faArrowRight, faMapMarkedAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import './SearchBarFlights.scss';

const SearchBarFlights = () => (
    <div className='search-bar-flights'>
            <InputContainer
            color={INPUTCONTAINER_COLORS.TRASLUCID}
            size={INPUTCONTAINER_SIZES.MEDIUMFLIGHTS}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faMapMarkedAlt}
        >
            <Input name='departure' placeholder='Departure' type='text' />
        </InputContainer>


        <InputContainer
            color={INPUTCONTAINER_COLORS.TRASLUCID}
            size={INPUTCONTAINER_SIZES.MEDIUMFLIGHTS}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faMapMarkedAlt}
            text='To'
        >
            
            <Input name='arrival' placeholder='Arrival' type='text' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.TRASLUCID}
            size={INPUTCONTAINER_SIZES.SMALLFLIGHTS}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faCalendarAlt}
            text='Depart'
        >
            <Input name='check-in' placeholder='Check-in' type='date' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.TRASLUCID}
            size={INPUTCONTAINER_SIZES.SMALLFLIGHTS}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faCalendarAlt}
            text='Arrival'
        >
            <Input name='check-out' placeholder='Check-out' type='date' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.TRASLUCID}
            size={INPUTCONTAINER_SIZES.SMALLFLIGHTS}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faUsers}
            text='Passengers'
        >
            <Input name='passangers' placeholder='Passangers' type='' />
        </InputContainer>

        <Button
            type={BUTTON_TYPES.SEARCHFLIGHTS}
            text='EDIT'
        />

    </div>
)

export default SearchBarFlights