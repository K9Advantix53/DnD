// NOT BEING USED
import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      isItemLoaded: false,
      item:{}
    }
  }

  componentDidMount() {
    fetch(`http://www.dnd5eapi.co/api/items/${this.props.index}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ item: responseData, isItemLoaded: true })
      })
  }

  render() {
    return(this.state.isItemLoaded) ? (
      <div>
        {this.state.item.equipment_category}
      </div>
    ): <div>Loading Item Data...</div>
  }
}

export default ItemDetails
