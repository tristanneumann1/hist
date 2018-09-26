import React from 'react';
import styles from '../../styles/game.css';

class Title extends React.Component {
  render() {
    return (
      <span className={styles.title}>
        Normal: VICTORY
      </span>
    );
  }
}

export default Title;