import React, { Component } from 'react'
import { Link } from 'react-router'

class MonsterActions extends Component {
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

export default MonsterActions
