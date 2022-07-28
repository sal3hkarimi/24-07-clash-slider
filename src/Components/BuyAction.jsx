import React from 'react';
import BuyBtn from './BuyBtn';
import Count from './Count';

export default function BuyAction() {
    return (
        <div className='buy-action'>
            <Count />
            <BuyBtn />
        </div>
    )
}
