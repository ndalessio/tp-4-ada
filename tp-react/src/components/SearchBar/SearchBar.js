import React from 'react';
import InputContainer, { INPUTCONTAINER_COLORS, INPUTCONTAINER_SIZES } from 'components/InputContainer/InputContainer';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import Input, { INPUT_KIND } from 'components/Input/Input';
import Icon, { ICON_TYPES } from 'components/Icon/Icon';
import { faArrowRight, faMapMarkedAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import './SearchBar.scss';

const SearchBar = () => (
    <div className='search-bar'>
        <InputContainer
            color={INPUTCONTAINER_COLORS.SOLID}
            size={INPUTCONTAINER_SIZES.MEDIUM}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faMapMarkedAlt}
        >
            <Input name='departure' placeholder='Departure' type='text' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.SOLID}
            size={INPUTCONTAINER_SIZES.MEDIUM}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faMapMarkedAlt}
        >
            
            <Input name='arrival' placeholder='Arrival' type='text' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.SOLID}
            size={INPUTCONTAINER_SIZES.SMALL}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faCalendarAlt}
        >
            <Input name='check-in' placeholder='Check-in' type='date' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.SOLID}
            size={INPUTCONTAINER_SIZES.SMALL}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faCalendarAlt}
        >
            <Input name='check-out' placeholder='Check-out' type='date' />
        </InputContainer>

        <InputContainer
            color={INPUTCONTAINER_COLORS.SOLID}
            size={INPUTCONTAINER_SIZES.SMALL}
            kind={INPUT_KIND.SEARCH}
            type={ICON_TYPES.SEARCH}
            icon={faUsers}
        >
            <Input name='passangers' placeholder='Passangers' type='' />
        </InputContainer>

        <Button
            type={BUTTON_TYPES.SEARCH}
            icon={faArrowRight}
        />
    </div>
)

export default SearchBar