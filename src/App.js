import './App.css';
import Counter from './components/Counter';
import DebounceCounter from './components/DebounceCounter';
import ThrottleCounter from './components/ThrottleCounter';

function App() {

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

export default App;
