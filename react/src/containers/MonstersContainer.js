import React, { Component } from 'react'
import { Link } from 'react-router';
import MonsterSpecialAbilities from '../components/MonsterSpecialAbilities'

class MonstersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monster: {},
      number: Math.floor((Math.random())*325),
      monster_special_abilities: {},
      monster_actions: {}
    }
    this.handleRandomClick = this.handleRandomClick.bind(this)
  }

  handleRandomClick() {
    let new_number;
    let new_seed_number = this.state.number + Math.floor((Math.random())*325);
    if(new_seed_number > 325) {
      new_number = new_seed_number - 325
    } else {
      new_number = new_seed_number
    }
    this.setState({ number: new_number })
    fetch(`http://www.dnd5eapi.co/api/monsters/${this.state.number}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ monster: responseData })
      })
  }

  componentDidMount() {
    fetch(`http://www.dnd5eapi.co/api/monsters/${this.state.number}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ monster: responseData })
        this.setState({ monster_special_abilities: responseData.special_abilities })
        this.setState({ monster_actions: responseData.actions })
      })
  }

  render() {
    return(
      <div>
        {this.state.monster.name}
        <div>
          Size: {this.state.monster.size}
        </div>
        <div>
          Type: {this.state.monster.type}
        </div>
        <div>
          Alignment: {this.state.monster.alignment}
        </div>
        <div>
          AC: {this.state.monster.armor_class}
        </div>
        <div>
          HP: {this.state.monster.hit_points}
        </div>
        <div>
          Speed: {this.state.monster.speed}
        </div>
        <div>
          Difficulty: {this.state.monster.challenge_rating}
        </div>
        <div>
        </div>
        <button onClick={this.handleRandomClick}>Random</button>
      </div>
    )
  }
}

export default MonstersContainer
