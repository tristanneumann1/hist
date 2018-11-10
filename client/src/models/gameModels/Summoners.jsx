import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/game.css';
import runes from '../../../../Riot/runes.json';
import summoners from '../../../../Riot/summoners.json';
import { version } from '../../../../Riot/config';

const missingRune = '../images/0000.png';

const Summoners = (props) => {
  const { keyStone, subStone, summs } = props;
  return (
    <span className={styles.summoners}>
      <img src={summoners[summs[0]] ? `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${summoners[summs[0]].image.full}` : missingRune} alt="summ1 Icon" height="25" width="25" />
      <img src={summoners[summs[0]] ? `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${summoners[summs[1]].image.full}` : missingRune} alt="summ2 Icon" height="25" width="25" />
      <br />
      <img src={runes[keyStone] ? `https://ddragon.leagueoflegends.com/cdn/img/${runes[keyStone].icon}` : missingRune} alt="keyStone Icon" height="25" width="25" />
      <img src={runes[subStone] ? `https://ddragon.leagueoflegends.com/cdn/img/${runes[subStone].icon}` : missingRune} alt="subStone Icon" height="25" width="25" />
    </span>
  );
};


Summoners.propTypes = {
  keyStone: PropTypes.number.isRequired,
  subStone: PropTypes.number.isRequired,
  summs: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Summoners;
