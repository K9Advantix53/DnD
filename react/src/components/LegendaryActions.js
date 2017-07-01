import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

class LegendaryActions extends Component {
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

export default LegendaryActions
