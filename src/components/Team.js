import React, { Component } from 'react';
import questionMark from '../images/question-mark.png'

export default class Team extends Component {

  // this.state = {
  //   pokemon: []
  // }

  render() {
    return (
      <div id="team">
        <img class="question-mark" src={questionMark} />
        <img class="question-mark" src={questionMark} />
        <img class="question-mark" src={questionMark} />
        <img class="question-mark" src={questionMark} />
        <img class="question-mark" src={questionMark} />
        <img class="question-mark" src={questionMark} />
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




// / Compose the url for the HTTP GET request
//     let url = "https://pokeapi.co/api/v2/pokemon/" + 6;
//     let pathToSprite = "sprites.front_default";
//
//     // Create a GET request with the Fetch API
//     fetch(url)
//       .then(response => response.json())
//       .then(spriteUrl => console.log(spriteUrl[pathToSprite]));
