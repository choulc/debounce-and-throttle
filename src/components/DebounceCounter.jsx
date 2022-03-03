import React, { useState } from 'react';
import '../Counter.css';

const DebounceCounter = () => {

    function debounce(func, delay = 250) {
        let timer = null;

        return () => {

            clearTimeout(timer);
            timer = setTimeout(() => {
                func.call();
            }, delay)
        }
    }

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
            onMouseMove={debounce(handleMouseMove, 1000)}
            onMouseLeave={handleMouseLeave}
        >
            {count}
        </div>
    );
}

export default DebounceCounter;