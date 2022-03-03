import React from 'react';
import Counter from './Counter';
import DebounceCounter from './DebounceCounter';
import ThrottleCounter from './ThrottleCounter';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div>Counter</div>
                <Counter />
                <div>Debounce Counter</div>
                <DebounceCounter />
                <div>Throttle Counter</div>
                <ThrottleCounter />
            </header>
        </div>
    );
}

export default Home;