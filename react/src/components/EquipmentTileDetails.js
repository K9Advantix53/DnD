import React, { Component } from 'react'
import { Link } from 'react-router';

class EquipmentTileDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEquipmentLoaded: false,
      equipment: {}
    }
  }

  componentDidMount() {
    fetch(`http://www.dnd5eapi.co/api/equipment/${this.props.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ isEquipmentLoaded: true, equipment: responseData})
      })
  }

  render() {
    return (this.state.isEquipmentLoaded) ? (
      <div>
        {this.state.equipment.name}
        <div>
          Equipment Category: {this.state.equipment.equipment_category}
        </div>

        <div>
          Gear Category: {this.state.equipment.gear_category}
        </div>

        <div>
          Vehicle Category: {this.state.equipment.vehicle_category}
        </div>

        <div>
          Weapon Category: {this.state.equipment.weapon_category}
        </div>

        <div>
          Category Range: {this.state.equipment.category_range}
        </div>

        <div>
          Cost: {this.state.equipment.cost.quantity} {this.state.equipment.cost.unit}
        </div>

        <div>
          DICE
        </div>

        <div>
          Range(normal)
        </div>

        <div>
          Range(long)
        </div>

        <div>
          Weight: {this.state.equipment.weight}
        </div>

        <div>
          Description: {this.state.equipment.desc}
        </div>
      </div>
    ): <div>Loading Equipment Data...</div>
  }
}

export default EquipmentTileDetails
