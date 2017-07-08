import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';
import DiceResult from './DiceResult'

const DiceResults = (props) => {
  let results = props.results.map((result) => {
      return (
        <DiceResult
          roll={result}
        />
      )
    })

    return (
      <ul>
        {results}
      </ul>
    )
}

export default DiceResults
