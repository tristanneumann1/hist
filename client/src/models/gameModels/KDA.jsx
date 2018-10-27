import React from 'react';
import styles from '../../styles/game.css';

const KDA = (props) => {
  const { kills, deaths, assists } = props.participant.stats;
  return (
    <div className={styles.kda}>
      <div className={styles.kdaChildren}>
        <img src="./images/icons/killIcon.png" alt="killIcon" className={styles.icon} />
        <img src="./images/icons/deathIcon.png" alt="deathIcon" className={styles.icon} />
        <img src="./images/icons/assistIcon.png" alt="AssistIcon" className={styles.icon} />
      </div>
      <div className={styles.kdaChildren}>
        <div className={styles.kdaStat}>{`${kills}`}</div>
        <div className={styles.kdaStat}>{`${deaths}`}</div>
        <div className={styles.kdaStat}>{`${assists}`}</div>
      </div>
      <div className={styles.kdaAverage}>
        {`${deaths ? Math.floor(10 * (kills + assists) / deaths) / 10 : 'Perfect'}`}
      </div>
    </div>
  )
}

export default KDA;
