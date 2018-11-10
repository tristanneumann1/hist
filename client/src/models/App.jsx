import React from 'react';
import axios from 'axios';
import styles from '../styles/hist.css';

import Game from './Game.jsx';

// this.props.params.username;

function findParticipantAndTeam(game, player) {
  for (let i = 0; i < game.participantIdentities.length; i++) {
    if (game.participantIdentities[i].player.summonerName.toLowerCase() === player) {
      console.log(game.participantIdentities[i]);
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
    const player = props.match.params.username;
    this.state = {
      games: [],
      player,
    };
  }

  componentDidMount() {
    this.getGames(this.props.match.params.username);
  }

  getGames(params) {
    axios.get(`/api/summoner/?username=${params}`)
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
            console.log('in map, participant and team: ', participantId, teamId);
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
