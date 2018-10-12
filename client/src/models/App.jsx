import React from 'react';
import axios from 'axios';
import styles from '../styles/hist.css';

import Game from './Game.jsx';

function findParticipantAndTeam(game, player) {
  for (let i = 0; i < game.participantIdentities.length; i++) {
    if (game.participantIdentities[i].player.summonerName.toLowerCase() === player) {
      return {
        participantId: game.participantIdentities[i].participantId,
        teamId: game.participants[i].teamId,
      };
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1];
    const player = /username=(.+)&*$/.exec(id) && /username=(.+)&*$/.exec(id)[1];
    this.state = {
      games: [],
      player,
    };
  }

  componentDidMount() {
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1];
    if (id) {
      this.getGames(id);
    }
  }

  getGames(params) { // region = 'NA1',username,endIndex = 10,beginIndex = 0,champion,
    axios.get(`/api/summoner${params}`)
      .then((gamesData) => {
        this.setState({ games: gamesData.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { player, games } = this.state;
    return (
      <div className={styles.outerContainer}>
        <div className={styles.gamesContainer}>
          {games.map((game) => {
            const { participantId, teamId } = findParticipantAndTeam(game, player);
            return (
              <Game
                game={game}
                key={game.gameId}
                player={player}
                participantId={participantId}
                teamId={teamId}
              />
            );
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
