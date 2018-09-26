import React from 'react';
import styles from '../styles/hist.css';
import Game from './Game.jsx';

class App extends React.Component {
  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.gamesContainer}>
          <Game />
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
