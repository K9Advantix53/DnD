import React, { Component } from 'react'
import { Link } from 'react-router';
import MonsterSpecialAbilities from '../components/MonsterSpecialAbilities'

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
    const { isDataLoaded, monster } = this.state;
    const monsterProps = { isDataLoaded, monster };
    return <Monsters isDataLoaded={isDataLoaded} monster={monster} />
  }
}

function Monsters(props) {
   const {isDataLoaded, monster} = props;
   let spec_abilities;

    if (isDataLoaded && monster.special_abilities) {
      spec_abilities = monster.special_abilities.map((ab) =>
        <MonsterSpecialAbilities
          key={ab.desc}
          desc={ab.desc}
        />
      );
    }

    return (isDataLoaded && spec_abilities && monster.name) ? (
      <div>
        <h1>{monster.name}</h1>
        <div>
          Size: {monster.size}
        </div>
        <div>
          Type: {monster.type}
        </div>
        <div>
          Alignment: {monster.alignment}
        </div>
        <div>
          AC: {monster.armor_class}
        </div>
        <div>
          HP: {monster.hit_points}
        </div>
        <div>
          Speed: {monster.speed}
        </div>
        <div>
          Difficulty: {monster.challenge_rating}
        </div>
        <ul>
          <h4>Special Abilities</h4>
          {spec_abilities}
        </ul>
      </div>
    ): <div>loading monster data...</div>;

}

export default MonstersContainer
