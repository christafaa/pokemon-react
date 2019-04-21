import React, { Component } from 'react';
import Character from './components/Character'
import Team from './components/Team'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3><strong>Create Your Pokémon Team</strong></h3>
          <div id="character-team-container">
            <Character />
            <Team />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
