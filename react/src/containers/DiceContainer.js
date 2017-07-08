import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';
import DiceForm from '../components/DiceForm'
import DiceResults from '../components/DiceResults'

class DiceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      faces: '',
      results: []
    }
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleFacesChange = this.handleFacesChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleNumberChange(event) {
    let number = event.target.value
    this.setState({ number: number })
  }

  handleFacesChange(event) {
    let faces = event.target.value
    this.setState({ faces: faces })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let number = parseInt(this.state.number)
    let results = []
    for (let i = 0; i < number; i++) {
      let newRoll = Math.floor(Math.random() * this.state.faces) + 1
      results.push(newRoll)
    }
    this.setState({ results: results })
  }

  render() {
    return(
      <div>
        <DiceForm
          handleFormSubmit={this.handleFormSubmit}
          handleNumberChange={this.handleNumberChange}
          handleFacesChange={this.handleFacesChange}
          number={this.state.number}
          faces={this.state.faces}
        />
        <DiceResults
          results={this.state.results}
        />
      </div>
    )
  }
}

export default DiceContainer
