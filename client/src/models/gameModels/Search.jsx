import React from 'react';
import history from '../../history.js';
import searchStyles from '../../styles/search.css';

class Search extends React.Component {
  handleSubmit(event) {
    const userName = event.target.elements[0].value;
    const path = `/username/${userName}`
    history.push(path);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="userName" className={searchStyles.input} />{' '}
        <button type="submit" className={searchStyles.GGButton}>{'GG!'}</button>
      </form>
    )
  }
}

export default Search;
