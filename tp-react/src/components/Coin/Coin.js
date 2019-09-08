import React from 'react';
import './Coin.scss';

const Coin = ({coinSymbol, coinName, className}) => (
    <div className={`coin ${className} ${coinSymbol} ${coinName}`}>
        <div className='coin-symbol'>{coinSymbol}</div>
        <div className='coin-name'>{coinName}</div>
    </div>
)

export default Coin