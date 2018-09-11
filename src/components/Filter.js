import React, { Component } from 'react';

class Filter extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
           id="title-filter"
           type="text"
           onChange={ (event) => this.props.handleSearch(event.target.value)}
          />
      </div>
    );
  }
}

export default Filter;
