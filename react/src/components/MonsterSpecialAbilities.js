import React, { Component } from 'react'
import { Link } from 'react-router'

class MonsterSpecialAbilities extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        -----------------
        {this.props.desc}
      </div>
    )
  }
}

export default MonsterSpecialAbilities
