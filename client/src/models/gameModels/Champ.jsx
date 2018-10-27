import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/game.css';

import { version } from '../../../../Riot/config';
import champions from '../../../../Riot/champions.json';

function Champ(props) {
  const { champ } = props;
  return (
    <div className={styles.champ}>
      <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions[champ]}`} alt="champion square" className={styles.champPic} />
    </div>
  );
}

Champ.propTypes = {
  champ: PropTypes.number.isRequired,
};

export default Champ;
