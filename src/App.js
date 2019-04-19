import React, { Component } from 'react';
import Character from './components/Character'
import Team from './components/Team'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Create Your Pokémon Team</p>
          <Character />
          <Team />
        </header>
      </div>
    );
  }
}

export default App;
