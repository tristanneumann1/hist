import React from 'react';
import styles from '../styles/game.css';
import Title from './gameModels/Title.jsx';
import Champ from './gameModels/Champ.jsx';
import Summoners from './gameModels/Summoners.jsx';
import KDA from './gameModels/KDA.jsx';
import Items from './gameModels/Items.jsx';
import Stats from './gameModels/Stats.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      player: props.player,
      participantId: props.participantId,
      teamId: props.teamId,
    };
  }

  render() {
    const {
      game,
      participantId,
      player,
      teamId,
    } = this.state;
    const summs = [game.participants[participantId - 1].spell1Id, game.participants[participantId - 1].spell2Id];
    const keyStone = game.participants[participantId - 1].stats.perk0;
    const subStone = game.participants[participantId - 1].stats.perkSubStyle;
    console.log('props deconstruct', game, participantId, player, teamId, keyStone, subStone);
    return (
      <div className={styles.gameContainer}>
        <Title gameMode={game.gameMode} win={game.teams[(teamId / 100) - 1].win} />
        <Champ champ={game.participants[participantId - 1].championId} />
        <Summoners summs={summs} keyStone={keyStone} subStone={subStone} />
        <KDA participant={game.participants[participantId - 1]} />
        <Items participant={game.participants[participantId - 1]} />
        <Stats participant={game.participants[participantId - 1]} />
      </div>
    );
  }
}

export default Game;
