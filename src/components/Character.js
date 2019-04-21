import React, { Component } from 'react';
import ash from '../assets/images/ash.png'

export default class Character extends Component {

  render() {
    return (
      <div id="character">
        <img id="ash" src={ash} />
      </div>
    )
  }
}
