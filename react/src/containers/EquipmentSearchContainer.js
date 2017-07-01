import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';
import SearchBar from '../components/SearchBar'
import EquipmentTile from '../components/EquipmentTile'
import EquipmentTileDetails from '../components/EquipmentTileDetails'

class EquipmentSearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      search: '',
      results: []
    }
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  fetchSearchResults() {
    let search = { search: this.state.search }
    fetch(`/api/v1/equipments`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(search)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ results: body})
    });
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value })
    this.fetchSearchResults();
  }

  render() {
    let search_results = this.state.results.map((result) => {
      return(
        <EquipmentTile
          key={result.id}
          id={result.id}
          name={result.name}
          url={result.url}
        />
      )
    })
    this.state.results.map((result) => {
      return(
        <EquipmentTileDetails
        key={result.id}
        id={result.id}
        name={result.name}
        url={result.url}
        />
      )
    })
    return(
      <div>
        <button className="button" onClick={browserHistory.goBack}>
          Back
        </button>
        <SearchBar
          search={this.state.search}
          onChange={this.handleSearchChange}
        />
        <div className='results'>
          {search_results}
        </div>
      </div>
    )
  }
}

export default EquipmentSearchContainer
