import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
const Ex = React.lazy(() => import('./Ex'));

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
          <Suspense fallback={<div>Loading...</div>}>
          <Ex />
          </Suspense>
        </a>
      </header>
    </div>
  );
}

export default App;
