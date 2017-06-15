import React, { Component } from 'react'
import { Link } from 'react-router';

class CharacterTileDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: {}
    }
  }

  componentWillMount() {
    fetch(`http://www.dnd5eapi.co/api/classes/${this.props.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ character: responseData })
      })
  }

  render() {
    debugger;
    return(
      <div>
        {this.state.character.name}
        {this.state.character.hit_die}
      </div>
    )
  }
}

export default CharacterTileDetails
