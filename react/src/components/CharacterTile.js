import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

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
        <Link to={`/characters/${this.props.id}`}>{this.state.character.name}</Link>
      </div>
    )
  }
}

export default CharacterTile
