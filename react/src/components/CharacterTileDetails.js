import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';
import CharacterStartingEquipment from './CharacterStartingEquipment'

class CharacterTileDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCharacterLoaded: false,
      isEquipmentLoaded: false,
      character_starting_equipment: {},
      character: {}
    }
    this.handleCreateClick=this.handleCreateClick.bind(this)
  }

  componentDidMount() {
    fetch(`http://www.dnd5eapi.co/api/startingequipment/${this.props.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ character_starting_equipment: responseData, isEquipmentLoaded: true})
      })
    fetch(`http://www.dnd5eapi.co/api/classes/${this.props.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ character: responseData, isCharacterLoaded: true })
      })
  }

  handleCreateClick(event) {
    event.preventDefault()
    let payload = {
      profession: this.state.character.name,
      hit_dice: this.state.character.hit_die
    }
    fetch('/api/v1/characters', {
      credentials: "same-origin",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  }


  render() {
    let default_start_equip;
    if (this.state.isEquipmentLoaded && this.state.character_starting_equipment) {
      default_start_equip = this.state.character_starting_equipment.starting_equipment.map((item) =>
        <CharacterStartingEquipment
          quantity= {item.quantity}
          name= {item.item.name}
          itemUrl= {item.item.url}
        />
      )
    }

    return (this.state.isEquipmentLoaded && this.state.isCharacterLoaded) ?(
      <div>
        {this.state.character.name}
        <button className="button" onClick={browserHistory.goBack}>
          Back
        </button>
        <div>
          Hit die: 1d{this.state.character.hit_die}
        </div>
        <h4>Starting Equipment</h4>
        <ul>
          {default_start_equip}
        </ul>
        <button onClick={this.handleCreateClick}>Create Character!</button>
      </div>
    ): <div>loading character data...</div>;
  }
}

export default CharacterTileDetails
