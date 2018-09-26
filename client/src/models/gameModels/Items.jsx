import React from 'react';
import styles from '../../styles/game.css';

class Items extends React.Component {
  render() {
    return (
      <span className={styles.items}>
        {`Items here`}
      </span>
    );
  }
}

export default Items;