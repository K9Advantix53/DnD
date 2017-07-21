import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

class SpellTile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <li className='tile'>
          <Link to={`/spells/${this.props.id}`}>{this.props.name}</Link>
        </li>
      </div>
    )
  }
}

export default SpellTile
