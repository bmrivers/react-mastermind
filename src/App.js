import React, { Component } from 'react';
import logo from './logo.svg';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <footer className="component">footer</footer>
      </div>
    );
  }
}

export default App;
