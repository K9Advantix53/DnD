import React, { Component } from 'react'
import { Link } from 'react-router'

const SearchBar = (props) => {
  return (
    <div className='searchBar'>
      <input id='searchBar' name="search" type="text" onChange={props.onChange} value={props.search} placeholder='Search For Equipment...'/>
    </div>
  );
}

export default SearchBar;
