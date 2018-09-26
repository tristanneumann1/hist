import React from 'react';
import styles from '../../styles/game.css';

class Champ extends React.Component {
  render() {
    return (
      <span className={styles.champ}>
        {`Champ here \n
        And here \n
        here \n
        And here`}
      </span>
    );
  }
}

export default Champ;