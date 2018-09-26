import React from 'react';
import styles from '../styles/game.css';
import Title from './gameModels/Title.jsx';
import Champ from './gameModels/Champ.jsx';
import Summoners from './gameModels/Summoners.jsx';
import KDA from './gameModels/KDA.jsx';
import Items from './gameModels/Items.jsx';
import Stats from './gameModels/Stats.jsx';

class Game extends React.Component {
  render() {
    return (
      <div className={styles.gameContainer}>
        <Title />
        <Champ />
        <Summoners />
        <KDA />
        <Items />
        <Stats />
      </div>
    );
  }
}

export default Game;