import React, { Component } from 'react'
import { Link } from 'react-router';
import MonsterSpecialAbilities from '../components/MonsterSpecialAbilities'
import MonsterActions from '../components/MonsterActions'
import LegendaryActions from '../components/LegendaryActions'

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
    let new_number = Math.floor((Math.random())*325);
    this.setState({ isDataLoaded: false })
    this.setState({ number: new_number })
    fetch(`http://www.dnd5eapi.co/api/monsters/${this.state.number}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ monster: responseData })
      })
    this.setState({ isDataLoaded: true })
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
    let legend_actions;

    if (this.state.isDataLoaded && this.state.monster.special_abilities && this.state.monster.legendary_actions == null) {
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
      legend_actions = ['N/A']
    } else if (this.state.isDataLoaded && this.state.monster.special_abilities == null && this.state.monster.legendary_actions) {
      monster_actions = this.state.monster.actions.map((action) =>
        <MonsterActions
          desc={action.desc}
        />
      )
      legend_actions = this.state.monster.legendary_actions.map((action) =>
        <LegendaryActions
          desc={action.desc}
        />
      )
      spec_abilities = ['N/A']
    } else if (this.state.isDataLoaded && this.state.monster.legendary_actions && this.state.monster.special_abilities) {
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
      legend_actions = this.state.monster.legendary_actions.map((action) =>
        <LegendaryActions
          desc={action.desc}
        />
      )
    } else if (this.state.isDataLoaded && this.state.monster.legendary_actions == null && this.state.monster.special_abilities == null) {
      monster_actions = this.state.monster.actions.map((action) =>
        <MonsterActions
          desc={action.desc}
        />
      )
      spec_abilities = ['N/A']
      legend_actions = ['N/A']
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
          Str:{this.state.monster.strength} ||
          Dex:{this.state.monster.dexterity} ||
          Con:{this.state.monster.constitution} ||
          Int:{this.state.monster.intelligence} ||
          Wis:{this.state.monster.wisdom} ||
          Chr:{this.state.monster.charisma} ||
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
        <ul>
          <h4>Legendary Actions</h4>
          {legend_actions}
        </ul>
        <button onClick={this.handleRandomClick}>Random</button>
      </div>
    ): <div>loading monster data...</div>;
  }
}

export default MonstersContainer
