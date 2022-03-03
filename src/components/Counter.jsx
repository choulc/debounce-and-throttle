import React, { useState } from 'react';
import '../Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleMouseEnter = () => {
        console.log('enter!')
    }

    const handleMouseMove = () => {
        console.log('move!')
        setCount(count + 1)
    }

    const handleMouseLeave = () => {
        console.log('leave!')
    }

    return (
        <div
            className='counter-container'
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {count}
        </div>
    );
}

export default Counter;