import React, { Component } from 'react'
import { Link } from 'react-router';

class SpellTileDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSpellLoaded: false,
      spell: {}
    }
  }

  componentDidMount() {
    fetch(`http://www.dnd5eapi.co/api/spells/${this.props.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ isSpellLoaded: true, spell: responseData})
      })
  }

  render() {
    return (this.state.isSpellLoaded) ? (
      <div>
        {this.state.spell.name}
        <div>
          Description {this.state.spell.desc}
        </div>

        <div>
          Range: {this.state.spell.range}
        </div>

        <div>
          Components:
        </div>

        <div>
          Ritual Required?: {this.state.spell.ritual}
        </div>

        <div>
          Duration: {this.state.spell.duration}
        </div>

        <div>
          Casting Time: {this.state.spell.casting_time}
        </div>

        <div>
          Level: {this.state.spell.level}
        </div>

        <div>
          School: {this.state.spell.school.name}
        </div>
      </div>
    ): <div>Loading Spell Data...</div>
  }
}

export default SpellTileDetails
