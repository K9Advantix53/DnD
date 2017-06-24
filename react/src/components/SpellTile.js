import React, { Component } from 'react'
import { Link } from 'react-router'

class SpellTile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <li>
          <Link to={`/spells/${this.props.id}`}>{this.props.name}</Link>
        </li>
      </div>
    )
  }
}

export default SpellTile
