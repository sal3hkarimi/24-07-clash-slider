import React from 'react'
import BuyClass from './BuyClass'
import BuyFunction from './BuyFunction'

export default function Buy({name}) {
    return (
        <div className='badge-wrapper'>
            <BuyFunction name={name} />
            <BuyClass name={name}/>
        </div>
    )
}
