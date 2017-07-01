import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

class MonsterSpecialAbilities extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <li>
          {this.props.desc}
        </li>
      </div>
    )
  }
}

export default MonsterSpecialAbilities
