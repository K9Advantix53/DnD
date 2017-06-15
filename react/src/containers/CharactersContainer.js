import React, { Component } from 'react'
import CharacterTile from '../components/CharacterTile'
import CharacterTileDetails from '../components/CharacterTileDetails'

class CharactersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }

  render() {
    let all_characters = this.state.characters.map((character) => {
      return(
        <CharacterTile
          key={character}
          id={character}
        />
      )
    })
    let character = this.state.characters.map((character) => {
      return(
        <CharacterTileDetails
          key={character}
          id={character}
        />
      )
    })
    return(
      <div>
        {all_characters}
      </div>
    )
  }
}

export default CharactersContainer;
