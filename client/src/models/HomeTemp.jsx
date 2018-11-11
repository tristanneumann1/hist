import React from 'react';
import history from '../history.js';

class HomeTemp extends React.Component{
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const path = `/username/${userName}`
    history.push(path);
  };
  render () {
    return (
      <div>
        <h1> Home Page </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="userName" />{' '}
          <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}

export default HomeTemp;
