import React, { Component } from 'react'
import { Link } from 'react-router'
import ItemDetails from './ItemDetails'

class CharacterStartingEquipment extends Component {
  constructor(props) {
    super(props)
    this.state={
      isItemLoaded: false,
      item: {}
    }
  }

  componentDidMount() {
    fetch(`${this.props.itemUrl}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ isItemLoaded: true, item: responseData })
      })
  }

  render() {
    return (this.state.isItemLoaded) ? (
      <div>
        <li>
          {this.props.quantity}
          {this.props.name}
        </li>
      </div>
    ): <div>Loading Item Data...</div>
  }
}

export default CharacterStartingEquipment
