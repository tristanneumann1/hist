import React from 'react';
import axios from 'axios';
import styles from '../../styles/game.css';

class Summoners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summs1Icon: '',
      summs2Icon: '',
      keyStoneIcon: '',
      subStoneIcon: '',
    };
  }

  componentDidMount() {
    const { keyStone, subStone, summs } = this.props;
    const { keyStoneIcon, subStoneIcon, summs1Icon, summs2Icon } = this.state;
    if (keyStone && !keyStoneIcon.length) {
      axios.get(`api/runeImg?key=${keyStone}`)
        .then((imgData) => {
          this.setState({ keyStoneIcon: imgData.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (subStone && !subStoneIcon.length) {
      axios.get(`api/runeImg?key=${subStone}`)
        .then((imgData) => {
          this.setState({ subStoneIcon: imgData.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (summs && !summs1Icon.length && !summs2Icon.length) {
      axios.get(`api/summsImg?key=${summs[0]}`)
        .then((imgData) => {
          this.setState({ summs1Icon: imgData.data });
        })
        .catch((err) => {
          console.error(err);
        });
      axios.get(`api/summsImg?key=${summs[1]}`)
        .then((imgData) => {
          this.setState({ summs2Icon: imgData.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <span className={styles.summoners}>
        <img src={`./images/summoners/${this.state.summs1Icon}`} alt="summ1 Icon" height="25" width="25" />
        <img src={`./images/summoners/${this.state.summs2Icon}`} alt="summ2 Icon" height="25" width="25" />
        <br />
        <img src={`./images/runes/${this.state.keyStoneIcon}`} alt="keyStone Icon" height="25" width="25" />
        <img src={`./images/runes/${this.state.subStoneIcon}`} alt="subStone Icon" height="25" width="25" />
      </span>
    );
  }
}

export default Summoners;
