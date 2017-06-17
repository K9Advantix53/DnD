import React, { Component } from 'react'
import { Link } from 'react-router';
import MonsterSpecialAbilities from '../components/MonsterSpecialAbilities'
import MonsterActions from '../components/MonsterActions'

class MonstersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDataLoaded: false,
      monster: {},
      number: Math.floor((Math.random())*325)
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
        this.setState({ isDataLoaded: true, monster: responseData })
      })
  }

  render() {
    let spec_abilities;
    let monster_actions;

    if (this.state.isDataLoaded && this.state.monster.special_abilities) {
      spec_abilities = this.state.monster.special_abilities.map((ab) =>
        <MonsterSpecialAbilities
          desc={ab.desc}
        />
      );
      monster_actions = this.state.monster.actions.map((action) =>
        <MonsterActions
          desc={action.desc}
        />
      )
    } else if (this.state.isDataLoaded && this.state.monster.actions && this.state.monster.special_abilities == null) {
      monster_actions = this.state.monster.actions.map((action) =>
        <MonsterActions
          desc={action.desc}
        />
      )
      spec_abilities = ['none']
    }

    return (this.state.isDataLoaded && monster_actions && this.state.monster.name) ? (
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
        <ul>
          <h4>Special Abilities</h4>
          {spec_abilities}
        </ul>
        <ul>
          <h4>Actions</h4>
          {monster_actions}
        </ul>
      </div>
    ): <div>loading monster data...</div>;
  }
}

export default MonstersContainer
