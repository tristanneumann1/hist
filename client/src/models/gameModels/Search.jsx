import React from 'react';
import history from '../../history.js';

class Search extends React.Component {
  handleSubmit(event) {
    // event.preventDefault();
    const userName = event.target.elements[0].value;
    const path = `/username/${userName}`
    history.push(path);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="userName" />{' '}
        <button type="submit">Go</button>
      </form>
    )
  }
}

export default Search;
