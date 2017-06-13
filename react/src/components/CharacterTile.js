import React, { Component } from 'react'

class CharacterTile extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    fetch(`http://www.dnd5eapi.co/api/classes/${this.props}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ characters: responseData })
      })
  }

  render() {
    return(
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default CharacterTile
