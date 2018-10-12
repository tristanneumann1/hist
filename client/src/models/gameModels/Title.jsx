import React from 'react';
import styles from '../../styles/game.css';

const Title = (props) => <span className={styles.title}>
  {props.gameMode}: {props.win}
</span>

export default Title;
