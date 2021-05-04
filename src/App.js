import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter= useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      {isLogged ? <h3>Valuable information shown only when isLogged is true </h3> : ''}
    </div>
  );
}

export default App;
