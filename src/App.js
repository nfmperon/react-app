import logo from "./logo.svg";
import "./App.css";
const fibonacci = require ('fibonacci');
const bigNumber = fibonacci.iterate (8);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Modified and modified again on Aug 6.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {bigNumber}
        </a>
      </header>
    </div>
  );
}

export default App;
