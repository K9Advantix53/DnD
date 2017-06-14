import React, { Component } from 'react'
import { Link } from 'react-router';
import CharacterTileDetails from './CharacterTileDetails'

class CharacterTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: {}
    }
  }

  componentWillMount() {
    fetch(`http://www.dnd5eapi.co/api/classes/${this.props.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ character: responseData })
      })
  }

  render() {
    return(
      <div>
        <CharacterTileDetails
          key={this.props.id}
          id={this.props.id}
          name={this.state.character.name}
          hit_die={this.state.character.hit_die}
        />
        <Link to={`/characters/${this.props.id}`}>{this.state.character.name}</Link>
      </div>
    )
  }
}

export default CharacterTile
