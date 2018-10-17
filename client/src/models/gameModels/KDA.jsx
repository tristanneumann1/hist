import React from 'react';
import styles from '../../styles/game.css';

const KDA = (props) => {
  const { kills, deaths, assists } = props.participant.stats;
  return (
    <div className={styles.kda}>
      {`${kills}/${deaths}/${assists}`}
      <br />
      {`${deaths ? Math.floor(10 * (kills + assists) / deaths) / 10 : 'Perfect'}`}
    </div>
  )
}

export default KDA;
