import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

class EquipmentTile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <li>
          <Link to={`/equipments/${this.props.id}`}>{this.props.name}</Link>
        </li>
      </div>
    )
  }
}

export default EquipmentTile
