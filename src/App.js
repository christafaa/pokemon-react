import React, { Component } from 'react';
import Character from './components/Character'
import Team from './components/Team'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="character-team-container">
          <h3><strong>Create Your Pokémon Team</strong></h3>
          <Character />
          <Team />
        </header>
      </div>
    );
  }
}

export default App;
