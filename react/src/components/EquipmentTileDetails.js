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
    let armor_category;
    if (this.state.isEquipmentLoaded && this.state.equipment['armor_category:'] && (typeof (this.state.equipment['armor_category:'])) == 'string') {
      armor_category = (
        <span>
          {this.state.equipment['armor_category:']}
        </span>
      )
    } else if (this.state.isEquipmentLoaded && this.state.equipment['armor_category:']) {
      armor_category = (
        <span>
          {this.state.equipment['armor_category:'].name}
        </span>
      )
    }

    let armor_info;
    if (this.state.equipment['armor_category:']) {
      armor_info = (
        <span>
          {this.state.equipment.armor_class.base}
        </span>
      )
    } else {
      armor_info = (
        <span>
        </span>
      )
    }

    let damage_info;
    if (this.state.equipment.damage) {
      damage_info = (
        <span>
          {this.state.equipment.damage.dice_count} d      {this.state.equipment.damage.dice_value}
        </span>
      )
    } else {
      damage_info = (
        <div>
        </div>
      )
    }

    let range_info;
    if (this.state.equipment.range) {
      range_info = (
        <span>
          <div>
            {this.state.equipment.range.normal} Normal Range
          </div>
          <div>
            {this.state.equipment.range.long} Long Range
          </div>
        </span>
      )
    } else {
      range_info = (
        <div>
        </div>
      )
    }

    let equipment_properties;
    if (this.state.equipment.properties) {
      equipment_properties = (
        <span>
          {this.state.equipment.properties[0].name}
        </span>
      )
    } else {
      equipment_properties = (
        <div>
        </div>
      )
    }
    return (this.state.isEquipmentLoaded && damage_info && range_info && equipment_properties) ? (
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
          Weapon Category: {this.state.equipment['weapon_category:']}
        </div>

        <div>
          Armor Category: {armor_category}
        </div>

        <div>
          Armor Class: {armor_info}
        </div>

        <div>
          Weapon Range: {this.state.equipment.weapon_range}
        </div>

        <div>
          Category Range: {this.state.equipment.category_range}
        </div>

        <div>
          Cost: {this.state.equipment.cost.quantity} {this.state.equipment.cost.unit}
        </div>

        <div>
          Damage: {damage_info}
        </div>

        <div>
          Range: {range_info}
        </div>

        <div>
          Properties: {equipment_properties}
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
