import React, { useState } from 'react';
import '../Counter.css';

const ThrottleCounter = () => {

    const [count, setCount] = useState(0)
    const [last, setLast] = useState(null)

    function throttle(func, timeout = 250) {

        let timer;

        return () => {
            const now = +new Date();

            if (last && now < last + timeout) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    setLast(now)
                    func.call()
                }, timeout)
            } else {
                setLast(now)
                func.call()
            }
        }
    }

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
            onMouseMove={throttle(handleMouseMove, 1000)}
            onMouseLeave={handleMouseLeave}
        >
            {count}
        </div>
    );
}

export default ThrottleCounter;