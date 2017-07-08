import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

const DiceResult = (props) => {
  return (
    <li>
      {props.roll}
    </li>
  )
}

export default DiceResult
