import logo from './logo.svg';
import './App.css';

import Stateful from "./test/recducer/reducer";
import Counter from "./test/classComponent/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Stateful initCount={1}></Stateful>
      <Counter initCount={100}></Counter>
    </div>
  );
}

export default App;
