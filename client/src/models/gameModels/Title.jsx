import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/game.css';

const Title = (props) => {
  const { gameMode, win } = props;
  return (
    <h1 className={styles.title}>
      {gameMode}
      {':'}
      <span className={`${win === 'Win' ? styles.titleWin1 : styles.titleWin0} ${styles.titleWin}`}>
        {win}
      </span>
    </h1>
  )
};

Title.propTypes = {
  gameMode: PropTypes.string.isRequired,
  win: PropTypes.string.isRequired,
};

export default Title;
