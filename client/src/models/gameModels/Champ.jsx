import React from 'react';
import axios from 'axios';
import styles from '../../styles/game.css';

class Champ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }

  componentDidMount() {
    if (this.props.champ && !this.state.image.length) {
      axios.get(`api/championImg?key=${this.props.champ}`)
        .then((imgData) => {  
          this.setState({ image: imgData.data.full });
        })
        .catch((err) => {
          console.error(err);
        });
    }    
  }

  render() {
    return (
      <div className={styles.champ}>
        <img src={`./images/champions/${this.state.image}`} alt="champion square" height="42" width="42" />
      </div>
    );
  }
}

export default Champ;
