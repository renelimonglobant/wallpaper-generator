import React from 'react';
import logo from './assets/clock.png';
import './App.css';
import Canvas from './components/Canvas'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='logo' width={20}  />
        <h1>Wallpapers generator</h1>
      </header>
      <Canvas width={300} height={300} />
    </div>
  );
}

export default App;
