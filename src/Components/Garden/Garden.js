import React, { Component } from 'react';
import './Garden.scss'

class Garden extends Component {

  render() {
    return(
      <div>
        <h1>Current Garden</h1>
        <div>
          <p>This will display all your plants in that Garden.</p>
        </div>
        <h4>Description: Description of your Garden</h4>
      </div>
    )
  }
}

export default Garden;