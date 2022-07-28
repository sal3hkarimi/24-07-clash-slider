import React, { useState, useEffect } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);

    function increment() {
        setTimeout(() => {
            setCount(count => count + 1)
            console.log(count);
        }, 1000)

    }

    function decrement() {
        setTimeout(() => count > 0 && setCount(count - 1), 1000)
    }

    useEffect(() => {
        console.log('useEffect');
    })

    return (
        <div className="counter">
            <button onClick={decrement} className='subtraction'>-</button>
            <p className="count">{count}</p>
            <button onClick={increment} className='plus'>+</button>
        </div>
    )
}
