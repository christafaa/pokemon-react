import React, { Component } from 'react';
import questionMark from '../assets/images/question-mark.png'

export default class Team extends Component {

  // this.state = {
  //   pokemon: []
  // }

  render() {
    return (
      <div id="team">
        <div id="row1">
          <img className="pokemon" src={questionMark}/>
          <img className="pokemon" src={questionMark}/>
          <img className="pokemon" src={questionMark}/>
        </div>
        <div id="row2">
          <img className="pokemon" src={questionMark}/>
          <img className="pokemon" src={questionMark}/>
          <img className="pokemon" src={questionMark}/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/" + 6;
    fetch(url)
    .then(response => response.json())
    .then(spriteUrl => console.log(spriteUrl.sprites.front_default));
  }
}
