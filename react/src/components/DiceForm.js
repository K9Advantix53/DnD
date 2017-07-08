import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router';

const DiceForm = (props) => {
  return (
    <form>
      <input
        placeholder="number of die"
        value={props.number}
        onChange={props.handleNumberChange}
      />D
      <input
        placeholder="number of faces for each die"
        value={props.faces}
        onChange={props.handleFacesChange}
      />
      <input type="submit" value="roll dice(s)" onClick={props.handleFormSubmit}/>
    </form>
  )
}

export default DiceForm
