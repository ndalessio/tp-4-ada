import React from 'react';
import './Language.scss';

const Language = ({flag, language, className}) => (
    <div className={`languages ${className} ${flag} ${language}`}>
        <div className='flag'>{flag}</div>
        <div className='language'>{language}</div>
    </div>
)

export default Language